<template>
    <ion-list>
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
    </ion-list>
</template>

<script lang="ts" setup>
import { IonList, IonLabel } from '@ionic/vue';
import { addCircleOutline, removeCircleOutline  } from 'ionicons/icons';



</script>
