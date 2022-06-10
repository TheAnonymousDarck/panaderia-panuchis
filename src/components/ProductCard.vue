<template>
    <ion-item>

        <ion-item>
            <ion-thumbnail>
                <ion-img :src="product.foto" > </ion-img>
            </ion-thumbnail> 
        </ion-item>
        <ion-label>
            <h2>{{ product.nombre }} </h2>
            <p> {{ product.descripcion }} </p>
        </ion-label>

        <ion-item>
            <ion-label>$ {{ product.precio }}</ion-label>
            <ion-item>
                <ion-button @click="log()" color="success" fill="outline" expand="block" shape="round">
                    <ion-icon :icon="addCircleOutline" ></ion-icon>
                    <ion-icon :icon="cartOutline" ></ion-icon>
                </ion-button>
            </ion-item>
        </ion-item>

    </ion-item>

    <!-- <ion-card>
        <ion-card-content>

            <ion-grid>
                <ion-row>
                    <ion-col size="2">
                        <ion-img :src="product.foto" > </ion-img>
                    </ion-col>
                    <ion-col size="10">
                        <ion-card-title> {{ product.nombre }} </ion-card-title>
                        <ion-label> &nbsp; {{ product.descripcion }} </ion-label>
                        <ion-col size="10">
                            <ion-item>
                                <ion-label>$ {{ product.precio }}</ion-label>
                                <ion-item>
                                    <ion-button @click="log()" color="success" fill="outline" expand="block" shape="round">
                                        <ion-icon :icon="addCircleOutline" ></ion-icon>
                                        <ion-icon :icon="cartOutline" ></ion-icon>
                                    </ion-button>
                                </ion-item>
                            </ion-item>
                        </ion-col>
                    </ion-col>
                </ion-row>
            </ion-grid>

        </ion-card-content>
    </ion-card> -->

</template>

<script lang="ts" setup>
import { Product } from '@/interfaces/interfaces';
import { IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonCardTitle, IonThumbnail, IonIcon, IonItem, IonLabel, IonButton, IonImg } from '@ionic/vue';
import { addCircleOutline, cartOutline } from 'ionicons/icons';
// import { useCartStore } from '@/store/cart';
import { defineProps} from 'vue'

defineProps({
    product: {
        type: Object,
        required: true,
    },

})

function log() {
    
    console.log('funciona');
}

</script>
