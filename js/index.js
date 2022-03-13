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

// inicio del simulador
// validacion de la eleccion del cliente
// function numeroValidacion(numero) {
//     while (numero < 0 || numero > 9 || isNaN(numero)) {
//         numero = parseInt(prompt(`Número invalido, Elija que dulces va a pedir:\n 0. "${dulces[0].nombre}" $${dulces[0].precio}\n 1. "${dulces[1].nombre}" $${dulces[1].precio}\n 2. "${dulces[2].nombre}" $${dulces[2].precio}\n 3. "${dulces[3].nombre}" $${dulces[3].precio}\n 4. "${dulces[4].nombre}" $${dulces[4].precio}\n 5. "${dulces[5].nombre}" $${dulces[5].precio}\n 6. "${dulces[6].nombre}" $${dulces[6].precio}\n 7. "${dulces[7].nombre}" $${dulces[7].precio}\n 8. "${dulces[8].nombre}" $${dulces[8].precio}\n 9. Irse.`));
//     }
//     return numero;
// }

// almacena en el carrito el dulce elegido
// function ordenDeCompra(eleccion) {
//     carrito.push(dulces[eleccion]);
//     alert(`Se agregó al carrito el dulces "${dulces[eleccion].nombre}"`);
//     console.table(carrito);
// }

// opcion de continuar comprando o irse
// en caso de continuar, sigue pusheando al carrito
// function continuarCompra() {
// let eleccion = parseInt(prompt(`Elija que dulces va a ordenar:\n 0. "${dulces[0].nombre}" $${dulces[0].precio}\n 1. "${dulces[1].nombre}" $${dulces[1].precio}\n 2. "${dulces[2].nombre}" $${dulces[2].precio}\n 3. "${dulces[3].nombre}" $${dulces[3].precio}\n 4. "${dulces[4].nombre}" $${dulces[4].precio}\n 5. "${dulces[5].nombre}" $${dulces[5].precio}\n 6. "${dulces[6].nombre}" $${dulces[6].precio}\n 7. "${dulces[7].nombre}" $${dulces[7].precio}\n 8. "${dulces[8].nombre}" $${dulces[8].precio}\n 9. Irse.`));
// eleccion = numeroValidacion(eleccion);
// ordenDeCompra(eleccion);
// }

// se calcula el total de todo lo pedido por el cliente
// function calcularPrecioFinal() {
//     let precioFinal = 0;
//     carrito.forEach((Element) => precioFinal += Element.precio);
//     return precioFinal;
// }

// invocacion de funciones
// let respuesta = true;
// respuesta = confirm("¿Desea agregar otro dulce al carrito?");
// while (respuesta) {
// continuarCompra();
// }