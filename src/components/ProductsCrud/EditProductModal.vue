<template>

    <ion-grid>
        <ion-row>
            <ion-col>
                <ion-modal
                    :is-open="isOpenRef"
                >
                <ion-content :fullscreen="true">
                    <ion-card>
                        <ion-card-header>                                
                            <ion-card-title> Editar contacto </ion-card-title>
                        </ion-card-header>
<!-- <pre> {{ contactID }}</pre> -->

                        <ion-card-content>
                            <form @submit.prevent="editContact()">
                                <ion-item>
                                    <ion-icon slot="start" :icon="person"></ion-icon>
                                    <ion-label position="floating">Nombre(s)</ion-label>
                                    <ion-input v-model="formData.nombre" required></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-icon slot="start" :icon="person"></ion-icon>
                                    <ion-label position="floating">Apellido(s)</ion-label>
                                    <ion-input v-model="formData.apellido" required></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-icon slot="start" :icon="mailOutline"></ion-icon>
                                    <ion-label position="floating">Correo electronico</ion-label>
                                    <ion-input type="email" v-model="formData.email" required></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-icon slot="start" :icon="callOutline"></ion-icon>
                                    <ion-label position="floating">Telefono</ion-label>
                                    <ion-input type="tel" v-model="formData.telefono" required min="10" max="10"></ion-input>
                                </ion-item>


                                <ion-button type="submit" expand="block" color="success">
                                    <ion-icon slot="start" :icon="createOutline"></ion-icon>
                                    Editar contacto
                                </ion-button>
                            </form>
                            <ion-button @click="cancelButton(false)"  expand="block" color="success" fill="clear" >
                                <ion-icon slot="start" :icon="createOutline" ></ion-icon>
                                Cancelar
                            </ion-button>
                            <pre> </pre>


                        </ion-card-content>
                    </ion-card>

                </ion-content>
                    
                </ion-modal>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script setup lang="ts">
import { IonLabel, IonInput, IonItem, IonButton, IonGrid, IonCol, IonRow, IonIcon, IonModal, IonCard, IonContent, IonCardHeader, IonCardContent, IonCardTitle, toastController } from '@ionic/vue'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { person, mailOutline, callOutline, createOutline } from 'ionicons/icons'
import router from '@/router';

import { db } from '@/firebase';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const { contactId } = route.params;

let docRef:any;
let contactID:any; 
let contactData:any;

contactID = contactId

const isOpenRef = ref(true);
const setOpen = (state: boolean) => isOpenRef.value = state;

const formData = ref<any>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: 0,
});

async function getContact() {
    let contactRef = doc(db, contactID);
    docRef = contactRef;
    let contact = await getDoc(docRef);
    contactData = contact.data();

    formData.value.nombre = contactData.nombre;
    formData.value.apellido = contactData.apellido;
    formData.value.email = contactData.email;
    formData.value.telefono = contactData.telefono;
}

async function openToast() {
    const toast = await toastController
    .create({
        message: 'Contacto editado',
        duration: 2000
    })
    return toast.present();
}

async function editContact() {
    await setDoc(docRef, contactData);
    setOpen(false);
    openToast();
    router.push("/");
}

function cancelButton(open: boolean){
    setOpen(open)
    router.push("/tabs/tab3");
}

getContact()


</script>