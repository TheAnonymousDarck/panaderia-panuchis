<template>

<form @submit.prevent="authStore.register()">
    <ion-item>
        <ion-icon slot="start" :icon="personOutline"></ion-icon>
        <ion-label position="floating">Nombre completo</ion-label>
        <ion-input v-model="authStore.nombre"></ion-input>
    </ion-item>
    
    <ion-item>
        <ion-icon slot="start" :icon="mailOutline"></ion-icon>
        <ion-label position="floating">Correo electronico</ion-label>
        <ion-input type="email" v-model="authStore.email"></ion-input>
    </ion-item>

    <ion-item>
        <ion-icon slot="start" :icon="locationOutline"></ion-icon>
        <ion-label position="floating">Dirección</ion-label>
        <ion-input v-model="authStore.direccion" ></ion-input>
    </ion-item>

    <ion-item>
        <ion-icon slot="start" :icon="callOutline"></ion-icon>
        <ion-label position="floating">Telefono</ion-label>
        <ion-input type="tel" v-model="authStore.telefono"></ion-input>
    </ion-item>

    <ion-item>
        <ion-icon :icon="keyOutline" slot="start"></ion-icon>
        <ion-label position="floating">Contraseña</ion-label>
        <ion-input type="tel" v-model="authStore.password"></ion-input>
    </ion-item>

    <ion-button type="submit" expand="block" color="success" shape="round">
        <ion-icon slot="start" :icon="logInOutline"></ion-icon>
        Registrate
    </ion-button>
</form>

</template>

<script lang="ts" setup>
import { IonItem, IonIcon, IonLabel, IonInput, IonButton, } from '@ionic/vue';
import { mailOutline, logInOutline, keyOutline, personOutline, callOutline, locationOutline } from 'ionicons/icons';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore()
</script>