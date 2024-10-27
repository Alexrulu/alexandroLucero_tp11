const prompt = require("prompt-sync")({ sigint: true })

let pagoMes = parseInt(prompt("Indique cuanto paga por mes la tarifa electrica: "))
while (isNaN(pagoMes) || pagoMes < 0) {
    console.log("Por favor, ingrese un número válido para el pago mensual.")
    pagoMes = parseInt(prompt("Indique cuanto paga por mes la tarifa eléctrica: "))
}
let consumoKWH = parseInt(prompt("Indique cuantos kilovatios por hora (kw/h) consume por mes: "))
while (isNaN(consumoKWH) || consumoKWH < 0) {
    console.log("Por favor, ingrese un número válido para el consumo de kw/h.")
    consumoKWH = parseInt(prompt("Indique cuanto paga por mes la tarifa eléctrica: "))
}

let pagoAumentado = pagoMes * 1.20

let respuesta = (consumoKWH >= 300) ? `Debido a que su hogar tuvo un consumo de ${consumoKWH}kw/h, en base al ajuste
tarifario (hogares con consumo mayor a 300kwh por mes tendrán un
aumento del 20%), cumplimos con informarle que se ha ajustado el total a
pagar, que será de $${pagoAumentado}` : "Usted seguira pagando el mismo monto"

console.log(respuesta)