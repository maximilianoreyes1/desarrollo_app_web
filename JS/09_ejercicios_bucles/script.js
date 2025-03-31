function imprimirNum(){
    let n = parseInt(prompt("Ingrese un número:"));
    let count = 1
    let array = []

    while (count <= n){
        array.push(count)
        count++;
    }
    alert(`los números son: ${array.join(" - ")}`)
}

function imprimirNumN(){
    let n = parseInt(prompt("Ingrese un número:"))
    let contador = 1;
    let array = []

    while (n >= contador){
        array.push(n);
        n--;
    }
    alert(`los números son: ${array.join(" - ")}`)
}

function sumarNum(){
    let sumar = 0;
    let cantidad = parseInt(prompt("Ingresa la cantidad de números a sumar:"));
    
    for(let i = 1; i <= cantidad; i++){
        sumar += i;
    }
    alert("Suma de los" + " primeros números: " + sumar);
}

function imprimirMul(){
    let limite = parseInt(prompt("Ingresa el límite de números a encontrar:"));
    let array = []

    for (let i = 2; i <= limite; i += 2) {
        array.push(i);
    }
    alert(`Los multiplos son: ${array.join(" - ")}`)
}