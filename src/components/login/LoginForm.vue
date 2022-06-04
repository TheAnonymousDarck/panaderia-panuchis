<template>

<form >
    <ion-item>
        <ion-icon slot="start" :icon="mailOutline"></ion-icon>
        <ion-label position="floating">Correo electronico</ion-label>
        <ion-input type="email" v-model="formData.email" required></ion-input>
    </ion-item>

    <ion-item>
        <ion-icon slot="start" :icon="keyOutline"></ion-icon>
        <ion-label position="floating">Contraseña</ion-label>
        <ion-input v-model="formData.contrasena" required></ion-input>
    </ion-item>

    <ion-button type="submit" expand="block" shape="round" color="success">
        <ion-icon slot="start" :icon="logInOutline"></ion-icon>
        Iniciar Sesión
    </ion-button>

</form>

</template>

<script lang="ts" setup>
import { IonButton, IonInput, IonItem, IonLabel, toastController } from '@ionic/vue';
import { mailOutline, logInOutline, keyOutline } from 'ionicons/icons';

const formData = {
    email:'',
    contrasena:'',
}

async function openToast() {
    const toast = await toastController
    .create({
        message: 'Contacto agegado',
        duration: 2000
    })
    return toast.present();
}

</script>