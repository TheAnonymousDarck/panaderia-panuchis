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
        

        addCart(){ return},
    },
});