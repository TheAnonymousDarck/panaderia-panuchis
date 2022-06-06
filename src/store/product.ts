import { db } from "@/firebase";
import { query, collection, orderBy, getDocs } from "firebase/firestore";
import { defineStore } from "pinia";
import { Product } from './../interfaces/interfaces';


export const useProductStore = defineStore('pan', {
    // lo que quiero mantener en el estado de manera global va aquí
    state: () => ({ 
        products: [],
        
    }),

    // los metodos globales de este Store
    actions: {
        async getData () {
            const first = query(
                collection(db, "products"),
                orderBy("nombre"),
                //limit(3)
            );
            this.products = [];
        //     const querySnapshot = await getDocs(first);
        //     querySnapshot.forEach((doc) => {
        //         let product = doc.data();
        //         product.id = doc.id;
        //         this.products.push(product);
        //         console.log(this.products);
        //     });
        },
        

        addCart(){ return},
    },
});