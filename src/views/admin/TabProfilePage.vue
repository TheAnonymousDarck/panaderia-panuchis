<template>
  <ion-page>
    <ion-content :fullscreen="true">

    <ion-grid fixed>
      <ion-row>
          <ion-col >

          <info-profile/>
        
        </ion-col>
      </ion-row>
    </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import InfoProfile from '@/components/InfoProfile.vue';

</script>
