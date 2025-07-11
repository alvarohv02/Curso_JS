/* Comentario */
// Otro comentario

console.log("5")
console.log(5)
console.log(5 + 2)
console.log(5 - 2)
console.log(5 * 2)
console.log(5 / 2)

// Variables

var helloWorld = "¡Hola Mundo!" // Al ejecutar "se va a arriba y se puede acceder a ella incluso antes de ejecutarla"
console.log(helloWorld)

helloWorld = "Hello World!"
console.log(helloWorld)

let helloWorld2 = "¡Hola mundo 2!" // Solo funciona dentro del bloque de ejecución
console.log(helloWorld2)

const helloWorld3 = "¡Hola mundo 3!" // No se puede redefinir si son valores (excepto arrays, referencias, etc) y solo funciona dentro del bloque de ejecución
console.log(helloWorld3)

// Tipos de Datos

// String
let myName = "Ávaro"

// Números
let edad = 19

// Booleanos
let isStudent = true
let isProffesor = false

// Undefined

let undefinedValue = undefined
console.log(undefinedValue)

// Null
let nullValue = null

// Symbol
let mySymbol = Symbol("mysymbol")

// BigInt
let myBigInt = BigInt(1236547899874563211236547899874563321123456789)
let myBigInt2 = 1236547899874563211236547899874563321123456789n

console.log(typeof myName)
console.log(typeof edad)
console.log(typeof isStudent)
console.log(typeof isProffesor)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)

// Ejercicios 1:

// Escribe un comentario de 1 linea:

// Hola mundo

// Escribe un comentario de varias lineas:

/*
Hola
Mundo
*/

// Declara variables con valores asociados a todos los tipos de datos primitivos:

let miString = "Hola"
let miNumber = 11
let miBool = true
let miSymbol = Symbol("Hola")
let miBigInt = BigInt(122351654616516516543543543435543543434543513131131) //let miBigInt = 122351654616516516543543543435543543434543513131131n
let miUndefined = undefined
let miNull = null

// Imprime por consola el valor de todas las variables:

console.log(miString)
console.log(miNumber)
console.log(miBool)
console.log(miSymbol)
console.log(miBigInt)
console.log(miUndefined)
console.log(miNull)

// Imprimir por consola el tipo de todas las variables:

console.log(typeof miString)
console.log(typeof miNumber)
console.log(typeof miBool)
console.log(typeof miSymbol)
console.log(typeof miBigInt)
console.log(typeof miUndefined)
console.log(typeof miNull)

// Modifica el valor de todas las variables por otro del mismo tipo:

miString = "Hola2"
miNumber = 0
miBool = false
miSymbol = Symbol("Hola2")
miBigInt = 98745632123654789874563212365478987456321

// Modifica el valor de todas las variables por otro de distinto tipo:

miString = 1
miNumber = "Hola"
miBool = "Hola"
miSymbol = 2
miBigInt = "Hola"
miUndefined = null
miNull = undefined

// Declara constantes con valores asociados a cada tipo de datos primitivos

const newString = "Hola"
const newNum = 10
const newBool = true
const newSymbol = Symbol("Hola")
const newBigInt = 123456787656765456765456765456765676566567656776534678n
const newUndefined = undefined
const newNull = null