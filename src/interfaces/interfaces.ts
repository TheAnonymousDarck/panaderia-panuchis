export interface Client {
    uid: string;
    nombre: string;
    password: string;
    foto: string,
    direccion: string;
    telefono: number;
    email: string;
    isAdmin: boolean;
}


export interface Product {
    nombre: string;
    descripcion: string;
    foto: string;
    precio: number;
    cantidad: number;
    fecha: Date;
    disponible: boolean;
}


export interface Order {
    id: string;
    cliente: Client;
    productos: ProductOrder[];
    precioTotal: number;
    // estado: StatusOrder;
    fecha: Date;
    // valoracon: number;
}


export interface ProductOrder {
    producto: Product;
    cantidad: number;
}

export type StatusOrder = 'enviado' | 'visto' | 'camino' | 'entregado'