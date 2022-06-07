import { defineStore } from "pinia";
import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Client } from './../interfaces/interfaces';


export const useUsersStore = defineStore('user', {
    // lo que quiero mantener en el estado de manera global va aquí
    state: () => ({ 
        user: [],
        isLoggedIn: false,
        uid: "",
        nombre: "",
        email: "",
        password: "",
        errorMessage: "",
        foto: "",
        direccion: "",
        telefono: 0,
        isAdmin: false,
    }),

    // los metodos globales de este Store
    actions: {
        addUserDB(uid: string){
            const docUserRef = doc(db, `users/${uid}`);
            const newUser: Client = {uid: uid, nombre: this.nombre, password: this.password, correo: this.email, direccion: this.direccion, foto: this.foto, telefono:this.telefono, isAdmin: this.isAdmin};
            setDoc(docUserRef, newUser);
        },
        
        async getAdmin(uid: string){
            const docUserRef = doc(db, `users/${uid}`);
            const docCifred = await getDoc(docUserRef);
            const finalData = docCifred.data()?.isAdmin;
            return finalData;
        },

        userWithRole(user:any) {
            this.getAdmin(user.uid).then((rol) => {
                const userData = {
                    uid: user.uid,
                    email: user.email,
                    rol: rol,
                };
                // this.user = userData;
                console.log("userData fianl", userData);
            });
            
        },

    },
});