<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Productos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <ListProduct/>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed" @click="log()">
      <ion-fab-button color="tertiary">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon} from '@ionic/vue';

import { add } from 'ionicons/icons';
import ListProduct from '@/components/ProductsCrud/ListProduct.vue';

function log() {
  console.log('Jala el floatting action button');
}



</script>
