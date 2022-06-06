import router from "@/router";
import { toastController } from "@ionic/vue";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    // lo que quiero mantener en el estado de manera global va aquí
    state: () => ({ 
        isLoggedIn: false,
        email: "",
        password: "",
        errorMessage: "",
    }),
    
    getters: {},

    // los metodos globales de este Store
    actions: {
        async openToast(msg:string) {
            const toast = await toastController
            .create({
                message: msg,
                duration: 2000
            })
            return toast.present();
        },

        register() {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then( (userCredential) => {
                    const user = userCredential.user;
                    this.openToast('¡Usuario Registrado!')
                })
                .catch( (error) => {
                    const errorCode = error.code;
                    this.errorMessage = error.message;
                    this.openToast(this.errorMessage);
                });
        },


        signIn() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    this.openToast('¡Sesión niciada Correctamente!');
                    router.push("/auth");
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    this.errorMessage = error.message;
                    this.openToast(this.errorMessage);
                });
        },

        signout() {
            const auth = getAuth();
            signOut(auth)
                .then(() => { this.openToast('¡Sesión finalizada!') })
                .catch((error) => {
                    const errorCode = error.code;
                    this.errorMessage = error.message;
                    this.openToast(this.errorMessage);
                });
        },

    },
});