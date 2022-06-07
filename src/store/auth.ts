import { defineStore } from 'pinia';
import router from "@/router";
import { useUsersStore } from "./user";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase";

import { useToast } from "@/composables/useFunctionallyCompoonent";

const {  openToast, icons } = useToast() 
const { addUserDB } = useUsersStore()

export const useAuthStore = defineStore('auth', {
    // lo que quiero mantener en el estado de manera global va aquí
    state: () => ({ 
        isLoggedIn: false,
        email: '',
        password: '',
        errorMessage: '',
    }),
    // los metodos globales de este Store
    actions: {
        register() {
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then( (userCredential) => {
                    const user = userCredential.user;
                    addUserDB(user.uid);
                    // router.push('/tabs/home');
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