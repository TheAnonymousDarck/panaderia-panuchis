export interface Client {
    uid: string;
    nombre: string;
    password: string;
    foto: string,
    direccion: string;
    telefono: number;
    correo: string;
    isAdmin: boolean;
}


export interface Product {
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: number;
    cantidad: number;
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