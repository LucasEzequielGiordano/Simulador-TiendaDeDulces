/* SIMULADOR - TIENDA DE DULCES
 * 1. Preguntar al usuario que dulce desea comprar
 * 2. Preguntar al usuario si desea otro o quiere retirarse
    * 2.1 En caso de querer seguir, continuar hasta que desee finalizar el proceso
    * 2.2 Sumar el total del precio para sacar el precio final
 * 3. Imprimir en consola lo pedido por el usuario
 * 4. Imprimir en consola todo el array "dulce" ordenado de menor a mayor por precio
*/
// declaracion de objetos
class Dulces {
    constructor(dulce) {
        this.id = dulce.id
        this.nombre = dulce.nombre;
        this.precio = dulce.precio;
        this.cantidad = 1;
        this.precioFinal = dulce.precio
    }
    precioTotal() {
        this.precioFinal = this.precio * this.cantidad;
    }
}

// declaracion de arrays
const dulce = [{
    id: 0,
    nombre: "Dos Corazones",
    precio: 80
}, {
    id: 1,
    nombre: "Mogul Gomitas",
    precio: 60
}, {
    id: 2,
    nombre: "Ferrero Rocher",
    precio: 250
}, {
    id: 3,
    nombre: "Shot Bloque Chocolate",
    precio: 160
}, {
    id: 4,
    nombre: "Kinder Chocolate",
    precio: 255
}, {
    id: 5,
    nombre: "Jorgito Alfajor",
    precio: 85
}, {
    id: 6,
    nombre: "Milka Chocolate",
    precio: 310
}, {
    id: 7,
    nombre: "Pepitos Alfajor",
    precio: 150
}, {
    id: 8,
    nombre: "Marroc",
    precio: 55
}];

let carrito = [];

// inicio del simulador
// validacion de orden de compra

let eleccion = parseInt(prompt(`Elija que dulce va a ordenar:\n 0. "${dulce[0].nombre}" $${dulce[0].precio}\n 1. "${dulce[1].nombre}" $${dulce[1].precio}\n 2. "${dulce[2].nombre}" $${dulce[2].precio}\n 3. "${dulce[3].nombre}" $${dulce[3].precio}\n 4. "${dulce[4].nombre}" $${dulce[4].precio}\n 5. "${dulce[5].nombre}" $${dulce[5].precio}\n 6. "${dulce[6].nombre}" $${dulce[6].precio}\n 7. "${dulce[7].nombre}" $${dulce[7].precio}\n 8. "${dulce[8].nombre}" $${dulce[8].precio}`));

function numeroValidacion(numero) {
    while (numero < 0 || numero > 8 || isNaN(numero)) {
        numero = parseInt(prompt(`Número invalido, Elija que dulce va a pedir:\n 0. "${dulce[0].nombre}" $${dulce[0].precio}\n 1. "${dulce[1].nombre}" $${dulce[1].precio}\n 2. "${dulce[2].nombre}" $${dulce[2].precio}\n 3. "${dulce[3].nombre}" $${dulce[3].precio}\n 4. "${dulce[4].nombre}" $${dulce[4].precio}\n 5. "${dulce[5].nombre}" $${dulce[5].precio}\n 6. "${dulce[6].nombre}" $${dulce[6].precio}\n 7. "${dulce[7].nombre}" $${dulce[7].precio}\n 8. "${dulce[8].nombre}" $${dulce[8].precio}`));
    }
    return numero;
}

eleccion = numeroValidacion(eleccion);

function ordenDeCompra() {
    if (eleccion == 0) {
        carrito.push(new Dulces(dulce[eleccion]));
        alert(`Se agregó al carrito el dulce "${dulce[0].nombre}"`);
    } else if (eleccion == 1) {
        carrito.push(new Dulces(dulce[eleccion]));
        alert(`Se agregó al carrito el dulce "${dulce[1].nombre}"`);
    } else if (eleccion == 2) {
        carrito.push(new Dulces(dulce[eleccion]));
        alert(`Se agregó al carrito el dulce "${dulce[2].nombre}"`);
    } else if (eleccion == 3) {
        carrito.push(new Dulces(dulce[eleccion]));
        alert(`Se agregó al carrito el dulce "${dulce[3].nombre}"`);
    } else if (eleccion == 4) {
        carrito.push(new Dulces(dulce[eleccion]));
        alert(`Se agregó al carrito el dulce "${dulce[4].nombre}"`);
    } else if (eleccion == 5) {
        carrito.push(new Dulces(dulce[eleccion]));
        alert(`Se agregó al carrito el dulce "${dulce[5].nombre}"`);
    } else if (eleccion == 6) {
        carrito.push(new Dulces(dulce[eleccion]));
        alert(`Se agregó al carrito el dulce "${dulce[6].nombre}"`);
    } else if (eleccion == 7) {
        carrito.push(new Dulces(dulce[eleccion]));
        alert(`Se agregó al carrito el dulce "${dulce[7].nombre}"`);
    } else {
        carrito.push(new Dulces(dulce[eleccion]));
        alert(`Se agregó al carrito el dulce "${dulce[8].nombre}"`);
    }
}

// continuar comprando o irse
function continuarCompra() {
    eleccion = parseInt(prompt(`¿Desea comprar algo más o finalizar la compra?\n 0. "${dulce[0].nombre}" $${dulce[0].precio}\n 1. "${dulce[1].nombre}" $${dulce[1].precio}\n  2. "${dulce[2].nombre}" $${dulce[2].precio}\n  3. "${dulce[3].nombre}" $${dulce[3].precio}\n  4. "${dulce[4].nombre}" $${dulce[4].precio}\n  5. "${dulce[5].nombre}" $${dulce[5].precio}\n  6. "${dulce[6].nombre}" $${dulce[6].precio}\n  7. "${dulce[7].nombre}" $${dulce[7].precio}\n  8. "${dulce[8].nombre}" $${dulce[8].precio}\n  9. Ver total a pagar e irse.`))
    eleccion = loopCompra(eleccion);

    if (eleccion == 0) {
        carrito.push(new Dulces(dulce[eleccion]));
    } else if (eleccion == 1) {
        carrito.push(new Dulces(dulce[eleccion]));
    } else if (eleccion == 2) {
        carrito.push(new Dulces(dulce[eleccion]));
    } else if (eleccion == 3) {
        carrito.push(new Dulces(dulce[eleccion]));
    } else if (eleccion == 4) {
        carrito.push(new Dulces(dulce[eleccion]));
    } else if (eleccion == 5) {
        carrito.push(new Dulces(dulce[eleccion]));
    } else if (eleccion == 6) {
        carrito.push(new Dulces(dulce[eleccion]));
    } else if (eleccion == 7) {
        carrito.push(new Dulces(dulce[eleccion]));
    } else if (eleccion == 8) {
        carrito.push(new Dulces(dulce[eleccion]));
    } else {
        alert("Muchas Gracias")
    }
}

function loopCompra(numero) {
    while (numero < 0 || numero > 9 || isNaN(numero)) {
        numero = parseInt(prompt(`Número invalido, ¿Desea comprar algo más o finalizar la compra?\n 0. "${dulce[0].nombre}" $${dulce[0].precio}\n 1. "${dulce[1].nombre}" $${dulce[1].precio}\n  2. "${dulce[2].nombre}" $${dulce[2].precio}\n  3. "${dulce[3].nombre}" $${dulce[3].precio}\n  4. "${dulce[4].nombre}" $${dulce[4].precio}\n  5. "${dulce[5].nombre}" $${dulce[5].precio}\n  6. "${dulce[6].nombre}" $${dulce[6].precio}\n  7. "${dulce[7].nombre}" $${dulce[7].precio}\n  8. "${dulce[8].nombre}" $${dulce[8].precio}\n  9. Ver total a pagar e irse.`));
    }
    return numero;
}

function calcularPrecioFinal() {
    precioFinal = 0;
    for (const dulce of carrito) {
        precioFinal += dulce.precioFinal;
    }
    return precioFinal;
}

// invocacion de funciones
while (eleccion !== 9) {
    ordenDeCompra();
    continuarCompra();
}
precioFinal = calcularPrecioFinal();
alert(`El total a abonar por la compra realizada es de ${precioFinal}`);

// imprimo en consola los dulces seleccionados para la compra
console.log(carrito);

// ordeno el array por precio
let carritoOrdenado = dulce.sort((a, b) => a.precio - b.precio);
console.log(carritoOrdenado);