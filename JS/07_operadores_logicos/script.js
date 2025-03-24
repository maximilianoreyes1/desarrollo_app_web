function aceptar_edad_term(){
    let edad = prompt("Ingrese su edad:")
    let aceptaTerminos = prompt('¿Acepta los terminos? escriba "true" o "false"')

    if(edad >= 18 && aceptaTerminos == "true"){
        alert("Acceso permitido")
    } else {
        alert("Acceso denegado")
    }
}

function calc_descuento(){
    let edad = prompt("Ingrese su edad:")
    let esEstudiante = prompt("¿Es estudiante? 'true' o 'false'")

    if(edad >= 60 || esEstudiante == "true"){
        alert("Descuento aplicado")
    } else {
        alert("No tienes descuento")
    }
}

function encender_maquina(){
    let energiaSuficiente = prompt('¿La máquina tiene suficiente energía? Escriba "true" o "false"')
    let interruptorEncendido = prompt('¿El interruptor está encendido? Escriba "true" o "false"')

    if(energiaSuficiente == "true" && interruptorEncendido == "true"){
        alert("Máquina encendida")
    } else {
        alert("No se puede encender la máquina")
    }
}

function verificar_acceso(){
    let bloqueado = prompt('¿El usuario está bloqueado? Escriba "true" o "false"')
    let tieneCredenciales = prompt('¿El usuario tiene credenciales válidas? Escriba "true" o "false"')

    if(bloqueado == "true" || tieneCredenciales != "true"){
        alert("Acceso denegado")
    } else {
        alert("Acceso permitido")
    }
}