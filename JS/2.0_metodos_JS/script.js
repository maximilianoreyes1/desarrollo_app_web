
//ejercicio 1
const resultado = document.getElementById("resultado");
function registroCompras(){
    let elemento = document.getElementById("lista").value;
    let item = document.createElement("li");
    item.innerText = elemento;
    resultado.appendChild(item);
}

//ejercicio 2
const resultado2 = document.getElementById("resultado2");
function registroCompras2(){
    let elemento2 = document.getElementById("lista2").value;
    let item = document.createElement("li");
    item.innerText = elemento2;
    resultado2.appendChild(item);
}

function quitarCompras(){
    const lista2 = document.getElementById("resultado2");
    if (lista2.lastChild) {
        lista2.removeChild(lista2.lastChild);
    }
}

//ejercicio 3
function agregarColores(){
    colores = ["Rojo", "Azul"]
    colores.unshift("Amarillo")
    alert(`Lista de colores: ${colores.join(" - ")}`)
}

//ejercicio 4
function quitarColores(){
    colores = ["Rojo", "Azul"]
    colores.unshift("Amarillo")
    colores.shift()
    alert(`Lista de colores: ${colores.join(" - ")}`)
}

//ejercicio 5
function combMetodos(){
    numeros = [10, 20, 30]
    numeros.push(40)
    numeros.shift()
    numeros.unshift(5)
    numeros.pop()
    alert(`Lista de números: ${numeros.join(" - ")}`)
}

//ejercicio 6
function elemInverso(){
    orden = []
    orden.unshift(1);
    orden.unshift(2);
    orden.unshift(3);
    alert(`Orden inverso de los números ${orden.join(" - ")}`)
}

//ejercicio 7
function historialMensajes(){
    historial = []
    historial.push("Hola","Mundo","Adios")
    historial.pop()
    alert(`Historial de mensajes: ${historial.join(" - ")}`)
}

//ejercicio 8
function colaAtencion(){
    cola = ["Cliente1", "Cliente2", "Cliente3"]
    cola.shift()
    cola.push("Cliente4")
    alert(`Cola de atención al cliente: ${cola.join(" - ")}`)
}

//ejercicio 9
function reordNombres(){
    nombres = ["Pedro", "Juan", "Luis"]
    nombres.pop()
    nombres.unshift("Mateo")
    nombres.push("Ana")
    alert(`Lista de nombres: ${nombres.join(" - ")}`)
}

//ejercicio 10
function pilasColas(){
    pila = []
    pila.push("Pantalones", "Poleras", "Polerones")
    pila.pop()
    pila.pop()

    cola = []
    cola.push("Pera", "Naranja", "Manzana")
    cola.shift()
    cola.shift()
    alert(`Pila: ${pila.join(" - ")}\nCola: ${cola.join(" - ")}`)
}

//ejercicio 11
function semanaLaboral(){
    dias = ["Lunes", "Miercoles", "Jueves"]
    dias.shift()
    dias.unshift("Lunes", "Martes")
    dias.push("Viernes")
    alert(`Semana laboral: ${dias.join(" - ")}`)
}

//ejercicio 12
function registroPersonas(){
    personas = ["Carlos", "María", "Luis", "Ana", "Sofía"]
    personas.shift()
    personas.pop()
    personas.pop()
    personas.unshift("Pedro")
    personas.push("Camila")
    alert(`Registro de personas: ${personas.join(" - ")}`)
}

//ejercicio 13
function listaTareas(){
    tareas = ["Comer", "Estudiar", "Dormir", "Jugar", "Ver TV", "Navegar"]
    tareas.pop()
    tareas.pop()
    tareas.pop()
    tareas.pop()
    tareas.push("Lavar la ropa", "Organizar escritorio")
    alert(`Lista de tareas: ${tareas.join(" - ")}`)
}