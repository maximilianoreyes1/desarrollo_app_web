function calcular_temp(){
    let temperatura = prompt("ingrese temperatura:")
    if (temperatura <= 0){
        alert("Hace frio")
    } else if(temperatura >= 0 && temperatura <= 25){
        alert("La temperatura es agradable")
    } else {
        alert("Hace calor")
    }
}

function user_password(){
    let nombreUsuario = prompt ("Ingrese usuario:");
    let contraseña = prompt ("Ingrese contraseña");

    if (nombreUsuario === "usuario123" && contraseña === "secreto"){
        alert("Acceso concedido")
    } else {
        alert("Acceso denegado")
    }
}

function val_num(){
    let numero = prompt("ingrese un número:")
    if (numero <= -1){
        alert("Número negativo")
    } else if(numero == 0){
        alert("El número es cero")
    } else {
        alert("El número es positivo")
    }
}

function calc_punt(){
    let puntuacion = prompt("Ingrese puntuación")
    if (puntuacion >= 90){
        alert("Excelente")
    } else if(puntuacion >= 70 && puntuacion <= 89){
        alert("Buen trabajo")
    } else {
        alert("Nesecitas mejorar")
    }
}