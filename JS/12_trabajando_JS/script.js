function registroParticipantes(){
    let participantes = []
    let nombre = ""

    while(nombre !== "salir"){
        nombre = prompt("Ingrese el nombre de un participante o ingrese 'salir' para terminar.")
        if (nombre !== "salir") {
            participantes.push(nombre);
        }
    }
    if(participantes.length > 5){
        alert("¡Tienes más de 5 participantes!")
    }
    alert(`Total de participantes: ${participantes.length} \nLista: ${participantes.join(", ")}`)
}

function cajaRegistradora(){
    let productos = ['pan', 'peras', 'mantequilla', 'bebida']
    let mensaje = ""

    for(i = 1; i <= 5; i++){
        mensaje += `Cliente ${i}: `
        if (productos.length > 0) {
            let vendido = productos.pop();
            mensaje += `Producto vendido: ${vendido}\n`;
        } else {
            mensaje += "Sin stock\n";
        }
    alert(mensaje)
    }
}