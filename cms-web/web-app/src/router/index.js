import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Main from '../views/main.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[{
      path: '/home/main',
      name: 'main',
      component: Main
    },
    {
      path:'/home',
      redirect:'/home/main'
    }]
  },
  {
    path:'/',
    redirect:'/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
