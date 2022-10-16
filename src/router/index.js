import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/Home.vue'
import Tipap from '@/components/tiptap/Tiptap.vue'
import Introduce from '@/components/introduce/Introduce.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/tipap', component: Tipap },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/introduce',
    component: Home,
    children: [
      { path: 'introduce', name: 'introduce', component: Introduce }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
