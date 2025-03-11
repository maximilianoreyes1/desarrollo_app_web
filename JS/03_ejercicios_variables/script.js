//creacion de variables
let numero = 6; //numero INT
let decimal = 2.5 //numero float
let texto = "Hola";//string
let booleano = true;//booleano
let indefinido = undefined;
let nulo = null;

let array = [1, "Hola", 25];//array, lista
let matriz = [[1,2], [3,4]]
let objeto = {nombre: "Maxi", edad:16};

function int(){
    alert(numero)
}

function float(){
    alert(decimal);
}

function string(){
    alert(texto)
}

function boolean(){
    alert(booleano)
}

function m_array(){
    alert(array)
}

function m_matriz(){
    alert(matriz)
}

function m_object(){
    alert("Nombre: " + objeto.nombre + "\nEdad: " + objeto.edad)
}

function ind(){
    alert(indefinido)
}

function m_nulo(){
    alert(nulo)
}