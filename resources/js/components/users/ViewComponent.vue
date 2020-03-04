<template>
    <div class="card">
        <div class="card-header" >{{ project.title }}</div>

        <div class="card-body">
            {{ project.description }}
        </div>	        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                project: null
            }
        },
        created(){
            //console.log(this.$route.params+'created');
            const {id} = this.$route.params;            
            axios
                .get(`/projects/${id}`)
                .then(response => {                    
                    this.project = response.data;
                })            
                
        },
        mounted() {
            //console.log(this.$route.params+'mounted');
        }
    }
</script>
