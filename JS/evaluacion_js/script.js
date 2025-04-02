function sumar_n(){
    let n = parseInt(prompt("Ingrese un número:"));
    let fin = parseInt(prompt("ingresa el número final"));
    let pares = [];
    let cantidad = parseInt(prompt("cantidad de numeros pares"))
    
    for(i = 0; i < n; i++){
        if ( i % 2 === 0) {
            pares.push(i);
            if (pares.length === cantidad) break;
        }
    }



    alert("")
}

function sumar_n2(){
    let n = parseInt(prompt("Ingresa la cantidad de números pares a sumar:"));
    let suma = 0;
    let contador = 0;
    let numero = 2;

    while (contador < n) {
        for (let i = 0; i < 1; i++) {
            suma += numero;
            numero += 2;
            contador++;
        }
    }
    alert("La suma de los " + n + " primeros números pares es: " + suma);
}