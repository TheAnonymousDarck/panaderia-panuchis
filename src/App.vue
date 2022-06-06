<template>
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>

<script lang="ts" setup>
import { IonApp, IonRouterOutlet, toastController } from '@ionic/vue';
import { onAuthStateChanged } from "firebase/auth";
// import { computed } from 'vue';
import { useAuthStore } from './store/auth';
import { auth } from './firebase';

const data = useAuthStore()


async function openToast(msg:string) {
  const toast = await toastController
  .create({
      message: msg,
      duration: 2000
  })
  return toast.present();
}


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    data.isLoggedIn = true;
    openToast('sesion de usuario activa');
    console.log('verdadero ' + uid)
  } else {
    data.isLoggedIn = false;
    openToast('no hay sesion de usuario');
    console.log('falso')
  }
});


// computed(
//   () => onAuthStateChanged,
// )
</script>