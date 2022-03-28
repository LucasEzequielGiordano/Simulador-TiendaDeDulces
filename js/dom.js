// Declaracion de funciones
// Recorro el array "dulces" e imprimo las cards 
function crearStringCatalogo() {
    let string = "";
    for (const dulce of dulces) {
        string += `
        <div class="card d-flex .justify-content-center" style="width: 18rem;">
            <img src="${dulce.images}" class="card-img-top" alt=" ">
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title text-center">${dulce.nombre}</h5>
                <p class="card-text text-center" id="valor${dulce.precio}">$${dulce.precio}</p>
                <button href="#" class="btn btn-dark" id="agregar${dulce.id}">Agregar Al Carrito</button>
            </div>
        </div>
        `;
    }
    return string;
}

// Recorro el array "listaCarrito" e imprimo los valores del dulce
function crearStringCarrito(listaCarrito) {
    let string = "";
    for (const dulce of listaCarrito) {
        string += `
        <div class="row row-cols-12">
              <div class="col">${dulce.nombre}</div>
              <div class="col"><button class="btn btn-danger" id="restar${dulce.id}"> - </button><span>Cantidad: <span id="cantidad${dulce.id}">${dulce.cantidad}</span></span><button class="btn btn-success" id="aumentar${dulce.id}"> + </button></div>
              <div class="col" id="valorTotal${dulce.precio}">$${dulce.precio}</div>
              <div class="col"><button class="btn btn-danger" id="eliminar${dulce.id}">ELIMINAR</button></div>
        </div>
        `;
    }
    return string;
}

// Funcion para mostrar las cards con los "dulces"
function catalogoDulces() {
    let contenedor = document.getElementById("contenedor");
    let card = document.createElement("div");
    card.innerHTML = crearStringCatalogo();
    contenedor.appendChild(card);
    imprimirDivCarrito();
}

// Funcion para imprimir el carrito
function imprimirDivCarrito() {
    let imprimir = document.getElementById("divCarrito");
    imprimir.textContent = "";
    let listaCarrito = document.createElement("div");
    listaCarrito.setAttribute("class", "container-fluid");
    listaCarrito.innerHTML = crearStringCarrito(obtenerDatosStorage());
    imprimir.appendChild(listaCarrito);
    agregarAlCarrito();
    operacionesCarrito();
    eliminarDelCarrito();
    sumarValorFinalCarrito();
    comprarCarrito()
}

// Declaro un evento "Click" para sumar unidades de dulces al carrito
function agregarAlCarrito() {
    for (const dulce of dulces) {
        let agregarAlCarrito = document.getElementById(`agregar${dulce.id}`);
        agregarAlCarrito.addEventListener("click", () => {
            let obtenerDatos = obtenerDatosStorage();
            if (buscarDulceStorage(dulce.id, obtenerDatos)) {
                return true
            } else {
                Toastify({
                    text: `Se agregó "${dulce.nombre}" al carrito!`,
                    duration: 3000,
                    gravity: 'top',
                    position: 'right'
                }).showToast();
                obtenerDatos.push(dulce);
                modificarDatosStorage(obtenerDatos);
                imprimirDivCarrito();
                sumarValorFinalCarrito();
            }
        });
    }
}

// Declaro las operaciones de cantidad en el carrito
function operacionesCarrito() {
    let listaCarrito = obtenerDatosStorage();
    // Recorro el array  "listaCarrito" y por cada evento "click"
    // Sumo una unidad a la cantidad del dulce en carrito
    for (const dulce of listaCarrito) {
        let aumentar = document.getElementById(`aumentar${dulce.id}`);
        let cantidad = document.getElementById(`cantidad${dulce.id}`);
        let valorTotal = document.getElementById(`valorTotal${dulce.precio}`);
        aumentar.addEventListener("click", () => {
            Toastify({
                text: `Se agregó otro "${dulce.nombre}" al carrito`,
                duration: 3000,
                gravity: 'top',
                position: 'right'
            }).showToast();
            agregarUnidadDulce(dulce);
            actualizarPrecioTotalDulce(dulce);
            modificarDatosStorage(listaCarrito);
            cantidad.textContent = dulce.cantidad;
            valorTotal.textContent = dulce.precioTotal;
            sumarValorFinalCarrito();
        });
    }

    // Recorro el array  "listaCarrito" y por cada evento "click"
    // Resto una unidad a la cantidad del dulce en carrito
    for (const dulce of listaCarrito) {
        let restar = document.getElementById(`restar${dulce.id}`);
        let cantidad = document.getElementById(`cantidad${dulce.id}`);
        let valorTotal = document.getElementById(`valorTotal${dulce.precio}`);
        restar.addEventListener("click", () => {
            if (dulce.cantidad == 1) {
                borrarDulceStorage(dulce.id, listaCarrito);
                imprimirDivCarrito();
            } else {
                quitarUnidadDulce(dulce)
                actualizarPrecioTotalDulce(dulce);
                modificarDatosStorage(listaCarrito);
                cantidad.textContent = dulce.cantidad;
                valorTotal.textContent = dulce.precioTotal;
                sumarValorFinalCarrito();
                Toastify({
                    text: `Se eliminó un "${dulce.nombre}" del carrito`,
                    duration: 3000,
                    gravity: 'top',
                    position: 'right'
                }).showToast();
            }
        });
    }
}

// Elimino del carrito y del storage el dulce seleccionado
function eliminarDelCarrito() {
    let listaCarrito = obtenerDatosStorage()
    for (const dulce of listaCarrito) {
        let eliminarObjetoDeLista = document.getElementById(`eliminar${dulce.id}`);
        eliminarObjetoDeLista.addEventListener("click", () => {
            Toastify({
                text: `Se eliminó "${dulce.nombre}" del carrito!`,
                duration: 3000,
                gravity: 'top',
                position: 'right'
            }).showToast();
            borrarDulceStorage(dulce.id, listaCarrito);
            sumarValorFinalCarrito();
            imprimirDivCarrito();
        });
    }
}

function comprarCarrito() {
    let botonComprar = document.getElementById("btnCompraFinal");
    botonComprar.addEventListener("click", () => {
        Swal.fire({
            title: `¡Felicitaciones!`,
            text: `Los productos ya han sido adquiridos`,
            icon: 'success',
            confirmButtonText: '🛒'
        });
        let imprimir = document.getElementById("divCarrito");
        imprimir.textContent = "";
        let obtenerDatos = obtenerDatosStorage();
        obtenerDatos = []
        modificarDatosStorage(obtenerDatos);
    });
}

// Funcion para sumar y restar el valor final del carrito
function sumarValorFinalCarrito() {
    let datosCarrito = obtenerDatosStorage();
    let compraFinal = document.getElementById("spanCompraFinal");
    let precioTotal = 0;
    for (const item of datosCarrito) {
        precioTotal += item.precioTotal;
        compraFinal.textContent = precioTotal;
    }
}

// INVOCACION DE FUNCIONES
catalogoDulces();