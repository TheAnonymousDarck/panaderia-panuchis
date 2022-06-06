export interface Product {
    nombre: string;
    descripcion?: string;
    imagen: string;
    precio: number;
    cantidad: number;
    disponible: boolean;
}

export interface User {
    nombre: string;
    imagen: string,
    direccion: string;
    telefono: number;
    correo: string;
}