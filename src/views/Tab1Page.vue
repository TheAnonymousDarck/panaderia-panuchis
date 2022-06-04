<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

    <!-- <TopSection/> -->
    <BottomSection/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import TopSection from '@/components/login/TopSection.vue';
import BottomSection from '@/components/login/BottomSection.vue';

</script>
