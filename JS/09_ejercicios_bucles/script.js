function imprimirNum(){
    let numero = 1;
    array = []

    while (numero <=5){
        array.push(numero)
        numero++;
    }
    alert(`los números son: ${array.join(" - ")}`)
}

function imprimirNumN(){
    let contador = 10;
    let array = []

    while (contador >=1){
        array.push(contador);
        contador--;
    }
    alert(`los números son: ${array.join(" - ")}`)
}

function sumarNum(){
    let sumar = 0
    for(let i = 1; i <= 5; i++){
        sumar += i;
    }
    alert("Suma de los primeros 5 números" + sumar)
}

function imprimirMul(){
    for (let i = 2; i <= 10; i += 2) {
        alert(i);
    }    
}