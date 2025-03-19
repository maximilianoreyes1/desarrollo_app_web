function suma_indices(){
    let valores = [1,2,3,4,5,6,7]
    total_suma = valores[6] + valores[5] + valores[1]
    alert("Valores del array: " + valores.join(" ") + "\nSuma del primer, segundo y último valor: " + total_suma)
}

function producto_pares(){
    let valores = [2,4,6,7,10,12];
    let resultado = valores[0] * valores[1] * valores[2] * valores[4] * valores[5];

    alert("Lista de números: " + valores.join(" ") + "\nResultado: " + resultado)
}