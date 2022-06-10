import { defineStore } from "pinia";
import { Cart, DisplayCart, ProductCart } from './../interfaces/interfaces';
import {v4 as uuid4} from 'uuid'

interface State{
    cart: Cart | any,
    displayCart: DisplayCart[] | []
}

export const useCartStore = defineStore('cart', {
    state: () => ({ cart: {}, displayCart: [] } as State),

    actions: {
        loadCart(){
            const cs = localStorage.getItem('cart');
            if(!cs)
            this.cart = [];
            else
            this.cart = JSON.parse(cs)
        },
        getCart(){
            return;
        },
        addCart( product: ProductCart ){
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
                        return {id: cartItem.id, cantidad: cartItem.cantidad + 1}
                    }
                    return {id: cartItem.id, cantidad: cartItem.cantidad}
                })

                if(!isAdded)
                cartLocalStorage.products.push({id: product.id, cantidad: product.cantidad})

                this.cart = cartLocalStorage
            }

            localStorage.setItem('cart', JSON.stringify(this.cart))
        },

        removeCart( id:number ){
            (this.cart as Cart).products = (this.cart as Cart).products.filter(cartItem => cartItem.id != id) 
                this.displayCartLoad()
                localStorage.setItem('cart', JSON.stringify(this.cart))
        },

        displayCartLoad(){
        //     this.displayCart = (this.cart as Cart).products.map(cartItem => {
        //         const requiredProduct = productData.filter(p => p.id == cartItem.id)
        //         // if(requiredProduct[0].stock >= cartItem.cantidad)
        //         return {
        //             id:cartItem.id,
        //             name: requiredProduct[0].name, 
        //             price: requiredProduct[0].price, 
        //             cantidad: cartItem.cantidad, 
        //             color: requiredProduct[0].color,
        //             currency: requiredProduct[0].currency, 
        //             inStock: requiredProduct[0].stock >= cartItem.cantidad ? true : false
        //         }
        //     })

        },
        makeOrder(){
            return;
        },
        clearCart(){
            return;
        },

    },
});
