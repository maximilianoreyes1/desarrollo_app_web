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
    let resultado = 0;

    if(operacion == "+"){
        resultado = numero1 + numero2;
    } else if(operacion == "-") {
        resultado = numero1 - numero2
    } else if(operacion == "*") {
        resultado = numero1 * numero2
    } else if(operacion == "/") {
        resultado = numero1 / numero2
    } else {
        alert("Ingrese una operación valida")
    }
    alert(`Este es el resultado de su operación ${resultado}`)
}

function sumarNumerosPares(){
    let count = parseInt(prompt("Ingrese cantidad de números pares que quiere sumar"))
    let suma = 0;

    for(i = 1; i <= count; i++){
        let n = parseInt(prompt(`Ingrese el número par número ${i}`))
        if(n % 2 !== 0){
            alert("Ese no es un número par");
            i--;
        } else {
            suma += n;
        }
    }
    alert(`La suma de los números es: ${suma}`)
}

function sumarPrimerosNumPares(){
    let n = parseInt(prompt("Ingresa la cantidad de números pares a sumar:")); //solicita que se ingrese una cantidad de números pares
    let suma = 0; //inicializa la variable suma
    let count = 0; //inicializa la variable count
    let numeroPar = 2; //inicializa la variable numero
    let array = [] // lista donde se guardaran los números pares
    
    while (count < n) {
        suma += numeroPar;
        array.push(numeroPar);
        numeroPar += 2;
        count++;
        
    }
    alert("La suma de los " + n + " primeros números pares es: " + suma + `\nLista de números pares: ${array.join(", ")}`);
}

function sumarNumerosImpares(){
    let count = parseInt(prompt("Ingrese cantidad de números impares que quiere sumar"))
    let suma = 0;

    for(i = 1; i <= count; i++){
        let n = parseInt(prompt(`Ingrese el número impar número ${i}`))
        if(n % 2 !== 1){
            alert("Ese no es un número impar");
            i--;
        } else {
            suma += n;
        }
    }
    alert(`La suma de los números es: ${suma}`)
}

function sumarPrimerosNumImpares(){
    let n = parseInt(prompt("Ingresa la cantidad de números pares a sumar:")); //solicita que se ingrese una cantidad de números pares
    let suma = 0; //inicializa la variable suma
    let count = 0; //inicializa la variable count
    let numeroSuma = 1; //inicializa la variable numero
    let array = [] // lista donde se guardaran los números pares
    
    while (count < n) {
        suma += numeroSuma;
        array.push(numeroSuma);
        numeroSuma += 2;
        count++;
    }
    alert(`La suma de los ${n} primeros números impares es: ${suma} \nLista de números impares: ${array.join(", ")}`);
}

function sumarMultiplosTres(){
    let n = parseInt(prompt("Ingresa la cantidad de números pares a sumar:")); //solicita que se ingrese una cantidad de números pares
    let suma = 0; //inicializa la variable suma
    let count = 0; //inicializa la variable count
    let numeroMul = 3
    let array = []

    while(count < n) {
        suma += numeroMul;
        array.push(numeroMul);
        numeroMul += 3;
        count++;
    }
    alert(`La suma de los ${n} multiplos de 3 es: ${suma} \nLista de multiplos de 3: ${array.join(", ")}`)
}

function calcularFactorial() {
    let n = parseInt(prompt("Ingresa el número para calcular el factorial:"));
    let resultado = 1;
    while (n > 1) {
        resultado *= n;
        n--;
    }
    alert(`El factorial de ${n} es: ${resultado}`);
}

function gradosCelciusFahrenheit(){
    
}