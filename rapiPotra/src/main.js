// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello.vue'
import Pastrana from './components/Pastrana.vue'
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

export const SocketInstance = socketio('http://localhost:8000');

Vue.use(VueSocketIO, SocketInstance)

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[{
        path:'/inicio',
        name: 'inicio',
        component: Hello
    },{
        path:'/eventos',
        name: 'eventos',
        component: Pastrana
    },{
        path:'/amigos',
        name: 'amigos',
        component: Pastrana
    },{
        path:'/configuracion',
        name: 'configuracion',
        component: Pastrana
    }]
});
/* eslint-disable no-new */
new Vue({
    render:h=>h(App),
    router
}).$mount('#app');