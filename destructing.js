
//destructurar ARRAYS
let colores= ["blanco","rojo","negro"]

let[manto,sagrado]=colores; 
console.log(manto)
console.log(sagrado)

//destructurar Objetos literarios

let persona= {
nombre:"Bautista",
apellido:"Lentz",
profesion:"Programador",
}
let{apellido,profesion}=persona
console.log(apellido)
console.log(profesion)