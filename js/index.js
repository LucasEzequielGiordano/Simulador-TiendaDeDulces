/* SIMULADOR - TIENDA DE DULCES
 * 1. Preguntar al usuario que dulces desea comprar
 * 2. Preguntar al usuario si desea otro o quiere retirarse
 * 2.1 En caso de querer seguir, continuar hasta que desee finalizar el proceso
 * 2.2 Sumar el total del precio para sacar el precio final
 * 3. Imprimir en consola lo pedido por el usuario
 * 4. Imprimir en consola todo el array "dulces" ordenado de menor a mayor por precio
 */
// declaracion de objetos
class Dulce {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// declaracion de arrays
let nuevoDulce;
const dulces = [
    new Dulce("dos corazones", 80),
    new Dulce("Mogul Gomitas", 60),
    new Dulce("Ferrero Rocher", 250),
    new Dulce("Shot Bloque Chocolate", 160),
    new Dulce("Kinder Chocolate", 255),
    new Dulce("Jorgito Alfajor", 85),
    new Dulce("Milka Chocolate", 310),
    new Dulce("Pepitos Alfajor", 150),
    new Dulce("Marroc", 55)
];

let carrito = [];

// inicio del simulador
// validacion de la eleccion del cliente
function numeroValidacion(numero) {
    while (numero < 0 || numero > 9 || isNaN(numero)) {
        numero = parseInt(prompt(`Número invalido, Elija que dulces va a pedir:\n 0. "${dulces[0].nombre}" $${dulces[0].precio}\n 1. "${dulces[1].nombre}" $${dulces[1].precio}\n 2. "${dulces[2].nombre}" $${dulces[2].precio}\n 3. "${dulces[3].nombre}" $${dulces[3].precio}\n 4. "${dulces[4].nombre}" $${dulces[4].precio}\n 5. "${dulces[5].nombre}" $${dulces[5].precio}\n 6. "${dulces[6].nombre}" $${dulces[6].precio}\n 7. "${dulces[7].nombre}" $${dulces[7].precio}\n 8. "${dulces[8].nombre}" $${dulces[8].precio}\n 9. Irse.`));
    }
    return numero;
}

// almacena en el carrito el dulce elgido
function ordenDeCompra(eleccion) {
    carrito.push(dulces[eleccion]);
    alert(`Se agregó al carrito el dulces "${dulces[eleccion].nombre}"`);
    console.table(carrito);
}

// opcion de continuar comprando o irse
// en caso de continuar, sigue pusheando al carrito
function continuarCompra() {
    let eleccion = parseInt(prompt(`Elija que dulces va a ordenar:\n 0. "${dulces[0].nombre}" $${dulces[0].precio}\n 1. "${dulces[1].nombre}" $${dulces[1].precio}\n 2. "${dulces[2].nombre}" $${dulces[2].precio}\n 3. "${dulces[3].nombre}" $${dulces[3].precio}\n 4. "${dulces[4].nombre}" $${dulces[4].precio}\n 5. "${dulces[5].nombre}" $${dulces[5].precio}\n 6. "${dulces[6].nombre}" $${dulces[6].precio}\n 7. "${dulces[7].nombre}" $${dulces[7].precio}\n 8. "${dulces[8].nombre}" $${dulces[8].precio}\n 9. Irse.`));
    eleccion = numeroValidacion(eleccion);
    ordenDeCompra(eleccion);
}

// se calcula el total de todo lo pedido por el cliente
function calcularPrecioFinal() {
    let precioFinal = 0;
    carrito.forEach((Element) => precioFinal += Element.precio);
    return precioFinal;
}

// invocacion de funciones
let respuesta = true;
while (respuesta) {
    continuarCompra();
    respuesta = confirm("¿Desea agregar otro dulce al carrito?");
}

// alert(`El total a abonar por la compra realizada es de $${calcularPrecioFinal()}`);