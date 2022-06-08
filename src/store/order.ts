import { defineStore } from "pinia";
import { Product } from './../interfaces/interfaces';

export const useOrderStore = defineStore('car', {
    // lo que quiero mantener en el estado de manera global va aquí
    state: () => ({ 
        order: [] ,
    }),

    // los metodos globales de este Store
    actions: {
        loadCart(){
            return;
        },
        getCart(){
            return;
        },
        addProduct( product: Product ){
            return product;
        },
        removeProduct( product: Product ){
            return product;
        },
        makeOrder(){
            return;
        },
        clearCart(){
            return;
        },

    },
});