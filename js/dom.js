// DECLARACION DE FUNCIONES 
// FUNCION PARA IMPRIMIR CARDS DE CARRITO
// RECORRO EL ARRAY DULCES Y LO IMPRIMO EN FORMA DE CARDS
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
        // AL HACER CLICK SOBRE EL BOTON, PUSHEO AL ARRAY CARRITO 
        // MANDO AL LOCALSTORAGE EL OBJETO SELECCIONADO
        // LUEGO IMPRIMO EN EL CARRITO LOS PRODUCTOS SELECCIONADOS
        let agregarAlCarrito = document.getElementById(`agregar${dulces.id}`);
        agregarAlCarrito.addEventListener("click", () => {
            carrito.push(new Dulce(dulces.id, dulces.nombre, dulces.precio, dulces.images));
            localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
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
            // TOMO EL VALOR DE LA CANTIDAD "1" DEL DULCE SELECCIONADO
            // A ESTE LE SUMO EL PRECIO A MEDIDA QUE LA CANTIDAD AUMENTA
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
            // LO MISMO QUE EN EL EVENTO SUMA SOLO QUE RESTANDO
            // AL LLEGAR A 0 SE ELIMINA DEL CARRITO
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

            // EVENTO DE ELIMINAR PRODUCTOS DEL CARRITO
            // AL HACER CLICK SOBRE EL BOTON ROJO
            // SE ELIMINARÁ EL PRODUCTO DEL CARRITO
            let eliminarObjetoDeLista = document.getElementById(`eliminar${dulces.id}`);
            eliminarObjetoDeLista.addEventListener("click", () => {
                imprimir.removeChild(listaCarrito);
            });
        });
    });
}

// FUNCION PARA CARGAR EL CARRITO DESDE LOCALSTORAGE
// EN CASO DE QUE NO HAYA NADA "NULL" RETORNARÁ UN ARRAY VACÍO
// SINO RETORNARÁ EL LISTADOCARRITO
function cargarListado() {
    let listadoCarrito = JSON.parse(localStorage.getItem("carritoEnStorage"));
    if (listadoCarrito == null) {
        return [];
    }
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
    return listadoCarrito;
    // return JSON.parse(localStorage.getItem("carritoEnStorage"));
}

// INVOCACION DE FUNCIONES
carrito = cargarListado();
elementosEnHTML(dulces);