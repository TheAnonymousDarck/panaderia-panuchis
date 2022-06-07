<template>
    <div>
        <h1>Admn</h1>
        <ion-button @click="authStore.signout()"  color="danger"  expand="full" fill="outline" shape="round">
            <ion-icon slot="start" :icon="logOutOutline"></ion-icon>
            Cerrar Sesión
        </ion-button>
    </div>
</template>

<script lang="ts" setup>
import { IonIcon, IonButton, } from '@ionic/vue';
import { logOutOutline } from 'ionicons/icons';

import { useAuthStore } from '@/store/auth'; 

const authStore = useAuthStore();


</script>