import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import IndexPage from '@/views/IndexPage.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path:'/index',
    name:'index',
    component: IndexPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
