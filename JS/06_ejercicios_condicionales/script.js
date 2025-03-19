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