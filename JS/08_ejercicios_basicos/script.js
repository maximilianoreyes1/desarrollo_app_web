function calc_num(){
    let numero = prompt("Ingrese un número")

    if(numero % 2 == 0){
        alert("El número es par")
    } else { 
        alert("El número es impar")
    }
}

function calc_IMC(){
    let peso = prompt("Ingrese un peso (en kg)")
    let altura = prompt("Igrese una altura (en metros)")
    let imc = peso / (altura * altura) 

    if(imc <= 18.5){
        alert("Bajo peso")
    } else if(imc <= 24.9 && imc >= 18.5) {
        alert("Peso normal")
    } else {
        alert("Sobrepeso")
    }
}

function calc_promedio(){
    let nota1 = parseFloat(prompt("Ingrese la nota 1"))
    let nota2 = parseFloat(prompt("Ingrese la nota 2"))
    let nota3 = parseFloat(prompt("Ingrese la nota 3"))
    let promedio = (nota1 + nota2 + nota3) / 3

    if(promedio >= 4.0){
        alert("Aprobado")
    } else {
        alert("Reprobado")
    }
}