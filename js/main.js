// Declaracion de objetos
class Dulce {
    constructor(id, nombre, precio, images) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.images = images;
        this.cantidad = 1;
        this.precioTotal = this.precio;
    }
}

// Declaracion de arrays
let dulces = []
// Push  a los arrays
dulces.push(new Dulce(0, "Dos Corazones", 80, "./images/Dos-Corazones.jpg"));
dulces.push(new Dulce(1, "Mogul Gomitas", 60, "./images/Mogul-Gomitas.jpg"));
dulces.push(new Dulce(2, "Ferrero Rocher", 250, "./images/Ferrero-Rocher.jpg"));
dulces.push(new Dulce(3, "Shot Bloque Chocolate", 160, "./images/Shot-Bloque-Chocolate.webp"));
dulces.push(new Dulce(4, "Kinder Chocolate", 255, "./images/Kinder-Chocolate.jpeg"));
dulces.push(new Dulce(5, "Jorgito Alfajor", 85, "./images/Jorgito-Alfajor.jpg"));
dulces.push(new Dulce(6, "Milka Chocolate", 310, "./images/Milka-Chocolate.png"));
dulces.push(new Dulce(7, "Pepitos Alfajor", 150, "./images/Pepitos-Alfajor.jpg"));
dulces.push(new Dulce(8, "Bon o Bon", 55, "./images/Bon-o-Bon.jpg"));

// Declaracion de metodos
// Funcion para agregar una unidad en la cantidad del dulce
function agregarUnidadDulce(dulce) {
    dulce.cantidad = dulce.cantidad + 1;
}

// Funcion para quitar una unidad en la cantidad del dulce
function quitarUnidadDulce(dulce) {
    dulce.cantidad = dulce.cantidad - 1;
}

// Funcion para actualizar el precio total del dulce
function actualizarPrecioTotalDulce(dulce) {
    dulce.precioTotal = dulce.precio * dulce.cantidad;
}

// Recibo los datos almacenados en storage
// Devuelvo el listado
function obtenerDatosStorage() {
    let listadoCarrito = JSON.parse(localStorage.getItem("carritoEnStorage")) || [];
    return listadoCarrito;
    // if (listadoCarrito == null) {
    //     return [];
    // }
}

// Recibo la nueva lista a modificar y la meto en el carrito
function modificarDatosStorage(listaCarrito) {
    localStorage.setItem("carritoEnStorage", JSON.stringify(listaCarrito));
}

// Recibo el ID de un dulce y una lista
// Devuelvo boolean si encuentra ese ID en la lista
function buscarDulceStorage(id, listaCarrito) {
    for (const dulce of listaCarrito) {
        if(dulce.id == id) {
            return true;
        }
    }
    return false;
}

// Recibo el ID de un dulce y una lista
// Para borrar el dulce en la lista y actualizar el storage
function borrarDulceStorage(id, listaCarrito) {
    let indexStorage = listaCarrito.findIndex(element => element.id === id);
    listaCarrito.splice(indexStorage, 1);
    modificarDatosStorage(listaCarrito);
}