const prompt = require("prompt-sync")({ sigint: true })

console.log("Este es un traductor experimental de Español a Ingles, por ahora las unicas palabras que podemos traducir son: perro, gato, puerta, ventana, y mesa")

let palabra = prompt("Escriba la palabra a traducir: ").toLowerCase()

switch (palabra) {
    case "perro":
        console.log(`La palabra "perro" traducida al ingles es: dog`)
        break;
    case "gato":
        console.log(`La palabra "gato" traducida al ingles es: cat`)
        break;
    case "puerta":
        console.log(`La palabra "puerta" traducida al ingles es: door`)
        break;
    case "ventana":
        console.log(`La palabra "ventana" traducida al ingles es: window`)
        break;
    case "mesa":
        console.log(`La palabra "mesa" traducida al ingles es: table`)
        break;
    default:
        console.log("La palabra ingresada esta en desarrollo");
        break
}