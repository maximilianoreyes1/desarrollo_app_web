function sumarNumeros(){
    let n = parseInt(prompt("Ingrese un número natural:"));
    let suma = 0;
    let count = 0;
    let numeroNatural = 1;
    let array = []

    while(count < n){
        suma += numeroNatural;
        array.push(numeroNatural)
        numeroNatural += 1;
        count++;
    }
    alert(`La suma de los ${n} números pares es: ${suma} \nLista de números naturales: ${array.join(", ")}`);
}

function imprimirNumerosPares(){
    let n = 0;
    let suma = 2;
    let array = [];

    while(n < 200){
        n += suma;
        array.push(n)
    }
    alert(`Los primeros números pares son: ${array.join(", ")}`)
}

function imprimirNumerosImpares(){
    let n = 1;
    let suma = 2;
    let array = [];

    while(n <= 199){
        array.push(n)
        n += suma;
    }
    alert(`Los primeros números pares son: ${array.join(", ")}`)
}

function sumarCincoNumeros(){
    let suma = 0;

    for(let i = 1; i <= 5; i++){
        let numero = parseInt(prompt(`Ingrese el número ${i}`));
        suma += numero;
    }
    alert(`La suma de los números es: ${suma}`)
}

function sumarNumerosTeclado(){
    let suma = 0;
    let cantidad = parseInt(prompt("Ingrese la cantidad de veces que quiere sumar:"));

    for(let i = 1; i <= cantidad; i++){
        let numero = parseInt(prompt(`Ingrese el número ${i}`));
        suma += numero;
    }
    alert(`La suma de los números es: ${suma}`)
}

function operacionesVarias(){
    let numero1 = parseInt(prompt("Ingrese el primer número:"))
    let numero2 = parseInt(prompt("Ingrese el segundo número:"))
    let operacion = prompt("Que operación quiere hacer, +, -, *, /")
    resultado = 0;

    if(operacion == "+"){
        resultado = numero1 + numero2;
    } else if(operacion == "-") {
        resultado = numero1 - numero2
    } else if(operacion == "*") {
        resultado = numero1 * numero2
    } else if(operacion == "/") {
        resultado = numero1 / numero2
    }
}