function imprimirNum(){
    let numero = 1;

    while (numero <=5){
        alert(numero);
        numero++;
    }
}

function imprimirNumN(){
    let contador = 10;

    while (contador >=1){
        alert(contador);
        contador--;
    }
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