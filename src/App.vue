<template>
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>

<script lang="ts" setup>
import { IonApp, IonRouterOutlet, } from '@ionic/vue';
import { onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from './store/auth';
import { auth } from './firebase';
import router from './router';
import { useToast } from "@/composables/useFunctionallyCompoonent";

const { openToast, icons } = useToast() 

const authStore = useAuthStore()

onAuthStateChanged(auth, (user) => {
  if (user) {
      const uid = user.uid;
      authStore.isLoggedIn = true;
      openToast('Bienvenido', 'success', icons.check);
      console.log('verdadero ' + uid)
  } else {
      authStore.isLoggedIn = false;
      router.push('/');
      openToast('no hay sesion de usuario', 'danger', icons.close);
      console.log('falso')
  }
})
</script>