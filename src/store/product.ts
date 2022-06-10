import { useToast } from "@/composables/useFunctionallyComponent";
import { db, productsCollection } from "@/firebase";
import router from "@/router";
import { alertController } from "@ionic/vue";
import { query, collection, getDocs, addDoc, deleteDoc, doc, getDoc, updateDoc, } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { Product } from './../interfaces/interfaces';

const {  openToast, icons } = useToast() 


export const useProductStore = defineStore('product', {
    // lo que quiero mantener en el estado de manera global va aquí
    state: () => ({ 
        // products: [],
        products: ref<any>([]),
        product: ref<any>([]),
        id: 0,
        nombre: '',
        descripcion: '',
        foto: '',
        precio: 0,
        cantidad: 0,
        fecha: new Date(),
        disponible: true,
    }),

    // los metodos globales de este Store
    actions: {
        async addProduct(){ 
            const newProduct: Product = {id: this.increment(), nombre: this.nombre, descripcion: this.descripcion, foto: this.foto, precio: this.precio, cantidad:this.cantidad, fecha:this.fecha, disponible: this.disponible};
            await addDoc(productsCollection, newProduct );
            console.log('producto guardado', newProduct);
            router.push('/tabs/product/');
            this.getProducts();
        },

        increment() { return this.id++},

        async getProducts () {
            const first = query(
                collection(db, "products"),
                // orderBy("author"),
              //limit(3)
            );
            this.products = [];
            const querySnapshot = await getDocs(first);
            querySnapshot.forEach((doc) => {
                const product = doc.data();
                product.id = doc.id;
                this.products.push(product);
                // console.log(this.products);
            });
        },

        async getProductById(productId: any){
            const productRef = doc(db, "products", productId);
            const product = await getDoc(productRef);
            this.product = product.data();

            this.nombre = this.product.nombre;
            this.descripcion = this.product.descripcion;
            this.foto = this.product.foto;
            this.precio = this.product.precio;
            this.cantidad = this.product.cantidad;
            this.fecha = this.product.fecha;
        },


        async editProduct(productId:any) {
            const productRef = doc(db, "products", productId);
            // const productUpdated: Product = {nombre: this.nombre, descripcion: this.descripcion, foto: this.foto, precio: this.precio, cantidad:this.cantidad, fecha:this.fecha, disponible: this.disponible};

            await updateDoc(productRef, {
                nombre: this.nombre,
                descripcion: this.descripcion,
                foto: this.foto,
                precio: this.precio,
                cantidad: this.cantidad,
                fecha: this.fecha
            });
            openToast('producto editado correctamente', 'success', icons.success)
            router.push('/tabs/product/');
            this.getProducts();
        },

        async deleteProduct(productId:any) {
            const productRef = doc(db, "products", productId);
            await deleteDoc(productRef);
            openToast('producto eliminado', 'success', icons.success)
            router.push('/tabs/product/');
            this.getProducts();
        },

        async alertDeleteProduct(productId:any) {
            const alert = await alertController.create({
                cssClass: 'tertuary',
                header:'Confirmar acción',
                message: 'Estas seguro que quieres <strong> eliminar </strong> este producto',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: blah => {
                            console.log('Confirm Cancel:', blah)
                        },
                    },
                    {
                        text: 'Ok',
                        cssClass:  'danger',
                        id: 'confirm-button',
                        handler: () => this.deleteProduct(productId),
                    },
                ],
            });
            return alert.present();
        },

        
    },
});

