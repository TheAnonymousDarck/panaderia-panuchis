<template>
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>

<script lang="ts" setup>
import router from './router';
import { IonApp, IonRouterOutlet, } from '@ionic/vue';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

import { useAuthStore } from './store/auth';
import { useUserStore } from './store/user';

import { useToast } from "@/composables/useFunctionallyComponent";

const { openToast, icons } = useToast() 

const authStore = useAuthStore()
const userStore = useUserStore()

onAuthStateChanged(auth, (user) => {
  if (user) {
      const uid = user.uid;
      authStore.isLoggedIn = true;
      // authStore.getAdmin(uid);
      userStore.getAdmin(uid);
      openToast('Bienvenido', 'success', icons.check);
      console.log('verdadero ' + uid)
  } else {
      authStore.isLoggedIn = false;
      router.push('/');
      openToast('no hay sesion de usuario', 'tertiary', icons.info);
      console.log('falso')
  }
})
</script>