<template>
    <ion-page>
        <ion-content :fullscreen="true">


        <ion-grid fixed>
            <ion-row>
                <ion-col size="10">

                    <ion-row>
                        <ion-col size="12">
                            <ion-card>
                                <ion-card-header>
                                    <center>
                                        <ion-card-title>Bienvenido</ion-card-title>
                                        <img src="../assets/logos/pan.png" alt="" width="250" height="280">
                                        <ion-card-subtitle>¿Otra conchita o que?</ion-card-subtitle>
                                    </center>
                                </ion-card-header>
                            
                                <ion-card-title v-if="isLogin"> <center> Iniciar Sesión </center>  </ion-card-title>
                                <ion-card-title v-if="isRegister"> <center> Regístrate </center> </ion-card-title>
                                
                                <LoginForm v-if="isLogin"/>
                                <RegisterForm v-if="isRegister"/> 
                                <ion-button v-if="isRegister" @click="setLogin(true) && setRegister(false)" expand="block" fill="clear" shape="round">
                                    Inicia Sesión
                                </ion-button>
                                <ion-button v-if="isLogin" @click="setRegister(true) && setLogin(false)" expand="block" fill="clear" shape="round">
                                    Registrate
                                </ion-button>

                            </ion-card>

                        </ion-col>
                    </ion-row>

                </ion-col>
            </ion-row>
        </ion-grid>

        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import { IonContent, IonPage, IonCard, IonCardTitle, IonButton, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, } from '@ionic/vue';
import { ref } from 'vue';
import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue';


const isLogin = ref(true);
const isRegister = ref(false);
const setLogin = (state: boolean) => isLogin.value = state;
const setRegister = (state: boolean) => isRegister.value = state;

// console.log(user);

</script>
