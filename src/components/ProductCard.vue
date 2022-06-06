<template>
    <ion-card>
        <ion-card-content>

            <ion-grid>
                <ion-row>
                    <ion-col size="2">
                        <ion-img :src="productos.imagen" > </ion-img>
                    </ion-col>
                    <ion-col size="10">
                        <ion-card-title> {{ productos.nombre }} </ion-card-title>
                        <ion-label> &nbsp; {{ productos.descripcion }} </ion-label>
                        <ion-col size="10">
                            <ion-item>
                                <ion-label>$ {{ productos.precio }}</ion-label>
                                <!-- <ion-item>
                                    <ion-icon :icon="addCircleOutline"></ion-icon>
                                    <center> <ion-label> {{ productos.cantidad }} </ion-label> </center>
                                    <ion-icon  :icon="removeCircleOutline"></ion-icon>
                                    
                                </ion-item> -->
                                <ion-item>
                                    <ion-button @click="log()" color="success" fill="outline" expand="block" shape="round">
                                        <ion-icon :icon="addCircleOutline" ></ion-icon>
                                        <ion-icon :icon="cartOutline" ></ion-icon>
                                        <!-- &nbsp; $ 
                                        <ion-label color="dark">
                                            <strong>
                                                {{ total }} 
                                            </strong>
                                        </ion-label>
                                        &nbsp;&nbsp; -->
                                    </ion-button>
                                </ion-item>
                            </ion-item>
                        </ion-col>
                    </ion-col>
                </ion-row>
            </ion-grid>

        </ion-card-content>
    </ion-card>
    
</template>

<script lang="ts" setup>
import { IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonCardTitle, IonIcon, IonItem, IonLabel, IonButton, IonImg } from '@ionic/vue';
import { addCircleOutline, removeCircleOutline, cartOutline } from 'ionicons/icons';
import { useCartStore } from '@/store/cart';
import { defineProps} from 'vue'

defineProps({
    product: Object
})


const { addProduct } = useCartStore()


const productos = {
    nombre: "cuernito relleno de chocolate",
    descripcion: "rico pan clasico relleno de chocolate",
    precio: 5,
    cantidad: 20,
    disponible: true,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EoNqp9I74KMrwEkYampF8MgoMURx1oMBrA&usqp=CAU'
}

const total = 150;

function log() {
    
    console.log('funciona');
}

addProduct(productos)

</script>
