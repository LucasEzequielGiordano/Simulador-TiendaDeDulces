const productos = [{
    id: 0,
    nombre: "Dos Corazones",
    precio: 80,
},
{
    id: 1,
    nombre: "Mogul Gomitas",
    precio: 60,
},
{
    id: 2,
    nombre: "Ferrero Rocher",
    precio: 250,
},
{
    id: 3,
    nombre: "Shot Bloque Chocolate",
    precio: 160,
},
{
    id: 4,
    nombre: "Kinder Chocolate",
    precio: 255,
}, {
    id: 5,
    nombre: "Jorgito Alfajor",
    precio: 85,
}, {
    id: 6,
    nombre: "Milka Chocolate",
    precio: 310,
}, {
    id: 7,
    nombre: "Pepitos Alfajor",
    precio: 150,
},
{
    id: 8,
    nombre: "Bon o Bon",
    precio: 55,
}
]

const {precio} = productos
function sumarValorTotal(...productos) {
productos.reduce((acc, n) => acc + n, 0)
}
(productos < 100) ? alert("hola") : alert("chau")