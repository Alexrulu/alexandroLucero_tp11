const prompt = require("prompt-sync")({ sigint: true })

console.log("Las operaciones disponibles son:")
console.log("1. Sumar")
console.log("2. Restar")
console.log("3. Multiplicar")
console.log("4. Dividir")

let num1, num2, resultado, operacion //llamamos a las variables fuera del switch para que dentro del switch cada una sea hijos directos del case o bloque.

while (true) { //bucle para que se repita la pregunta en caso de elegir una opcion invalida, el bucle se repetira hasta que el numero que elijamos corresponda a una operacion.
    operacion = parseInt(prompt("Indique que operacion desea realizar: "))
    if (operacion >= 1 && operacion <=4) {
        break
    }else{
        console.log("Opcion invalida, por favor elija una opcion entre el 1 y el 4.")
    }
}

switch (operacion) {
    case 1: //sumar
        console.log("Usted eligio Sumar")
        num1 = parseInt(prompt("Escriba el primer numero: "))
        num2 = parseInt(prompt("Escriba el segundo numero: "))
        resultado = num1 + num2
        console.log(`El resultado de la suma entre ${num1} y ${num2} es: ${resultado}`)
        break;
    case 2: //restar
        console.log("Usted eligio Restar")
        num1 = parseInt(prompt("Escriba el primer numero: "))
        num2 = parseInt(prompt("Escriba el segundo numero: "))
        resultado = num1 - num2
        console.log(`El resultado de la resta entre ${num1} y ${num2} es: ${resultado}`)
        break;
    case 3: //multiplicar
        console.log("Usted eligio Multiplicar")
        num1 = parseInt(prompt("Escriba el primer numero: "))
        num2 = parseInt(prompt("Escriba el segundo numero: "))
        resultado = num1 * num2
        console.log(`El resultado de la multiplicacion entre ${num1} y ${num2} es: ${resultado}`)
        break;
    case 4://dividir
        console.log("Usted eligio Dividir")
        num1 = parseInt(prompt("Escriba el primer numero (numerador): "))
        num2 = parseInt(prompt("Escriba el segundo numero (denominador): "))
        if(num2 !== 0){ //!-- indica que si num2 es diferente a 0...
            resultado = num1 / num2
            console.log(`El resultado de la division entre ${num1} y ${num2} es: ${resultado}`)
        }else{ 
            console.log("No se puede dividir entre 0")
        }
        break;
    default:
        console.log("Opcion invalida")
        break;
}
