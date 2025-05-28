function calcularPromedios(){
    let notas = []
    let nota = ""
    let suma = 0

    for(i = 1; i <= 5; i++){
        nota = parseInt(prompt(`Ingrese la nota numero ${i}: `));
        notas.push(nota);
        suma += nota;
    }
    let promedio = suma / notas.length;
    alert(`Su promedio es ${promedio}`);
    
    if(promedio >= 4){
        alert("¡Usted está aprobado!")
    } else {
        alert("Usted esta reprobado")
    }
}

function separarNumeros(){
    num = "";
    numeros = [];
    pares = [];
    impares = [];

    for(i = 1; i <= 6; i++){
        num = parseInt(prompt(`Ingrese el ${i}° número: `));
        numeros.push(num)

        if (num % 2 == 0){
            pares.push(num)
        } else {
            impares.push(num)
        }
    }
    alert(`Lista de números pares: ${pares.join(" - ")} \nLista de números impares: ${impares.join(" - ")}`)
}