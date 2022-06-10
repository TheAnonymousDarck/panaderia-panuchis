import { defineStore } from 'pinia';
import router from "@/router";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "@/firebase";

import { useToast } from "@/composables/useFunctionallyComponent";
import { Client } from '@/interfaces/interfaces';
import { doc, setDoc } from 'firebase/firestore';

const {  openToast, icons } = useToast() 

export const useAuthStore = defineStore('auth', {
    // lo que quiero mantener en el estado de manera global va aquí
    state: () => ({ 
        isLoggedIn: false,
        uid: "",
        nombre: "",
        email: "",
        password: "",
        errorMessage: "",
        foto: "https://freesvg.org/img/abstract-user-flat-4.png",
        direccion: "",
        telefono: 0,
        isAdmin: false,
    }),
    // los metodos globales de este Store
    actions: {
        addUserDB(uid: string){ 
            const docUserRef = doc(db, `users/${uid}`);
            const newUser: Client = {uid: uid, nombre: this.nombre, password: this.password, email: this.email, direccion: this.direccion, foto: this.foto, telefono:this.telefono, isAdmin: this.isAdmin};
            setDoc(docUserRef, newUser);
        },

        
        register() {
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then( (userCredential) => {
                    const user = userCredential.user;
                    this.addUserDB(user.uid);
                    openToast('¡Usuario Registrado!', 'success', icons.check)
                })
                .catch( (error) => {
                    // const errorCode = error.code;
                    this.errorMessage = error.message;
                    openToast(this.errorMessage);
                });
        },

        signIn() {
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    openToast('¡Sesión iniciada Correctamente!');
                    router.push("/tabs/home");
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    this.errorMessage = error.message;
                    console.log(this.errorMessage);
                    openToast('error no se encuentra registrado un usuario con estos datos');
                });
        },

        signout() {
            signOut(auth)
            .then(() => { 
                    openToast('¡Sesión finalizada!')
                    router.push("/");
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    this.errorMessage = error.message;
                    openToast(this.errorMessage);
                });
        },

    },
});