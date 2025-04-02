function sumarN(){
    let n = parseInt(prompt("Ingresa la cantidad de números pares a sumar:")); //solicita que se ingrese una cantidad de números pares
    let suma = 0; //inicializa la variable suma
    let count = 0; //inicializa la variable count
    let numeroPar = 2; //inicializa la variable numero
    let array = [] // lista donde se guardaran los números pares
    
    while (count < n) { //bucle para que el count llegue a la canridad de números ingresados por el usaurio
        suma += numeroPar; //el suma el valor del numero par
        numeroPar += 2; //aumenta el numero par en 2
        count++; //aumenta la cuenta en 1
        array.push(numeroPar - 2); //guarda el valor de los números pares
    }
    alert("La suma de los " + n + " primeros números pares es: " + suma + `\nLista de números pares: ${array.join(", ")}`);
}