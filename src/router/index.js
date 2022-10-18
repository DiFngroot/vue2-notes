import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: 'home-Tipap' */ '@/components/home/Home.vue')
const Tipap = () => import(/* webpackChunkName: 'home-Tipap' */ '@/components/tiptap/Tiptap.vue')
const Introduce = () => import(/* webpackChunkName: 'Introduce-Temporary' */ '@/components/introduce/Introduce.vue')
const Temporary = () => import(/* webpackChunkName: 'Introduce-Temporary' */ '@/components/temporary/Temporary.vue')

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
      { path: 'introduce', name: 'introduce', component: Introduce },
      { path: 'temporary', name: 'temporary', component: Temporary },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
