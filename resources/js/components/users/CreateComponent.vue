<template>
    <div class="card">
        <p class="text-primary" v-if="message.success">{{ message.success }}</p>
        <p class="text-danger" v-if="message.error">{{ message.error }}</p>
        <div class="card-header" >Create user</div>
        <div class="card-body">
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name"  placeholder="Enter name" v-model="user.name" />            
                <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email"  placeholder="Enter email" v-model="user.email" />            
                <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
            </div>
            <div class="form-group">
                <label for="name">Password</label>
                <input type="text" class="form-control" id="password"  placeholder="Enter name" v-model="user.password" />            
                <div v-if="errors && errors.password" class="text-danger">{{ errors.password[0] }}</div>
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
                user: {
                    name: null,
                    email: null,
                    password: null,
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
                //console.log(this.user);
                axios
                    .post('/users', this.user)
                    .then( response => {
                        //console.log(response);                       
                        this.message = {success: "user update",error: null};
                        this.errors={};        
                        this.reset();
                    })
                    .catch( error => {
                        //console.log(error.response);
                        this.message = {success: null,error: error.response.data.message};
                        this.errors = error.response.data.errors;

                    })
            },
            reset: function(){
                this.user.name = '';
                this.user.description = '';
            }       
             
        }
    }
</script>
