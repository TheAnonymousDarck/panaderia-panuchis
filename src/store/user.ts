import { defineStore } from "pinia";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";


export const useUserStore = defineStore('user', {
    // lo que quiero mantener en el estado de manera global va aquí
    state: () => ({ 
        user: [],
    }),

    // los metodos globales de este Store
    actions: {
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