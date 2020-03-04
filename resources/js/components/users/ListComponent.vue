<template>
    <div class="card">
        <div class="card-header">Users</div>
        <div class="card-body">            
            <router-link to="/users/create" class="btn btn-primary float-right" >Create user</router-link>            
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <th scope="row">user.id</th>
                        <td><router-link :to="{ name: 'viewuser', params: { id: user.id }}" >{{ user.name }}</router-link></td>
                        <td>{{ user.email }}</td>
                        <td>
                            <router-link :to="{ name: 'edituser', params: { id: user.id }}" class="btn btn-primary" >edit</router-link>                    
                            <button @click="(event) => { deleteuser(event, user.id) }" class="btn btn-danger" >delete</button>
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
                users: null,
                message: {
                    success: null,
                    error: null           
                }

            }
        },
        mounted() {
            axios
                .get('/users')
                .then(response => {                    
                    this.users = response.data;
                })            
        },
        methods: {
            deleteuser: function(event, id){                
                let data = {_method: 'delete'};

                axios
                    .delete(`/users/${id}`, data)
                    .then( response => {
                        //console.log('all done');                              
                        let users = this.users.filter(project => { return project.id!=id; });
                        this.users = users;

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
