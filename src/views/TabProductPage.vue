<template>
  <ion-page>

    <ion-content :fullscreen="true">

      <ListProduct 
        v-for="product in productStore.products" :key="product.id"
        :product="product"
      />
      <ion-fab vertical="bottom" horizontal="center" slot="fixed" @click="router.push('/tabs/product/create')">
        <ion-fab-button color="tertiary">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonContent, IonFab, IonFabButton, IonIcon} from '@ionic/vue';

import { add } from 'ionicons/icons';
import ListProduct from '@/components/ProductsCrud/ListProduct.vue';

import { useProductStore } from '@/store/product';
import { onMounted } from 'vue';
import router from '@/router';

const productStore = useProductStore()

onMounted(() => {
  productStore.getProducts()
})


</script>
