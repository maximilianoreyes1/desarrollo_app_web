function multiplicar(){
    let count = 0
    let n = parseInt(prompt("Ingrese un número"))
    let array = []

    for(let i = 1; i <= 10; i++){
        count = n * i
        array.push(count)
    }
    alert(`los números son: ${array.join(" - ")}`)
}

function sumarN(){
    let n = parseInt(prompt("¿Cuántos números desea sumar?"))
    let suma = 0
    
    for (let i = 0; i < n; i++) {
        let numero = parseFloat(prompt("Ingresa un número:"))
        suma += numero;
    }
    alert("La suma total es: " + suma)
}

function mostrarPares(){
    let inicio = parseInt(prompt("Ingresa el número inicial:"))
    let fin = parseInt(prompt("Ingresa el número final:"))
    let array = []
    
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            array.push(i)
        }
    }
    alert(`los números pares son: ${array.join(" - ")}`)
}
