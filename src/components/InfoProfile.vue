<template>

<ion-card>
    <ion-card-header>
        <center>
            <ion-card-title>Información del Usuario</ion-card-title>
        </center>
    </ion-card-header>
    <ion-card-content>
        <center>
            <ion-avatar slot="start">
                <img :src=user.imagen />
            </ion-avatar>
            <ion-card-subtitle> {{ user.user }} </ion-card-subtitle>
        </center>

        
        <ion-list>
            
            <ion-item>
                <ion-icon slot="start" :icon="locationOutline"></ion-icon>
                <ion-label>
                    <h2> {{ user.direccion }} </h2>
                </ion-label>
            </ion-item>
            
            <ion-item>
                <ion-icon slot="start" :icon="callOutline"></ion-icon>
                <ion-label>
                    <h2> {{ user.telefono }} </h2>
                </ion-label>
            </ion-item>

            <ion-item>
                <ion-icon slot="start" :icon="mailOutline"></ion-icon>
                <ion-label>
                    <h2> {{ user.correo }} </h2>
                </ion-label>
            </ion-item>

            <ion-item>
                
            </ion-item>

        </ion-list>

        <ion-button @click="authStore.signout()"  color="danger"  expand="full" fill="outline" shape="round">
            Cerrar Sesión
        </ion-button>
    
    </ion-card-content>
</ion-card>

</template>

<script lang="ts" setup>
import { IonIcon, IonItem, IonButton, IonList, IonAvatar, IonLabel, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/vue';
import { mailOutline, callOutline, locationOutline } from 'ionicons/icons';

import { useAuthStore } from '@/store/auth'; 

const authStore = useAuthStore();

const user = {
    user: 'el roro',
    correo: 'elroro69@gmail.com',
    direccion:'Av. tangamandapio, col centro #110',
    telefono: 4564564564,
    imagen: 'https://elcomercio.pe/resizer/a9xgWW5w58rfbQ4qfqa2Pyp6Iew=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/2HQ3QL6DZNEGPFL737J2JOFUOQ.jpg'
}
</script>
