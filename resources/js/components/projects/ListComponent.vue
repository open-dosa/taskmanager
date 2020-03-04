<template>
    <div class="card">
        <div class="card-header">Projects</div>
        <div class="card-body">            
            <router-link to="/projects/create" class="btn btn-primary float-right" >Create Project</router-link>
            <ol id="example-1">
                <li v-for="project in projects" :key="project.id" style="margin-bottom: 4px;">
                    <router-link :to="{ name: 'viewproject', params: { id: project.id }}" >{{ project.title }}</router-link>
                    <br/>
                    {{ project.description }}                      
                    <br/>
                    <router-link :to="{ name: 'editproject', params: { id: project.id }}" class="btn btn-primary" >edit</router-link>                    
                      <button @click="(event) => { deleteproject(event, project.id) }" class="btn btn-danger" >delete</button>
                </li>
            </ol>                        
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                projects: null,
                message: {
                    success: null,
                    error: null           
                }

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
            deleteproject: function(event, id){                
                let data = {_method: 'delete'};

                axios
                    .delete(`/projects/${id}`, data)
                    .then( response => {
                        //console.log('all done');                              
                        let projects = this.projects.filter(project => { return project.id!=id; });
                        this.projects = projects;

                        this.message = {success: "Project deleted",error: null};
                        this.reset();
                    })
                    .catch( error => {
                        ///console.log(error.response);                        
                        this.message = {success: null,error: error.response.data.message};
                    })
            }             
        }

    }
</script>
