<template>
  <ion-page>
    <ion-tabs>

      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="order" href="/admin/tabs/order">
          <ion-icon :icon="documentTextOutline"/>
          <ion-label>Ordenes</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="inventario" href="/admin/tabs/inventario">
          <ion-icon :icon="clipboardOutline" />
          <ion-label>Inventario</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/admin/tabs/profile">
          <ion-icon :icon="personOutline" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { documentTextOutline, clipboardOutline, personOutline } from 'ionicons/icons';

</script>
