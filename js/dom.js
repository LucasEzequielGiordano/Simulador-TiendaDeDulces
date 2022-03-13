// DECLARACION DE FUNCIONES
// FUNCION DE INICIO
function init() {
    elementosEnHTML(dulces);
    imprimirCarrito()
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
                <p class="card-text text-center">$${dulces.precio}</p>
                <div class="contenedorCantidad">
                    <button class="btn btn-danger" id="restar${dulces.id}"> - </button>
                    <p>Cantidad: <span id="cantidad${dulces.id}">0</span></p>
                    <button class="btn btn-success" id="aumentar${dulces.id}"> + </button>
                </div>
                <a href="#" class="btn btn-dark" id="agregar${dulces.id}">Agregar Al Carrito</a>
            </div>
        </div>
        `;
        contenedor.appendChild(card);
        // EVENTO DE SUMAR PRODUCTOS
        let aumentar = document.getElementById(`aumentar${dulces.id}`);
        let cantidad = document.getElementById(`cantidad${dulces.id}`);
        let contador = 0;
        aumentar.addEventListener("click", () => {
            contador++;
            cantidad.textContent = contador;
        });
        // EVENTO DE RESTAR PRODUCTOS
        let restar = document.getElementById(`restar${dulces.id}`);
        restar.addEventListener("click", () => {
            contador--;
            cantidad.textContent = contador;
        });
    });
}

// FUNCIÓN PARA IMPRIMIR TABLA EN EL CARRITO
function imprimirCarrito() {
    let bodyTabla = document.getElementById("bodyTabla");
    carrito.forEach(dulces => {
        let info = document.createElement("div");
        info.innerHTML = `
        <tr>
            <td>${dulces.nombre}</td>
            <td>${dulces.cantidad}</td>
            <td>$${dulces.precio}</td>
            <td><button id="eliminar${dulces.id}" type="button" class="btn btn-dark">Eliminar</button></td>
        </tr>
        `;
        bodyTabla.appendChild(info);
    });
}