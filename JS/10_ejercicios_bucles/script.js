function multiplicar(){
    let count = 0
    let n = prompt("Ingrese un número")
    let array = []

    for(let i = 1; i <= 10; i++){
        count = n * i
        array.push(count)
    }
    alert(count)
}