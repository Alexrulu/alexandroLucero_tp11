const prompt = require("prompt-sync")({ sigint: true });

console.log("Este es el consultor de Aterrizaje");

let velocidad = parseInt(prompt("Indique su velocidad en km/h: "));
let altura = parseInt(prompt("Indique su altura en metros: "));

let velocidadValida = velocidad >= 268 && velocidad <= 278;

let alturaValida = altura >= 150 && altura <= 300;

if (velocidadValida && alturaValida) {
    console.log("Permiso aceptado, puede aterrizar");
} else {
    console.log("Permiso denegado, usted debe tener una velocidad entre 268 y 278 km/h, y una altura entre 150 y 300 metros");
}
