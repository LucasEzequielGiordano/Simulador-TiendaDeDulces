/* SIMULADOR - TIENDA DE DULCES
 * 1. Que el usuario pueda elegir que dulce ordenar
 * 2. Que el usuario pueda elegir la cantidad de dulces a ordenar 
 * 3. Sumar el total del precio de cada dulce elegido y su cantidad
 * 4. Calcular el precio final
 * 5. Imprimir en consola todo el array "dulces" ordenado de menor a mayor por precio
 */

// ORDEN DEL CÓDIGO:
// OBJETOS
// ARRAYS

// DECLARACION DE OBJETOS
class Dulce {
    constructor(id, nombre, precio, images) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.images = images;
    }
}

// DECLARACION DE ARRAYS
let nuevoDulce;
const dulces = [];
let carrito = [];
dulces.push(new Dulce(0, "Dos Corazones", 80, "./images/Dos-Corazones.jpg"));
dulces.push(new Dulce(1, "Mogul Gomitas", 60, "./images/Mogul-Gomitas.jpg"));
dulces.push(new Dulce(2, "Ferrero Rocher", 250, "./images/Ferrero-Rocher.jpg"));
dulces.push(new Dulce(3, "Shot Bloque Chocolate", 160, "./images/Shot-Bloque-Chocolate.webp"));
dulces.push(new Dulce(4, "Kinder Chocolate", 255, "./images/Kinder-Chocolate.jpeg"));
dulces.push(new Dulce(5, "Jorgito Alfajor", 85, "./images/Jorgito-Alfajor.jpg"));
dulces.push(new Dulce(6, "Milka Chocolate", 310, "./images/Milka-Chocolate.png"));
dulces.push(new Dulce(7, "Pepitos Alfajor", 150, "./images/Pepitos-Alfajor.jpg"));
dulces.push(new Dulce(8, "Bon o Bon", 55, "./images/Bon-o-Bon.jpg"));