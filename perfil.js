const prompt = require("prompt-sync")({ sigint: true })

let usuario = prompt("Hola, Indique su nombre: ")

console.log(`Hola ${usuario}, por favor indique su perfil`)
console.log("1. Administrador")
console.log("2. Asistente")
console.log("3. Invitado")

while (true) {
    let perfil = parseInt(prompt("Mi perfil es: "))
    
    if(perfil===1){
        console.log("Usted tiene todos los privilegios de uso del sistema.")
        break
    }else if(perfil===2){
        console.log("Usted solo tiene permisos de registrar, modificar y consultar datos.")
        break
    }else if(perfil===3){
        console.log("Usted solo tiene permisos de consultar datos.")
        break
    }else{
        console.log("Debe especificar un valor valido (1, 2, 3)")
    }
}