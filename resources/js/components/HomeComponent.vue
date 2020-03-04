<template>
    <div class="card">
        <div class="card-header">Home</div>
        <div class="card-body">           


            <ul>
                <li>
                    <h5>Projects</h5>
                    <router-link to="/projects">Projects</router-link> / <router-link to="/projects/create" >Create Project</router-link>
                </li>
                <li>
                    <h5>Tasks</h5>
                    <router-link to="/tasks">Tasks</router-link> / <router-link to="/tasks/create" >Create Task</router-link>                
                </li>
                <li>
                    <h5>Comments</h5>
                    <router-link to="/comments">Comments</router-link> / <router-link to="/comments/create" >Create Comments</router-link>                
                </li>
                <li>                
                    <h5>Users</h5>
                    <router-link to="/users">Comments</router-link> / <router-link to="/users/create" >Create Users</router-link>                
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
    }
</script>
