let formulario={
    nombre: "Bautista",
    apellido: "Lentz",
    edad: 19,
    altura: 1.80,
    domicilio: "Belgrano, CABA"
}
//console.log(formulario)

let formularioJSON= JSON.stringify(formulario)
//console.log(formularioJSON)

let formularioDevueltaNormal=JSON.parse(formularioJSON)

//console.log(formularioDevueltaNormal)

//El pack JSON.stringify hace que todo se haga string para JSON.
//el pack JSON.parse hace que sea un objeto javascript de JSON.

let club='{"club":"river","ubicacion":"Nunez"}'
//let clubJSON= JSON.parse(club)
console.log(club)