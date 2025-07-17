console.log("Vinculado correctamente...");

/* 🧠 Ejercicio 1: Agregar lista de compras */
const resultado = document.getElementById("resultado");
function agregarElementoCompra() {
    let elemento = document.getElementById("lista").value;
    let item = document.createElement("li");
    item.innerText = elemento;
    resultado.appendChild(item);
}

/* 🧠 Ejercicio 2: Eliminar último elemento */
let carrito = [];
function agregarElemento2() {
    const input = document.getElementById("lista2");
    const valor = input.value.trim();
    if (valor === "") return;
    carrito.push("> " + valor);
    input.value = "";
    input.focus();
    mostrarListaCompra();
}

function eliminarUltimoElemento() {
    if (carrito.length > 0) {
        carrito.pop();
    }
    mostrarListaCompra();
}

function mostrarListaCompra() {
    const lista = document.getElementById("resultado2");
    lista.innerHTML = "";
    for (let i = 0; i < carrito.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${carrito[i]}`;
        lista.appendChild(li);
    }
}

/* 🧠 Ejercicio 3: Agregar al inicio */
let colores = [];
function agregarInicio() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim();
    if (valor === "") return;
    colores.unshift("> " + valor);
    input.value = "";
    input.focus();
    mostrarListaColores();
}

function mostrarListaColores() {
    const lista = document.getElementById("resultado3");
    lista.innerHTML = "";
    for (let i = 0; i < colores.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${colores[i]}`;
        lista.appendChild(li);
    }
}

/* 🧠 Ejercicio 4: Quitar el primero */
let colores2 = [];
let eliminados = [];
function agregarInicio2() {
    const input = document.getElementById("lista4");
    const valor = input.value.trim();
    if (valor === "") return;
    colores2.unshift("> " + valor);
    input.value = "";
    input.focus();
    mostrarListaColores2();
}

function eliminarPrimerElemento() {
    if (colores2.length > 0) {
        const eliminado = colores2.shift();
        eliminados.push(eliminado);
    }
    // Mostrar los elementos eliminados completos
    const lista = document.getElementById("eliminado");
    lista.innerHTML = "";
    for (let i = 0; i < eliminados.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = eliminados[i];
        lista.appendChild(li);
    }
    mostrarListaColores2();
}

function mostrarListaColores2() {
    const lista = document.getElementById("resultado4");
    lista.innerHTML = "";
    for (let i = 0; i < colores2.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${colores2[i]}`;
        lista.appendChild(li);
    }
}

/* 🧠 Ejercicio 5: Combinación de métodos */
let numeros = [];
function agregarInicio5() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();
    if (valor === "") return;
    numeros.unshift(Number(valor));
    input.value = "";
    input.focus();
    mostrarListaNumeros();
}

function agregarFin() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();
    if (valor === "") return;
    numeros.push(Number(valor));
    input.value = "";
    input.focus();
    mostrarListaNumeros();
}

function eliminarPrimerElemento2() {
    if (numeros.length > 0) {
        numeros.shift();
    }
    mostrarListaNumeros();
}

function eliminarUltimoElemento2() {
    if (numeros.length > 0) {
        numeros.pop();
    }
    mostrarListaNumeros();
}

function mostrarListaNumeros() {
    const lista = document.getElementById("resultado5");
    lista.innerHTML = "";
    for (let i = 0; i < numeros.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${numeros[i]}`;
        lista.appendChild(li);
    }
}

//Ejercicio 6
let orden = [];