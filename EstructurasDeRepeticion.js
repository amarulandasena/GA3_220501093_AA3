/** Escribir un algoritmo que imprima 7 veces en pantalla un mensaje. */

// Creamos un ciclo que se repita la cantidad de veces que necesitamos inrpimir el mensaje.
for (let i = 0; i < 7; i++){
    console.log("Esto es un algoritmo sencillo")
}



/** Escribir un algortimo para sumar los primeros n números. */

// Ingresar la cantidad de números a sumar.
let numerosASumar = 7

// Crear una variable para acumular la suma.
let sumaNumeros = 0

//Creamos un ciclo para realizar la suma
for (let j = 1; j <= numerosASumar; j++){
    sumaNumeros += j
}
console.log("\nEl resultado de la suma es: " + sumaNumeros)



/** Calcular el factorial de un número */

// Ingresar el número factorial.
let numeroFactorial = 10

// Crear una variable para almacenar el factorial.
let resultadoFactorial = 1

//Crear el ciclo para calcular el factorial
let contador = 1
while (contador <= numeroFactorial){
    resultadoFactorial *= contador
    contador++
}
console.log("\nFactorial " + numeroFactorial + " = " + resultadoFactorial)

