import { defineStore } from "pinia";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export const useUserStore = defineStore('user', {
    // lo que quiero mantener en el estado de manera global va aquí
    state: () => ({ 
        uid: '',
        isLoggedIn: false,
        nombre: "",
        email: "",
        password: "",
        errorMessage: "",
        foto: "",
        direccion: "",
        telefono: 0,
        isAdmin: false,
    }),
    persist:true,

    // los metodos globales de este Store
    actions: {
        async getAdmin(uid: string){
            const docUserRef = doc(db, `users/${uid}`);
            const docCifred = await getDoc(docUserRef);
            const finalData = docCifred.data();
            this.setUserInfo(finalData)
        },

        setUserInfo(finalData:any){
            this.uid = finalData!.uid;
            this.nombre = finalData!.nombre,
            this.password = finalData!.password,
            this.foto = finalData!.foto,
            this.direccion = finalData!.direccion,
            this.telefono = finalData!.telefono,
            this.email = finalData!.email,
            this.isAdmin = finalData!.isAdmin
        } 

    },
});