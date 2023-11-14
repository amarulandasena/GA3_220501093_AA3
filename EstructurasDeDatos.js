/** Crear un vector. */

var frutas = ["Banana", "Mango", "Piña", "Guayaba", "Uva"]

// Mostrar el vector en pantalla.
console.log("Frutas = " + frutas)

//Mostrar el tamaño del vector.
console.log("Tamaño vector = " + frutas.length)


/** Acceder a las posiciones de un vector */

var numeros = [10, 20, 30, 40, 50, 60, 70, 80]
console.log("\nTamaño vector de números = " + numeros.length)

// Acceder a varias posiciones del arreglo.
console.log("Posición 0 = " + numeros[0])
console.log("Posición 3 = " + numeros[3])
console.log("Última posición = " + numeros[numeros.length-1])



/** Imprimir la tabla del 5 */

// Generar la tabla y guardarla en un arreglo.
var tablaDelCinco = [ ]
for (let i = 1; i < 11; i++){
    tablaDelCinco.push(i * 5)                   // Push en un método que me permite agregar elementos al final del arreglo.
}

// Recorrer e imprimir el arreglo.
console.log("\n")
for(let i = 1; i <= tablaDelCinco.length; i++){
    console.log("5 * " + i + " = " + tablaDelCinco[i-1])
}



/** Matriz */

var alimentos = [["Banana", "Mango", "Piña", "Guayaba", "Uva"],
                    ["Arroz", "Azucar", "Sal", "Lentejas", "Frijoles"],
                    ["Platano", "Tomate", "Cebolla", "Pimentón", "Papa"],
                    ["Leche", "Queso", "Mantequilla", "Yogurth", "Mozarella"]]

// Mostrar en pantalla la matriz.
console.log(alimentos)


/** Registros */

var registros = [["Juan", "juan@sindato.com", 19, 362590],
                 ["Luis", "luis@sindato.com", 18, 400500],
                 ["Andrea", "andrea@sindato.com", 22, 526470],
                 ["Pedro", "pedro@sindato.com", 32, 758120],
                 ["Maria", "maria@sindato.com"], 26, 800450];

// Crear un ciclo anidado para imprimir el registro.
for (let i = 0; i < registros.length; i++){
    console.log("\nRegistro número " + (i+1) + " : ")

    for (let j = 0; j < registros[i].length; j++){
        console.log(registros[i][j])                    // Para acceder a cada posición del registro debo indicar la fila y la columna.
    }
}

