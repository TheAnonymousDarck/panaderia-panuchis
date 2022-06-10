import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import { auth } from '@/firebase';
import { onAuthStateChanged, } from 'firebase/auth';

import IndexPage from '@/views/IndexPage.vue';
import TabsPage from '@/views/TabsPage.vue';

import { useToast } from '@/composables/useFunctionallyComponent';

const { openToast, icons } = useToast()

const routes: Array<RouteRecordRaw> = [
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
    path:'/test',
    name:'test',
    component: () => import('@/components/TestComponent.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/order'
      },
      {
        path: 'home',
        component: () => import('@/views/TabHomePage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'order',
        component: () => import('@/views/TabOrderPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'cart',
        component: () => import('@/views/TabCartPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'profile',
        component: () => import('@/views/TabProfilePage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'product',
        component: () => import('@/views/TabProductPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'product/create',
        component: () => import('@/views/CreateProductPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'product/edit/:productId',
        name:'editProduct',
        props: true,
        component: () => import('@/views/EditProductPage.vue'),
        meta: { requiresAuth: true }
    },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise(( resolve, reject ) =>{
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener();
        resolve(user)
      },
      reject
    )
  })
}


router.beforeEach( async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)){
    if (await getCurrentUser()){
      next();
    } else {
      openToast("No tienes acceso", 'warning', icons.warning);
      next('/');
    }
  } else {
    next();
  }
});


export default router
