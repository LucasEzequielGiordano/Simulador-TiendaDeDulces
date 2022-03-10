// imprimo los elementos
function elementosEnHTML(dulces) {
    let contenedor = document.getElementById("contenedor");
    dulces.forEach(dulces => {
        contenedor.innerHTML += `
        <div class="card d-flex .justify-content-center" style="width: 18rem;">
            <img src="${dulces.images}" class="card-img-top" alt=" ">
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title">${dulces.nombre}</h5>
                <p class="card-text">$${dulces.precio}</p>
                <div class="contenedorCantidad">
                    <button class="btn btn-info"> + </button>
                    <h6 class="my-5">Cantidad: <span>0</span></h6>
                    <button class="btn btn-danger"> - </button>
                </div>
                <a href="#" class="btn btn-dark">Agregar Al Carrito</a>
            </div>
        </div>
        `;
    });
}

// le  pido al usuario que elija un producto del carrito por prompt
// ese producto lo imprimo debajo de las cards (error en la impresión, se me imprime el numero)
function datosTomadosPorPrompt() {
    let carrito = document.querySelector("#carrito");
    let compraRealizada = prompt(`Elija que dulces va a pedir:\n 0. "${dulces[0].nombre}" $${dulces[0].precio}\n 1. "${dulces[1].nombre}" $${dulces[1].precio}\n 2. "${dulces[2].nombre}" $${dulces[2].precio}\n 3. "${dulces[3].nombre}" $${dulces[3].precio}\n 4. "${dulces[4].nombre}" $${dulces[4].precio}\n 5. "${dulces[5].nombre}" $${dulces[5].precio}\n 6. "${dulces[6].nombre}" $${dulces[6].precio}\n 7. "${dulces[7].nombre}" $${dulces[7].precio}\n 8. "${dulces[8].nombre}" $${dulces[8].precio}\n 9. Irse.`);
    let p = document.createElement("p");
    compraRealizada = numeroValidacion(compraRealizada)
    p.textContent = `Compraste ${compraRealizada}`;
    carrito.appendChild(p);
}

elementosEnHTML(dulces);
setTimeout(datosTomadosPorPrompt, 500);