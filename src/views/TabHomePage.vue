<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Catalogo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <!-- List of Text Items -->
      <ion-list >
        <product-card/>
        
      </ion-list>


    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/vue';
import ProductCard from '@/components/ProductCard.vue';


</script>
