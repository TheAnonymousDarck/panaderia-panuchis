<template>

<form>
    <ion-item>
        <ion-icon slot="start" :icon="personOutline"></ion-icon>
        <ion-label position="floating">Nombre(s)</ion-label>
        <ion-input v-model="formData.nombre"></ion-input>
    </ion-item>

    <ion-item>
        <ion-icon slot="start" :icon="personOutline"></ion-icon>
        <ion-label position="floating">Apellido(s)</ion-label>
        <ion-input v-model="formData.apellido"></ion-input>
    </ion-item>

    <ion-item>
        <ion-icon slot="start" :icon="mailOutline"></ion-icon>
        <ion-label position="floating">Correo electronico</ion-label>
        <ion-input type="email" v-model="formData.email"></ion-input>
    </ion-item>

    <ion-item>
        <ion-icon slot="start" :icon="callOutline"></ion-icon>
        <ion-label position="floating">Telefono</ion-label>
        <ion-input type="tel" v-model="formData.telefono"></ion-input>
    </ion-item>

    <ion-item>
        <ion-icon slot="start" :icon="keyOutline"></ion-icon>
        <ion-label position="floating">Contraseña</ion-label>
        <ion-input type="tel" v-model="formData.contrasena"></ion-input>
    </ion-item>

    <ion-button type="submit" expand="block" color="success" shape="round">
        <ion-icon slot="start" :icon="logInOutline"></ion-icon>
        Registrate
    </ion-button>
</form>

</template>

<script lang="ts" setup>
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/vue';
import { mailOutline, logInOutline, keyOutline, personOutline, callOutline } from 'ionicons/icons';


const formData = {
    nombre: '',
    apellido: '',
    email:'',
    telefono:0,
    contrasena:'',
}
</script>