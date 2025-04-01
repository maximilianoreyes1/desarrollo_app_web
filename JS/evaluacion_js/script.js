function sumar_n(){
    let n = parseInt(prompt("Ingrese un número:"));
    let fin = parseInt(prompt("ingresa el número final"));
    let pares = [];
    let cantidad = parseInt(prompt(""))
    
    for(i = 0; i < n; i++){
        if ( i % 2 === 0) {
            pares.push(i);
            if (pares.length === cantidad) break;
        }
    }



    alert("")
}

function sumar_n2(){
    let n = parseInt(prompt("Ingrese un número:"));
    let fin = parseInt(prompt("ingresa el número final"));
    let pares = [];
    
    for(i = 0; i < n; i++){
        if ( i % 2 === 0) {
            pares.push(I)
        }
    }
    alert(`Números pares encontrados: ${pares.join(', ')}\nSuma total: ${suma}`);
}
    