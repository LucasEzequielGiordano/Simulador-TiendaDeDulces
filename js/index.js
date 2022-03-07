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
    nombre: "Dos Corazones",
    precio: 80
}, {
    nombre: "Mogul Gomitas",
    precio: 60
}, {
    nombre: "Ferrero Rocher",
    precio: 250
}, {
    nombre: "Shot Bloque Chocolate",
    precio: 160
}, {
    nombre: "Kinder Chocolate",
    precio: 255
}, {
    nombre: "Jorgito Alfajor",
    precio: 85
}, {
    nombre: "Milka Chocolate",
    precio: 310
}, {
    nombre: "Pepitos Alfajor",
    precio: 150
}, {
    nombre: "Marroc",
    precio: 55
}];

let carrito = [];

// inicio del simulador
let eleccion = parseInt(prompt(`Elija que dulce va a ordenar:\n 0. "${dulce[0].nombre}" $${dulce[0].precio}\n 1. "${dulce[1].nombre}" $${dulce[1].precio}\n 2. "${dulce[2].nombre}" $${dulce[2].precio}\n 3. "${dulce[3].nombre}" $${dulce[3].precio}\n 4. "${dulce[4].nombre}" $${dulce[4].precio}\n 5. "${dulce[5].nombre}" $${dulce[5].precio}\n 6. "${dulce[6].nombre}" $${dulce[6].precio}\n 7. "${dulce[7].nombre}" $${dulce[7].precio}\n 8. "${dulce[8].nombre}" $${dulce[8].precio}\n 9. Irse.`));

// validacion de la eleccion del cliente
function numeroValidacion(numero) {
    while (numero < 0 || numero > 9 || isNaN(numero)) {
        numero = parseInt(prompt(`Número invalido, Elija que dulce va a pedir:\n 0. "${dulce[0].nombre}" $${dulce[0].precio}\n 1. "${dulce[1].nombre}" $${dulce[1].precio}\n 2. "${dulce[2].nombre}" $${dulce[2].precio}\n 3. "${dulce[3].nombre}" $${dulce[3].precio}\n 4. "${dulce[4].nombre}" $${dulce[4].precio}\n 5. "${dulce[5].nombre}" $${dulce[5].precio}\n 6. "${dulce[6].nombre}" $${dulce[6].precio}\n 7. "${dulce[7].nombre}" $${dulce[7].precio}\n 8. "${dulce[8].nombre}" $${dulce[8].precio}\n  9. Irse.`));
    }
    return numero;
}

eleccion = numeroValidacion(eleccion);

// la eleccion del cliente se pushea al array vacio "carrito"
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
    } else if (eleccion == 8) {
        carrito.push(new Dulces(dulce[eleccion]));
        alert(`Se agregó al carrito el dulce "${dulce[8].nombre}"`);
    } else {
        alert("Gracias, vuelva pronto");
    }
}

// opcion de continuar comprando o irse
// en caso de continuar, sigue pusheando al carrito
function continuarCompra() {
    eleccion = parseInt(prompt(`¿Desea comprar algo más o finalizar la compra?\n 0. "${dulce[0].nombre}" $${dulce[0].precio}\n 1. "${dulce[1].nombre}" $${dulce[1].precio}\n  2. "${dulce[2].nombre}" $${dulce[2].precio}\n  3. "${dulce[3].nombre}" $${dulce[3].precio}\n  4. "${dulce[4].nombre}" $${dulce[4].precio}\n  5. "${dulce[5].nombre}" $${dulce[5].precio}\n  6. "${dulce[6].nombre}" $${dulce[6].precio}\n  7. "${dulce[7].nombre}" $${dulce[7].precio}\n  8. "${dulce[8].nombre}" $${dulce[8].precio}\n  9. Irse.`))
    eleccion = numeroValidacion(eleccion);
    ordenDeCompra();
}

// se calcula el total de todo lo pedido por el cliente
function calcularPrecioFinal() {
    precioFinal = 0;
    for (const dulce of carrito) {
        precioFinal += dulce.precioFinal;
    }
    return precioFinal;
}

// invocacion de funciones
ordenDeCompra();
while (eleccion !== 9) {
    continuarCompra();
}

precioFinal = calcularPrecioFinal();
alert(`El total a abonar por la compra realizada es de $${precioFinal}`);

// imprimo en consola los dulces seleccionados para la compra
console.log("ARRAY CARRITO");
console.log(carrito);

// método find utiilizado para filtrar por nombre en el array carrito
console.log("ARRAY CARRITO ORDENADO FILTRANDO DULCES CON EL NOMBRE CHOCOLATE");
const chocolate = carrito.find((el) => el.nombre === "Chocolate");
console.log(chocolate);

// método filter utilizado para filtrar por precios mayores a 150 en el array carrito
console.log("ARRAY CARRITO IMPRIMIENDO TODO DULCE MAYOR A 150 EN SU PRECIO");
const mayorQuePrecio = carrito.filter((el) => el.precio > 150);
console.log(mayorQuePrecio);

// ordeno el array por precio
console.log("ARRAY DULCE ORDENADO DEL MENOR PRECIO AL MAYOR")
let carritoOrdenado = dulce.sort((a, b) => a.precio - b.precio);
console.log(carritoOrdenado);