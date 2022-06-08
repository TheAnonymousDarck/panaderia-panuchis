import { defineStore } from "pinia";
import { Product } from './../interfaces/interfaces';

export const useCartStore = defineStore('car', {
    // lo que quiero mantener en el estado de manera global va aquí
    state: () => ({ 
        cart: [] ,
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
            return console.log(product);
        },
        removeProduct( product: Product ){
            return console.log(product);
        },
        makeOrder(){
            return;
        },
        clearCart(){
            return;
        },

    },
});