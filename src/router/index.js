import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/Home.vue'
import Tipap from '@/components/tiptap/Tiptap.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/tipap', component: Tipap },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      // { path: 'tipap', component: Tipap }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
