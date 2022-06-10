import { defineStore } from "pinia";
import { Cart, DisplayCart, ProductCart } from './../interfaces/interfaces';
import {v4 as uuid4} from 'uuid'

interface State{
    cart: Cart | any,
    displayCart: DisplayCart[] | [],
    nombre: string,
    precio: number,
}

export const useCartStore = defineStore('cart', {
    state: () => ({ 
        cart: {}, 
        displayCart: [],
        nombre: '',
        precio: 0,
    } as State),

    actions: {
        loadCart(){
            const cs = localStorage.getItem('cart');
            if(!cs)
            this.cart = [];
            else
            this.cart = JSON.parse(cs)
        },
        addCart( product: ProductCart){
            const cs = localStorage.getItem('cart')

            let isAdded = false

            if(!cs)
            this.cart = {
                id: uuid4(),
                products:[
                    product
                ]
            }
            else {
                const cartLocalStorage = JSON.parse(cs)
                cartLocalStorage.products = cartLocalStorage.products.map((cartItem : ProductCart) => {
                    if(cartItem.id == product.id){
                        isAdded = true
                        return {id: cartItem.id,nombre: cartItem.nombre, precio:cartItem.precio , cantidad: cartItem.cantidad + 1}
                    }
                    return {id: cartItem.id,nombre: cartItem.nombre, precio:cartItem.precio , cantidad: cartItem.cantidad}
                })

                if(!isAdded){
                    cartLocalStorage.products.push({id: product.id, nombre: product.nombre, precio:product.precio , cantidad: product.cantidad})
                    
                }
                this.cart = cartLocalStorage
                this.displayCartLoad()
                
            }

            localStorage.setItem('cart', JSON.stringify(this.cart))
        },

        removeCart( id:number ){
            (this.cart as Cart).products = (this.cart as Cart).products.filter(cartItem => cartItem.id != id) 
                this.displayCartLoad()
                localStorage.setItem('cart', JSON.stringify(this.cart))
        },

        displayCartLoad(){
            this.displayCart = (this.cart as Cart).products.map(cartItem => {
                // const requiredProduct = this.cart.products.id.filter((p: { id: number; }) => p.id == cartItem.id)
                // const requiredProduct = this.getProps
                // console.log(this.getProps);

                return {
                    id:cartItem.id,
                    nombre: cartItem.nombre, 
                    precio: cartItem.precio,
                    cantidad: cartItem.cantidad, 
                    // disponible: data.stock >= cartItem.cantidad ? true : false
                }
            })

        },

        clearCart(){
            this.cart = {};
            this.displayCart = [];
        }

    },
});
