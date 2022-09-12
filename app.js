let funcionSaludo= require("./Carpeta prueba/xd.js")

console.log(funcionSaludo("Juan"))

let pais=require("./objetos.js")

function identidad(){
    return "Hola, mi pais es " + pais.pais + " y vivo en " + pais.capital
}
console.log(identidad())

