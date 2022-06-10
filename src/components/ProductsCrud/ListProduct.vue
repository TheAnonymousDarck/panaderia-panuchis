<template>

<ion-item>
    <ion-item>
        <ion-avatar>
            <ion-img  :src="product.foto" ></ion-img>
        </ion-avatar>
    </ion-item>
    <ion-label>
        <h2>{{ product.nombre }} </h2>
        <p> {{ product.descripcion }} </p>
    </ion-label>

    <ion-icon  :icon="createOutline" @click="router.push(`/tabs/product/edit/${product.id}`)"/>
    <ion-icon  :icon="trashOutline" @click="productStore.alertDeleteProduct(product.id)"/>
</ion-item>


</template>

<script lang="ts" setup>
import router from '@/router';
import { IonLabel, IonImg, IonItem, IonAvatar, IonIcon } from '@ionic/vue';
import { createOutline, trashOutline  } from 'ionicons/icons';
import { defineProps } from 'vue'
import { useProductStore } from '@/store/product';

defineProps({
    product: {
        type: Object,
        required: true
    },
    isOpen: {
        type: Boolean,
        default: false
    },
})

const productStore = useProductStore()

//funcion para testear
// function log(id:any) {
//     console.log(id)
// }


</script>