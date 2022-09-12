let fechaActual= new Date();
console.log(fechaActual.toUTCString())
console.log(fechaActual.getFullYear())
console.log(fechaActual.getDate())
console.log(fechaActual.getMonth())

//Otro ejemplo de como usarlo

let anio= fechaActual.getFullYear()
let mes= fechaActual.getMonth()
let dia=fechaActual.getDate()

console.log("Hoy es "+dia + " del "+ (mes+1)+ " del "+ anio)

//Acordemos que el mes esta mal ya que enero empieza en 0 y diciembre es 11 