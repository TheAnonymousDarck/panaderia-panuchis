<template>
  <ion-page>
    <ion-tabs>

      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="homeOutline" />
          <ion-label>Inicio</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="order" href="/tabs/order">
          <ion-icon :icon="clipboardOutline"/>
          <ion-label>Ordenes</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="cart" href="/tabs/cart">
          <ion-icon :icon="cartOutline" />
          <ion-label>Carrito</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="personOutline" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, cartOutline, clipboardOutline, personOutline } from 'ionicons/icons';

</script>
