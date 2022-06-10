<template>
    <ion-page>
        <ion-content :fullscreen="true">

            <CreateProduct/>
            

        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonContent, } from '@ionic/vue';
import CreateProduct from '@/components/ProductsCrud/CreateProduct.vue';

// import { add } from 'ionicons/icons';
// import { useProductStore } from '@/store/product';
// import { onMounted } from 'vue';

// const productStore = useProductStore()

// onMounted(() => {
//     productStore.getProducts()
// })

// function log() {
//     console.log('Jala el floatting action button');
// }



</script>
