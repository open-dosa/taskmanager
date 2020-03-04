<template>
    <div class="card">
        <p class="text-primary" v-if="message.success">{{ message.success }}</p>
        <p class="text-danger" v-if="message.error">{{ message.error }}</p>
        <div class="card-header" >Create task</div>
        <div class="card-body">
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="subject">Subject </label>
                <input type="text" class="form-control" id="subject"  placeholder="Enter subject" v-model="tasks.subject" />            
                <div v-if="errors && errors.subject" class="text-danger">{{ errors.subject[0] }}</div>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control"  v-model="tasks.description"></textarea>   
                <div v-if="errors && errors.description" class="text-danger">{{ errors.description[0] }}</div>         
            </div>
            <div class="form-group">
                <label for="description">Project</label>
                <select class="form-control" id="project" v-model="tasks.project_id">
                    <option v-for="project in projects" :value="project.id" :key="project.id">{{ project.title }}</option>
                </select>                                
                <div v-if="errors && errors.project_id" class="text-danger">{{ errors.project_id[0] }}</div>         
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>            
        </div>	        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tasks: {
                    project_id: null,
                    subject: null,
                    description: null
                },
                projects: null,
                message: {
                    success: null,
                    error: null           
                },
                errors: {}
            }
        },
        mounted() {            
            axios
                .get('/projects')
                .then(response => {                    
                    this.projects = response.data;
                })            
        },
        methods: {
            onSubmit: function(event){
                //console.log(this.tasks);
                axios
                    .post('/taskss', this.tasks)
                    .then( response => {
                        console.log(response);                       
                        this.message = {success: "tasks update",error: null};
                        this.errors={};        
                        this.reset();
                    })
                    .catch( error => {
                        console.log(error.response);
                        this.message = {success: null,error: error.response.data.message};
                        this.errors = error.response.data.errors;

                    })
            },
            reset: function(){
                this.tasks.subject = '';
                this.tasks.description = '';
            }       
             
        }
    }
</script>
