import Vue from 'vue';
import App from './App.vue';
import VueResource from "vue-resource";
// var VueResource = require('vue-resource'); - nie udalo sie, okazuje sie ze nie da sie mieszac dialektow.

Vue.use(VueResource);

Vue.http.options.root = '/api';

new Vue({
    el: '#app',
    render: h => h(App)
});
