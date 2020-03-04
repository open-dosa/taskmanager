<template>
    <div class="card">
        <div class="card-header">Tasks</div>
        <div class="card-body">                        
            <router-link to="/tasks/create" class="btn btn-primary float-right" >Create task</router-link>            
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Project</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in tasks" :key="task.id">
                        <th scope="row">task.id</th>
                        <td><router-link :to="{ name: 'viewtask', params: { id: task.id }}" >{{ task.subject }}</router-link></td>
                        <td>{{ task.title }}</td>
                        <td>
                            <router-link :to="{ name: 'edittask', params: { id: task.id }}" class="btn btn-primary" >edit</router-link>                    
                            <button @click="(event) => { deletetask(event, task.id) }" class="btn btn-danger" >delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>                  

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tasks: null,
                message: {
                    success: null,
                    error: null           
                }

            }
        },
        mounted() {            
            axios
                .get('/tasks')
                .then(response => {                    
                    this.tasks = response.data;
                })            
        },
        methods: {
            deletetask: function(event, id){                
                let data = {_method: 'delete'};
                axios
                    .delete(`/tasks/${id}`, data)
                    .then( response => {
                        //console.log('all done');                              
                        let tasks = this.tasks.filter(task => { return task.id!=id; });
                        this.tasks = tasks;

                        this.message = {success: "task deleted",error: null};
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
