// DECLARACION DE FUNCIONES
// FUNCION DE INICIO
function init() {
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
            // IMPRIMO EN EL CARRITO LOS PRODUCTOS SELECCIONADOS
            let imprimir = document.getElementById("divCarrito");
            let listaCarrito = document.createElement("ul");
            listaCarrito.innerHTML += `
            <ul>
                <li>${dulces.nombre}</li>
                <li><button class="btn btn-danger" id="restar${dulces.id}"> - </button>
                <span>Cantidad: <span id="cantidad${dulces.id}">1</span></span>
                <button class="btn btn-success" id="aumentar${dulces.id}"> + </button></li>
                <li id="valor${dulces.precio}">$${dulces.precio}</li>
                <li><button class="btn btn-dark">COMPRAR</button></li>
            </ul>
            `;
            imprimir.appendChild(listaCarrito);
            // EVENTO DE SUMAR PRODUCTOS Y SU VALOR
            let aumentar = document.getElementById(`aumentar${dulces.id}`);
            let cantidad = document.getElementById(`cantidad${dulces.id}`);
            let contador = 0;
            let valorTotal = document.getElementById(`valor${dulces.precio}`);
            aumentar.addEventListener("click", () => {
                contador++;
                cantidad.textContent = contador;
                valorTotal.textContent = contador * `${dulces.precio}`;
            });
            // EVENTO DE RESTAR PRODUCTOS Y SU VALOR
            let restar = document.getElementById(`restar${dulces.id}`);
            restar.addEventListener("click", () => {
                contador--;
                cantidad.textContent = contador;
                valorTotal.textContent = contador * `${dulces.precio}`;
            });
        });
    });
}