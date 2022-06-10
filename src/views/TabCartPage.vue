<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tu Orden</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    
    <ion-list>

    <ion-item v-for="(item, index) in displayCart" :key="index">
        <ion-label>
            <h2>{{ item.nombre }} </h2>
        </ion-label>
        <ion-item>
          <ion-label>cantidad: {{ item.cantidad }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>${{ item.precio }}</ion-label>
        </ion-item>
        <ion-item>
            <ion-button @click="removeItem(item.id)" color="danger" fill="outline" expand="block" shape="round">
                <ion-icon :icon="removeCircleOutline" ></ion-icon>
            </ion-button>
        </ion-item>

    </ion-item>

    </ion-list>

    <ion-item>
      <ion-label> Total ${{ total }}</ion-label>
      <ion-button @click="presentAlert()" expand="block" fill="clear" shape="round">
        Confirmar pedido
      </ion-button>
    </ion-item>


    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonItem, IonList, IonLabel, alertController } from '@ionic/vue';
import { useCartStore } from '@/store/cart';
import { computed, onMounted} from 'vue'
import { storeToRefs } from 'pinia';
import { DisplayCart } from '@/interfaces/interfaces';
import { removeCircleOutline } from 'ionicons/icons';

const cartStore = useCartStore()
const {cart, displayCart} = storeToRefs(cartStore)

onMounted( () => {
  cartStore.loadCart();
  cartStore.displayCartLoad();
})


const total = computed(() => {
    let sum = (displayCart.value as DisplayCart[]).reduce(
        (initialSum: number, item: DisplayCart) => {
          initialSum = initialSum + item.precio * item.cantidad;
          return initialSum;
        },
        0
    );
    return sum;
});

function removeItem(id: number){
    cartStore.removeCart(id);
}

async function presentAlert() {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Pedido enviado con éxito',
          message: 'Su pedido será surtido en breve, espere un whatsapp del panadero cuando su orden este lista',
          buttons: ['OK'],
        });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }

</script>
