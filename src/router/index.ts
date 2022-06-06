import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import IndexPage from '@/views/IndexPage.vue';
import TabsPage from '@/views/TabsPage.vue';



const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   redirect: '/'
  // },
  {
    path:'/',
    name:'index',
    component: IndexPage
  },
  {
    path: '/',
    redirect: '/tabs/home',
    meta: { requiresAuth: true }
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/TabHomePage.vue')
      },
      {
        path: 'order',
        component: () => import('@/views/TabOrderPage.vue')
      },
      {
        path: 'cart',
        component: () => import('@/views/TabCartPage.vue')
      },{
        path: 'profile',
        component: () => import('@/views/TabProfilePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
