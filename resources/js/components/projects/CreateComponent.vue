<template>
    <div class="card">
        <p class="text-primary" v-if="message.success">{{ message.success }}</p>
        <p class="text-danger" v-if="message.error">{{ message.error }}</p>
        <div class="card-header" >Create project</div>
        <div class="card-body">
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="title">Title </label>
                <input type="text" class="form-control" id="title"  placeholder="Enter title" v-model="project.title" />            
                <div v-if="errors && errors.title" class="text-danger">{{ errors.title[0] }}</div>
            </div>
            <div class="form-group">
                <label for="description">description</label>
                <textarea class="form-control"  v-model="project.description"></textarea>   
                <div v-if="errors && errors.description" class="text-danger">{{ errors.description[0] }}</div>         
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
                project: {
                    title: null,
                    description: null
                },
                message: {
                    success: null,
                    error: null           
                },
                errors: {}
            }
        },
        methods: {
            onSubmit: function(event){
                //console.log(this.project);
                axios
                    .post('/projects', this.project)
                    .then( response => {
                        console.log(response);                       
                        this.message = {success: "Project update",error: null};
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
                this.project.title = '';
                this.project.description = '';
            }       
             
        }
    }
</script>
