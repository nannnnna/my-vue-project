import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
// Import other components here

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HelloWorld },
    // Define other routes here
  ]
});
