import router from "@/router";
import { toastController } from "@ionic/vue";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { defineStore } from "pinia";
import { auth, db, storage } from "@/firebase";
import { Client } from './../interfaces/interfaces';
import { doc, setDoc } from "firebase/firestore";

export const useAuthStore = defineStore('auth', {
    // lo que quiero mantener en el estado de manera global va aquí
    state: () => ({ 
        isLoggedIn: false,
        uid: "",
        nombre: "",
        email: "",
        password: "",
        errorMessage: "",
        foto: "",
        direccion: "",
        telefono: 0,
        rol: "cliente"
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

        addUser(uid: string){
            const docUserRef = doc(db, `users/${uid}`);
            const newUser: Client = {uid: uid, nombre: this.nombre, correo: this.email, direccion: this.direccion, foto: this.foto, telefono:this.telefono, rol: this.rol};
            setDoc(docUserRef, newUser);
        },

        register() {            
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then( (userCredential) => {
                    const user = userCredential.user;
                    this.addUser(user.uid);
                    router.push('/tabs/home');
                    this.openToast('¡Usuario Registrado!')
                })
                .catch( (error) => {
                    const errorCode = error.code;
                    this.errorMessage = error.message;
                    this.openToast(this.errorMessage);
                });
        },

        signIn() {
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    this.openToast('¡Sesión iniciada Correctamente!');
                    router.push("/tabs/home");
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    this.errorMessage = error.message;
                    this.openToast(this.errorMessage);
                });
        },

        signout() {
            signOut(auth)
                .then(() => { 
                    this.openToast('¡Sesión finalizada!')
                    router.push("/");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    this.errorMessage = error.message;
                    this.openToast(this.errorMessage);
                });
        },

        

    },
});