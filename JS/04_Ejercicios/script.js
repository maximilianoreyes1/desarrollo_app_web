console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    // Tu código aquí
    let ahora = parseInt(prompt("Ingrese año actual: "));
    let fecha_nac = parseInt(prompt("Ingrese año de nacimiento: "));
    resultado = ahora - fecha_nac;
    alert("Edad: " + resultado);
    }
// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
function asignarValores() {
// Tu código aquí
    let var1 = parseInt(prompt("Ingrese un número: "));
    let var2 = var1;
    alert("El valor de var2 es el mismo que var1 \n" + "var1: " + var1 + "\nvar2: " + var2);
}
    
// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
// Muestra los resultados en un mensaje.
function realizarOperaciones() {
// Tu código aquí
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese un segundo número: "));
    let num3 = parseInt(prompt("Ingrese un tercer número: "));
    let operacion1 = num1 + num2 + num3
    let operacion2 = num1 - num3
    let operacion3 = num2 * num3
    let operacion4 = num1 / 120
    alert("Operación1: " + operacion1 + "\nOperación 2: " + operacion2 + "\nOperación 3: " + operacion3 + "\nOperacion 4: " + operacion4);
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
// Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
function manipularCadenas() {
// Tu código aquí
let direccion = prompt("Ingrese dirección:")
let n_casa = parseInt(prompt("Ingrese número de casa:"));
let mensaje = "Dirección: " + direccion + "\nNúmero de casa: " + n_casa;
alert(mensaje + "\n" + "Longitud del mensaje: " + mensaje.length + "\n" + "Antepenúltimo caracter: " + mensaje[mensaje.length - 3]);
}