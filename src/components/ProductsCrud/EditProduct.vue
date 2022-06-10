<template>

    <ion-card>
        
        <ion-card-header>
            <ion-card-title>
                Agregar un nuevo producto a su catalogo 
            </ion-card-title>
        </ion-card-header>

        <ion-card-content>
            <form @submit.prevent="productStore.editProduct(productId)">
                <ion-item>
                    <ion-icon slot="start" :icon="textOutline"></ion-icon>
                    <ion-label position="floating">Nombre</ion-label>
                    <ion-input minlength="5" v-model="productStore.nombre" required></ion-input>
                </ion-item>

                <ion-item>
                    <ion-icon slot="start" :icon="createOutline"></ion-icon>
                    <ion-label position="floating">descripción</ion-label>
                    <ion-input minlength="10" v-model="productStore.descripcion" required></ion-input>
                </ion-item>

                <ion-item>
                    <ion-icon slot="start" :icon="imageOutline"></ion-icon>
                    <ion-label position="floating">Foto</ion-label>
                    <ion-input type="text" v-model="productStore.foto"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-icon slot="start" :icon="cashOutline"></ion-icon>
                    <ion-label position="floating">Precio</ion-label>
                    <ion-input type="decimal" v-model="productStore.precio" required ></ion-input>
                </ion-item>

                <ion-item>
                    <ion-icon slot="start" :icon="statsChartOutline"></ion-icon>
                    <ion-label position="floating">Cantidad</ion-label>
                    <ion-input minlength="1" type="number" v-model="productStore.cantidad" required ></ion-input>
                </ion-item>

                <ion-item>
                    <ion-icon slot="start" :icon="calendarNumberOutline"></ion-icon>
                    <ion-label position="floating">fecha</ion-label>
                    <ion-input type="datetime-local" v-model="productStore.fecha" required ></ion-input>
                </ion-item>

                <ion-button type="submit" expand="block" color="success">
                    <ion-icon slot="start" :icon="bagAddOutline"></ion-icon>
                    Guardar producto
                </ion-button>

            </form>
            <ion-button @click="router.back()"  expand="block" color="success" fill="clear" >
                <ion-icon slot="start" :icon="arrowBackOutline" ></ion-icon>
                Cancelar
            </ion-button>
            <pre> </pre>


        </ion-card-content>
    </ion-card>

</template>

<script lang="ts" setup>
import { IonCard, IonCardHeader,IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { arrowBackOutline, bagAddOutline, statsChartOutline, createOutline, calendarNumberOutline, imageOutline, cashOutline, textOutline  } from 'ionicons/icons';
import { useProductStore } from '@/store/product';
import router from '@/router';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const productStore =  useProductStore();

const route = useRoute();
const { productId } = route.params;

onMounted(
    () => productStore.getProductById(productId),
)
// function log() {
//     console.log('jala');
    
// }


</script>