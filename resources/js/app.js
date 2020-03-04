/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueRouter)


// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: require('./components/HomeComponent.vue').default  },
  { path: '/projects/create',  name: 'createproject'  , component: require('./components/projects/CreateComponent.vue').default  },
  { path: '/projects/edit/:id',  name: 'editproject'  , component: require('./components/projects/EditComponent.vue').default  },
  { path: '/projects/:id',  name: 'viewproject'  , component: require('./components/projects/ViewComponent.vue').default  }, 
  { path: '/projects',  name: 'listproject'  , component: require('./components/projects/ListComponent.vue').default  }, 
  { path: '/tasks/create',  name: 'createtask'  , component: require('./components/tasks/CreateComponent.vue').default  }, 
  { path: '/tasks/edit/:id',  name: 'edittask'  , component: require('./components/tasks/EditComponent.vue').default  }, 
  { path: '/tasks/:id',  name: 'viewtask'  , component: require('./components/tasks/ViewComponent.vue').default  }, 
  { path: '/tasks',  name: 'listtask'  , component: require('./components/tasks/ListComponent.vue').default  },    
  { path: '/comments/create',  name: 'createcomment'  , component: require('./components/tasks/CreateComponent.vue').default  }, 
  { path: '/comments/edit/:id',  name: 'editcomment'  , component: require('./components/tasks/EditComponent.vue').default  }, 
  { path: '/comments/:id',  name: 'viewcomment'  , component: require('./components/tasks/ViewComponent.vue').default  }, 
  { path: '/comments',  name: 'listcomment'  , component: require('./components/tasks/ListComponent.vue').default  },    
  { path: '/users/create',  name: 'createuser'  , component: require('./components/users/CreateComponent.vue').default  }, 
  { path: '/users/edit/:id',  name: 'edituser'  , component: require('./components/users/EditComponent.vue').default  }, 
  { path: '/users/:id',  name: 'viewuser'  , component: require('./components/users/ViewComponent.vue').default  }, 
  { path: '/users',  name: 'listuser'  , component: require('./components/users/ListComponent.vue').default  },    
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({ 
  router
}).$mount('#app')

// Now the app has started!