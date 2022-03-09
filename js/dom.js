// imprimo los elementos, div, h3, p y button en el html
function elementosEnHTML(dulces) {
    let contenedor = document.getElementById("contenedor");

    for (const elemento of dulces) {
        let card = document.createElement("div");

        let nombre = document.createElement("h3");
        nombre.textContent = `${elemento.nombre}`;
        card.appendChild(nombre);
        
        let img = document.createElement("img");
        img.src = `${elemento.images}`;
        card.appendChild(img);

        let precio = document.createElement("p");
        precio.textContent = `Precio ${elemento.precio}`;
        card.appendChild(precio);

        let comprar = document.createElement("button");
        comprar.textContent = `COMPRAR`
        card.appendChild(comprar)

        contenedor.appendChild(card);
    }
}

// le  pido al usuario que elija un producto del carrito por prompt
// ese producto lo imprimo debajo de las cards (error en la impresión, se me imprime el numero)
function datosTomadosPorPrompt() {
    let carrito = document.querySelector("#carrito");

    let compraRealizada = prompt(`Elija que dulces va a pedir:\n 0. "${dulces[0].nombre}" $${dulces[0].precio}\n 1. "${dulces[1].nombre}" $${dulces[1].precio}\n 2. "${dulces[2].nombre}" $${dulces[2].precio}\n 3. "${dulces[3].nombre}" $${dulces[3].precio}\n 4. "${dulces[4].nombre}" $${dulces[4].precio}\n 5. "${dulces[5].nombre}" $${dulces[5].precio}\n 6. "${dulces[6].nombre}" $${dulces[6].precio}\n 7. "${dulces[7].nombre}" $${dulces[7].precio}\n 8. "${dulces[8].nombre}" $${dulces[8].precio}\n 9. Irse.`);
    let p = document.createElement("p");
    p.textContent = `Compraste ${compraRealizada}`;
    carrito.appendChild(p);
}

elementosEnHTML(dulces);
setTimeout(datosTomadosPorPrompt, 500);