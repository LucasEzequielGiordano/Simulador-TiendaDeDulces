// DECLARACION DE FUNCIONES
// FUNCION DE INICIO DE LECTURA DE CODIGO
function init() {
    let listadoCarrito = cargarListado();
    mostrarListado(listadoCarrito);
    elementosEnHTML(dulces);
}

// IMPRIMO ELEMENTOS DEL ARRAY DULCES EN FORMA DE CARD
function elementosEnHTML(dulces) {
    let contenedor = document.getElementById("contenedor");
    dulces.forEach(dulces => {
        let card = document.createElement("div");
        card.innerHTML += `
        <div class="card d-flex .justify-content-center" style="width: 18rem;">
            <img src="${dulces.images}" class="card-img-top" alt=" ">
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title text-center">${dulces.nombre}</h5>
                <p class="card-text text-center" id="valor${dulces.precio}">$${dulces.precio}</p>
                <button href="#" class="btn btn-dark" id="agregar${dulces.id}">Agregar Al Carrito</button>
            </div>
        </div>
        `;
        contenedor.appendChild(card);
        
        // EVENTO DE AGREGAR AL CARRITO
        let agregarAlCarrito = document.getElementById(`agregar${dulces.id}`);
        agregarAlCarrito.addEventListener("click", () => {
            carrito.push(new Dulce(dulces.id, dulces.nombre, dulces.precio, dulces.images));
            // AL CLICKEAR SOBRE UN BOTON DE AGREGAR AL CARRITO EN ALGUNA CARD
            // MANDO AL LOCALSTORAGE EL OBJETO SELECCIONADO
            localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));


            // IMPRIMO EN EL CARRITO LOS PRODUCTOS SELECCIONADOS
            let imprimir = document.getElementById("divCarrito");
            let listaCarrito = document.createElement("ul");
            listaCarrito.innerHTML += `
                <li>${dulces.nombre}</li>
                <li><button class="btn btn-danger" id="restar${dulces.id}"> - </button>
                <span>Cantidad: <span id="cantidad${dulces.id}">1</span></span>
                <button class="btn btn-success" id="aumentar${dulces.id}"> + </button></li>
                <li id="valorTotal${dulces.precio}">$${dulces.precio}</li>
                <li><button class="btn btn-danger" id="eliminar${dulces.id}">ELIMINAR</button></li>
                `;
            imprimir.appendChild(listaCarrito);


            // EVENTO DE SUMAR PRODUCTOS Y SU VALOR
            let aumentar = document.getElementById(`aumentar${dulces.id}`);
            let cantidad = document.getElementById(`cantidad${dulces.id}`);
            let contador = 0;
            let valorTotal = document.getElementById(`valorTotal${dulces.precio}`);
            aumentar.addEventListener("click", () => {
                contador++;
                cantidad.textContent = contador;
                valorTotal.textContent = contador * `${dulces.precio}`;
            });


            // EVENTO DE RESTAR PRODUCTOS Y SU VALOR
            let restar = document.getElementById(`restar${dulces.id}`);
            restar.addEventListener("click", () => {
                if (contador <= 0) {
                    imprimir.removeChild(listaCarrito);

                } else {
                    contador--;
                    cantidad.textContent = contador;
                    valorTotal.textContent = contador * `${dulces.precio}`;
                }
            });


            // EVENTO DE ELIMINAR PRODUCTOS DEL CARRITO AL HACER CLICK
            let eliminarObjetoDeLista = document.getElementById(`eliminar${dulces.id}`);
            eliminarObjetoDeLista.addEventListener("click", () => {
                imprimir.removeChild(listaCarrito);
            });
        });
    });
}

// FUNCION PARA CARGAR DESDE EL LOCALSTORAGE EL LISTADO
function cargarListado() {
    let listadoCarrito = JSON.parse(localStorage.getItem("carritoEnStorage"));
    if (listadoCarrito == null) {
        return [];
    }
    return listadoCarrito;
}

// FUNCION PARA MOSTRAR EL LISTADO DEL CARRITO DE VUELTA
function mostrarListado(listadoCarrito) {
    listadoCarrito.forEach((dulces) => {
        let imprimir = document.getElementById("divCarrito");
        let listaCarrito = document.createElement("ul");
        listaCarrito.innerHTML += `
    <li>${dulces.nombre}</li>
    <li><button class="btn btn-danger" id="restar${dulces.id}"> - </button>
    <span>Cantidad: <span id="cantidad${dulces.id}">1</span></span>
    <button class="btn btn-success" id="aumentar${dulces.id}"> + </button></li>
    <li id="valorTotal${dulces.precio}">$${dulces.precio}</li>
    <li><button class="btn btn-danger" id="eliminar${dulces.id}">ELIMINAR</button></li>
    `;
        imprimir.appendChild(listaCarrito);
    });
    return JSON.parse(localStorage.getItem("carritoEnStorage"));
}