/** Ordenamiento de cadenas de texto */

// Crear un arreglo de datos númericos.
var numeros = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 11, 13, 15, 17, 12, 14, 16, 18, 20, 22, 24, 26, 21, 23, 25]

// Crear un arreglo de datos String.
var cadenas = ['Bogotá', 'Valle', 'Santander', 'Antioquia', 'Caldas', 'Atlántico', 'Casanare']

// Imprimir el arreglo original.
console.log(numeros.join(' , '))        // Join me concatena los números como si fuesen strings.

// Ordenar el arreglo de menor a mayor e imprimir.
numeros.sort()                          // Ordena los elementos como si fueran cadenas.
console.log(numeros.join(' , '))        // Notar que solo ordena el primer digito.

cadenas.sort()
console.log("\nCadenas ordenado: " + cadenas.join(' , '))


// Ordenar el arreglo de manera descendente.
// 1. lo debemos ordenar de manera ascendente.
let nombres = ['Carlos', 'Marina', 'Felipe', 'Andrea', 'Juan', 'Camila', 'Bayron', 'Ana']
nombres.sort()
// 2. Aplicamos el método reverse, para invertir el orden del arreglo.
nombres.reverse()

// se puede hacer en una sola línea de código.
// nombres.sort().reverse().

console.log("\nNombres ordenado de mayor a menor: " + nombres.join(' , '))

// Buscar un elemento.
const busqueda = numeros.find(element => element > 10)      // Primer elemento mayor que 10.
console.log(busqueda)

// Filtrar los elementos del arreglo.
const filtro = numeros.filter((element) => element > 10)    // Me retorna todos los valores que cumplen con el criterio.
console.log(filtro)


