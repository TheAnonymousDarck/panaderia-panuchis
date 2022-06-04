import  RegisterPage  from '@/views/RegisterForm.vue';
import  LoginPage  from '@/views/LoginPage.vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import IndexPage from '@/views/IndexPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'index',
    component: IndexPage
  },
  {
    path:'/login',
    name:'login',
    component: LoginPage
  },

  {
    path:'/register',
    name:'register',
    component: RegisterPage
  },
  
  // ! implementación register y login
  // {
  //   path: '/',
  //   redirect: '/index/register'
  // },
  // {
  //   path: '/index/',
  //   component: TabsIndexPage,
  //   children: [
  //     {
  //       path: '',
  //       redirect: '/index/register'
  //     },
  //     {
  //       path: '/register',
  //       component: RegisterPage
  //     },
  //     {
  //       path: '/login',
  //       component: LoginPage
  //     },
  //   ]
  // },

  // ! paths stock
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }

  // ! ----
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
