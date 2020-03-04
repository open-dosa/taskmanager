<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Task Manager</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/app.css">

    </head>
    <body>
        <div id="app">        

            <div class="container">
                <header>
                    <div class="row">     
                        <div class="col">     
                            <h1>Tasks</h1>
                        </div>
                    </div>
                <header>
                <div class="row">
                    <div class="col-lg-2">        
                        <ul>
                            <li>
                            <router-link to="/">Home</router-link>
                            </li>
                            <li>
                            <router-link to="/projects">Projects</router-link>
                            </li>
                            <li>
                            <router-link to="/tasks">Tasks</router-link>
                            </li>
                            <li>
                            <router-link to="/comments">Comments</router-link>
                            </li>
                            <li>
                            <router-link to="/users">Users</router-link>                        
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-10">                
                    <router-view></router-view>
                    </div>
                </div>            
            </div>

        </div><!-- div id="app" -->
        <script src="js/app.js"></script>
    </body>
</html>
