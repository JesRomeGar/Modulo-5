// Mostrar una estructura de carrito de la compra.

const carrito = [
    {
        id: 342,
        name: "Pincel tamaño 2",
        price: 3.5,
        count: 2,
        premium: false
    },
    {
        id: 344,
        name: "Pincel tamaño 3",
        price: 3.95,
        count: 2,
        premium: false
    },
    {
        id: 142,
        name: "Spray pintura acrílica naranja metalizado",
        price: 4.95,
        count: 4,
        premium: true
    },
    {
        id: 543,
        name: "Cesped artificial verde lima 50gr",
        price: 8.75,
        count: 3,
        premium: true
    },
    {
        id: 332,
        name: "Expositor pinceles",
        price: 20.95,
        count: 1,
        premium: false
    },
    {
        id: 587,
        name: "Musgo bosque 100gr",
        price: 12.95,
        count: 3,
        premium: true
    }
];

function listar(producto) {
    console.log("ID: " + producto.id);
    console.log("NOMBRE " + producto.name);
    console.log("PRECIO: " + producto.price);
    console.log("CANTIDAD: " + producto.count);
    console.log("PREMIUM: " + producto.premium);
};



// Listar todos los productos.

for (i = 0; i < carrito.length; i++) {
    listar(carrito[i]);
};

console.log("------------------------");



// Eliminar el objeto con id 332 del carrito de la compra.

for (i = 0; i < carrito.length; i++) {
    if (carrito[i].id != "332") listar(carrito[i]);
};

console.log("------------------------");



// Calcular el total del carrito de la compra.

let total = 0;

for (i = 0; i < carrito.length; i++) {
    total += carrito[i].price * carrito[i].count;
};

console.log("TOTAL A PAGAR = " + total + "€");
console.log("------------------------");



//Filtrar por los productos que sean prime.

for (i = 0; i < carrito.length; i++) {
    if (carrito[i].premium != false) listar(carrito[i])
};

console.log("------------------------");



// Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido tiene gastos de envío".

let premium = true
for (i = 0; i < carrito.length; i++) {
    if (carrito[i].premium == false) {
        premium = false;
    }
}

if (premium != true) {
    console.log("Este pedido tiene gastos de envío");
} else {
    console.log("Este pedido no tiene gastos de envío");

};

console.log("------------------------");


//Montarlo con HTML.

document.write("<h1>" + "MI CARRITO" + "</h1>")

for (i = 0; i < carrito.length; i++) {
    document.write("<h2><li>" + carrito[i].name + ": " + carrito[i].price + "€" + "<br></br>" + "Cantidad: " + carrito[i].count + "<br></br>" + "</li></h2>")
}
document.write("<h1>" + "Total a pagar: " + total + " €" + "</h1>")



//Aplicar un descuento del 5% si la compra es mayor de 50 €

if (total >= 50) {
    total = total * 0.95
}

console.log("TOTAL A PAGAR = " + total + "€");
console.log("------------------------");