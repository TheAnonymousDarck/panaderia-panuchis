<template>
  <ion-page>

    <ion-content :fullscreen="true">

      <ion-list >
        <!-- <ion-item > -->
          
          <ProductCard
            v-for="product in productStore.products" :key="product.id"
            :product="product"
          />
        <!-- </ion-item> -->
          
        <!-- <TestComponent/> -->
      </ion-list>


    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonContent, IonList } from '@ionic/vue';
import ProductCard from '@/components/ProductCard.vue';
// import TestComponent from '@/components/TestComponent.vue';
import { useProductStore } from '@/store/product';
import { onMounted } from 'vue';

const productStore = useProductStore()

onMounted(() => {
  productStore.getProducts()
})

</script>
