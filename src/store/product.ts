import { useToast } from "@/composables/useFunctionallyComponent";
import { db } from "@/firebase";
import router from "@/router";
import { query, collection, orderBy, getDocs, addDoc, deleteDoc, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { Product } from './../interfaces/interfaces';

const {  openToast, icons } = useToast() 


export const useProductStore = defineStore('product', {
    // lo que quiero mantener en el estado de manera global va aquí
    state: () => ({ 
        // products: [],
        products: ref<any>([]),
        nombre: '',
        descripcion: '',
        foto: '',
        precio: 0,
        cantidad: 0,
        fecha: new Date(),
        disponible: false,
    }),

    // los metodos globales de este Store
    actions: {
        addProduct(){ 
            const docProductRef = doc(db, 'products');
            const newProduct: Product = {nombre: this.nombre, descripcion: this.descripcion, foto: this.foto, precio: this.precio, cantidad:this.cantidad, fecha:this.fecha, disponible: this.disponible};
            setDoc(docProductRef, newProduct);
        },

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
                console.log(this.products);
            });
        },

        async deleteProduct(productId:any) {
            const contactRef = doc(db, productId);
            await deleteDoc(contactRef);
            openToast('prodcuto eliminado', 'success', icons.success)
            // router.push("/");
        },

        async editContact() {
            const docProductRef = doc(db, "products");
            // await setDoc(docProductRef, contactData);
            // setOpen(false);
            // openToast();
            router.push("/");
        }

        
    },
});

