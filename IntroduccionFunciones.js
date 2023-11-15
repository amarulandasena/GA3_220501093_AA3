/** Crear una función para organizar datos numéricos */

// Crear el arreglo.
var numeros = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 11, 13, 15, 17, 19, 12, 14, 16, 18, 20]
console.log(numeros.join(' , '))

// Función para ordenar arreglos númericos de menor a mayor.
function ordenarArreglos (){

    let menor = 0
    for(let i = 0; i < numeros.length; i++){
        for(let j = i+1; j < numeros.length+1; j++){
            if(numeros[i] > numeros[j] ){
                menor = numeros[j]
                numeros[j] = numeros[i]
                numeros[i] = menor
            }
        }  
    }

    console.log(numeros.join(' , '))
}

// llamar a la función.
ordenarArreglos.apply(this, numeros)            // El método apply me permite pasar un arreglo como parámetro.

// Función para ordenar de mayor a menor.
var ordenarArreglos2 = () => {

    let mayor = 0
    for(let i = 0; i < numeros.length; i++){
        for(let j = i+1; j < numeros.length+1; j++){
            if(numeros[i] < numeros[j]){
                mayor = numeros[j]
                numeros[j] = numeros[i]
                numeros[i] = mayor
            }
        }
    }

    console.log(numeros.join(' , '))
}

// Llamar la segunda función.
ordenarArreglos2.apply(this, numeros)

// Ordenar un registro.
var datosAlumnos = [{nombre: 'Juan', apellido: 'Perez', edad: 20},
                    {nombre: 'Ana', apellido: 'Lopez', edad: 23},
                    {nombre: 'Carlos', apellido: 'Marin', edad: 22},
                    {nombre: 'Lucia', apellido: 'Gutierrez', edad: 21}]

datosAlumnos.sort((alumno1, alumno2) =>{                   // JS me permite pasar funciones como parámetros.
    return alumno1.edad - alumno2.edad
})

console.log('\n')
console.log(datosAlumnos)