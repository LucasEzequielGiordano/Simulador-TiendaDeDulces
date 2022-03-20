// Declaracion de funciones
// Funcion donde recorro el array dulces y lo imprimo en cards
function elementosEnHTML(dulces) {
    let contenedor = document.getElementById("contenedor");
    dulces.forEach(dulces => {
        let card = document.createElement("div");
        card.innerHTML = `
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

        // Evento de agregar card al carrito
        // Al hacer click sobre el boton, pusheo al carrito 
        // Mando al localStorage el objeto seleccionado
        // Luego imprimo en el carrito los productos seleccionados
        let agregarAlCarrito = document.getElementById(`agregar${dulces.id}`);
        agregarAlCarrito.addEventListener("click", () => {
            // Validación de código
            // Busco en el id de cada producto seleccionado
            let idProducto = dulces.id
            let dulceEnCarrito = carrito.find((elemento) => {
                if (elemento.id == idProducto) {
                    return true;
                }
            });

            if (dulceEnCarrito) {
                let index = carrito.findIndex((elemento) => {
                    if (elemento.id === dulceEnCarrito.id) {
                        return true;
                    }
                });

                carrito[index].aumentar;
            } else {
                carrito.push(new Dulce(dulces.id, dulces.nombre, dulces.precio, dulces.images));
            }
            localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
            let imprimir = document.getElementById("divCarrito");
            let listaCarrito = document.createElement("ul");
            listaCarrito.innerHTML = `
            <li>${dulces.nombre}</li>
            <li><button class="btn btn-danger" id="restar${dulces.id}"> - </button>
            <span>Cantidad: <span id="cantidad${dulces.id}"> </span></span>
            <button class="btn btn-success" id="aumentar${dulces.id}"> + </button></li>
            <li id="valorTotal${dulces.precio}">$${dulces.precio}</li>
            <li><button class="btn btn-danger" id="eliminar${dulces.id}">ELIMINAR</button></li>
            `;
            imprimir.appendChild(listaCarrito);

            // Evento de sumar productos y su valor
            // Tomo el valor de la cantidad "1" del dulce seleccionado
            // Le sumo el precio a medida que aumente la cantidad
            let aumentar = document.getElementById(`aumentar${dulces.id}`);
            let cantidad = document.getElementById(`cantidad${dulces.id}`);
            let contador = 0;
            let valorTotal = document.getElementById(`valorTotal${dulces.precio}`);
            aumentar.addEventListener("click", () => {
                contador++;
                cantidad.textContent = contador;
                valorTotal.textContent = contador * `${dulces.precio}`;
            });

            // Evento de restar productos y su valor
            // Al restar la cantidad, se resta el precio 
            // Al llegar a 0 la cantidad, se elimina el objeto del carrito
            let restar = document.getElementById(`restar${dulces.id}`);
            restar.addEventListener("click", () => {
                if (contador <= 0) {
                    imprimir.removeChild(listaCarrito);
                    borrarElementoStorage();
                } else {
                    contador--;
                    cantidad.textContent = contador;
                    valorTotal.textContent = contador * `${dulces.precio}`;
                }
            });

            // Evento de eliminar productos del carrito
            // Al haccer click sobre el botón rojo
            // Se eliminará el producto del carrito
            let eliminarObjetoDeLista = document.getElementById(`eliminar${dulces.id}`);
            eliminarObjetoDeLista.addEventListener("click", () => {
                imprimir.removeChild(listaCarrito);
                borrarElementoStorage();
            });
        });
    });
}


function borrarElementoStorage() {
    let carritoStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));
    let indexStorage = carritoStorage.findIndex(element => element.id === dulces.id);
    carritoStorage.splice(indexStorage, 1);
    let reingresoStorage = JSON.stringify(carritoStorage);
    localStorage.setItem("carritoEnStorage", reingresoStorage)
}

// Función para cargar el carrito desde el localStorage
// En caso que no haya nada "Null" retoranará un array vacío
// Sino retornará el listado carrito
function cargarListado() {
    let listadoCarrito = JSON.parse(localStorage.getItem("carritoEnStorage"));
    if (listadoCarrito == null) {
        return [];
    }
    listadoCarrito.forEach((dulces) => {
        let imprimir = document.getElementById("divCarrito");
        let listaCarrito = document.createElement("ul");
        listaCarrito.innerHTML = `
    <li>${dulces.nombre}</li>
    <li><button class="btn btn-danger" id="restar${dulces.id}"> - </button>
    <span>Cantidad: <span id="cantidad${dulces.id}"> </span></span>
    <button class="btn btn-success" id="aumentar${dulces.id}"> + </button></li>
    <li id="valorTotal${dulces.precio}">$${dulces.precio}</li>
    <li><button class="btn btn-danger" id="eliminar${dulces.id}">ELIMINAR</button></li>
    `;
        imprimir.appendChild(listaCarrito);

        // Reutilizo los botones de eventos
        let aumentar = document.getElementById(`aumentar${dulces.id}`);
        let cantidad = document.getElementById(`cantidad${dulces.id}`);
        let contador = 0;
        let valorTotal = document.getElementById(`valorTotal${dulces.precio}`);
        aumentar.addEventListener("click", () => {
            contador++;
            cantidad.textContent = contador;
            valorTotal.textContent = contador * `${dulces.precio}`;
        });

        let restar = document.getElementById(`restar${dulces.id}`);
        restar.addEventListener("click", () => {
            if (contador <= 0) {
                imprimir.removeChild(listaCarrito);
                borrarElementoStorage();
            } else {
                contador--;
                cantidad.textContent = contador;
                valorTotal.textContent = contador * `${dulces.precio}`;
            }
        });

        let eliminarObjetoDeLista = document.getElementById(`eliminar${dulces.id}`);
        eliminarObjetoDeLista.addEventListener("click", () => {
            imprimir.removeChild(listaCarrito);
            borrarElementoStorage();
        });
    });
    return listadoCarrito;
}

// INVOCACION DE FUNCIONES
carrito = cargarListado();
elementosEnHTML(dulces);