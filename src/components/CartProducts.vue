<template>
<!-- <div>Hola</div> -->
    <ion-item>
        <ion-label>
            <h2>{{ props.displayCart.nombre }} </h2>
        </ion-label>
        <ion-item>
            <ion-label>$ {{ props.displayCart.precio }}</ion-label>
            <!-- <ion-label>$ {{ props.displayCart.precio }}</ion-label> -->
            <ion-item>
                <ion-button @click="removeItem(props.displayCart.id)" color="success" fill="outline" expand="block" shape="round">
                    <ion-icon :icon="removeCircleOutline" ></ion-icon>
                </ion-button>
            </ion-item>
        </ion-item>

    </ion-item>
    <!-- <ion-list>
        <ion-card>
            <ion-card-header>
                <ion-card-title>
                    Pan vergas
                </ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-row class="ion-align-items-center">
                    <ion-col size="8"><ion-label color="secondary"><b>$1000</b></ion-label></ion-col>
                    <ion-col size="9"><ion-label>Descripción bien vergas, comete un pan</ion-label></ion-col>
                    <ion-col size="3" class="ion-text-right"><ion-img :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EoNqp9I74KMrwEkYampF8MgoMURx1oMBrA&usqp=CAU'" > </ion-img></ion-col>
                    <ion-col size="10" class="ion-text-right"><ion-button  color="secondary" fill="outline" shape="round"><ion-icon :icon="addCircleOutline" ></ion-icon></ion-button></ion-col>
                    <ion-col size="1" class="ion-text-center"><ion-label> 45 </ion-label></ion-col>
                    <ion-col size="1" class="ion-text-left"><ion-button  color="secondary" fill="outline" shape="round"><ion-icon :icon="removeCircleOutline"></ion-icon></ion-button></ion-col>
                    
                </ion-row>
            </ion-card-content>
        </ion-card>
    </ion-list> -->
</template>

<script lang="ts" setup>
import {  IonLabel, IonItem, IonButton, IonIcon } from '@ionic/vue';
import { removeCircleOutline  } from 'ionicons/icons';

import { useCartStore } from '@/store/cart';
import { defineProps} from 'vue'
import { storeToRefs } from 'pinia';

const props = defineProps<{
    displayCart: any
}>()

const cartStore = useCartStore()
const {cart, displayCart} = storeToRefs(cartStore)


// const total = computed(() => {
//     let sum = (displayCart.value as DisplayCart[]).reduce(
//         (initialSum: number, item: DisplayCart) => {
//         if (item.disponible) initialSum = initialSum + item.precio * item.cantidad;
//         return initialSum;
//         },
//         0
//     );
//     return sum;
// });

function removeItem(id: number){
    cartStore.removeCart(id);
}

</script>
