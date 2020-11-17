import Vue from 'vue';
import VueRouter from 'vue-router';
import Game from '../views/Game.vue';
import Menu from '../views/Menu.vue';
import Admin from '../views/Admin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'menu',
    component: Menu
  },
  {
    path: '/play',
    name: 'game',
    component: Game
  }
  ,
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
