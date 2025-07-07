function registroCompras(){
    compras = []
    compras.push("Pan", "Leche", "Huevos")
    alert(`Lista de compras: ${compras.join(" - ")}`)
}

function quitarCompras(){
    compras = []
    compras.push("Pan", "Leche", "Huevos")
    compras.pop()
    alert(`Lista de compras: ${compras.join(" - ")}`)
}

function 