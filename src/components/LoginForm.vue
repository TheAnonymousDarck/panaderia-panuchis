<template>

<form @submit.prevent="authStore.signIn()" >
    <ion-item>
        <ion-icon slot="start" :icon="mailOutline"></ion-icon>
        <ion-label position="floating">Correo electronico</ion-label>
        <ion-input type="email" v-model="authStore.email" required ="true"></ion-input>
    </ion-item>

    <ion-item>
        <ion-icon slot="start" :icon="keyOutline"></ion-icon>
        <ion-label position="floating">Contraseña</ion-label>
        <ion-input type="password" minlength="6" v-model="authStore.password" required="true"></ion-input>
    </ion-item>

    <ion-button type="submit" expand="block" shape="round" color="success">
        <ion-icon slot="start" :icon="logInOutline"></ion-icon>
        Iniciar Sesión
    </ion-button>

</form>

</template>

<script lang="ts" setup>
import { IonButton, IonInput, IonItem, IonLabel, IonIcon } from '@ionic/vue';
import { mailOutline, logInOutline, keyOutline } from 'ionicons/icons';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore()


</script>