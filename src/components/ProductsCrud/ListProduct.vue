<template>
    <ion-grid>
    <ion-row>
        <ion-col>
        <ion-list >
            <ion-item>
            <ion-label>
                <h2>Panvergudo</h2>
                <ion-img class="fotillo" :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EoNqp9I74KMrwEkYampF8MgoMURx1oMBrA&usqp=CAU'" ></ion-img>
                <h3>$100</h3>
                <p>Rico pan pa que te lo comas</p>
            </ion-label>
            <ion-icon :icon="readerOutline" ></ion-icon>
            <ion-icon :icon="removeCircleOutline"></ion-icon>
            </ion-item>
        </ion-list>
        <ng-template>
            <h3>No hay contactos añadidos</h3>
        </ng-template>
        </ion-col>
    </ion-row>
    </ion-grid>
</template>

<script lang="ts" setup>
import { IonList, IonLabel, IonImg } from '@ionic/vue';
import { removeCircleOutline, readerOutline  } from 'ionicons/icons';



</script>

<style scoped>
    .fotillo{
        width: 20%;
    }
</style>
