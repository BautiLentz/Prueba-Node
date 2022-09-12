
//MAP lee todos los arrays y hace la funcion que le pidas en este caso multiplicar x 2
let numeros=[12,13,14,15]

let metodoArray= numeros.map(function(unNumero){
return unNumero *2
})
//console.log(metodoArray)


//FILTER lee todos los arrays y pone solo los que cumplen la condicion

let personas=[18,17,21,24,15]

let pasarAlBoliche=personas.filter(function(edad){
    return edad >= 18
})
// console.log(pasarAlBoliche)

//REDUCE lo dice la palabra trata de reducir lo mayor posible 

let numeros2=[3,4,3]

let cuentaTotal=numeros2.reduce(function(acumuladora,numero){
    return acumuladora + numero
})
// console.log(cuentaTotal)

//FOREACH

let mes=["septimbre","Agosto","Noviembre"]

let cadaMes=mes.forEach(function(unMes,indice){
   // console.log(unMes)
  //  console.log(indice)
})

//Unificando


const misPerros=[{
    nombre:"Moro",
    edad: 12,
    raza: "Caniche",
    estado:"Ciego",
   
},
{
    nombre:"Tota",
    edad: 9,
    raza: "Labrador",
    estado:"operada",
},
{
    nombre:"Ron",
    edad: 13,
    raza: "Caniche",
    estado:"Bien,ceguera",
   
}
]


const tiposDeRaza=misPerros.map((misPerro)=>{
    if(misPerro.raza=="Caniche")
 return "Hola la raza de tu perro es " +  misPerro.raza
})
console.log(tiposDeRaza.toString())

const edadDeLosPerrosGrandes=misPerros.filter((edad)=>{
return edad.edad <10 
})
console.log(edadDeLosPerrosGrandes)




const listadoDePelis= misPerros.map((pelis)=>{
    return pelis.raza
})

console.log(listadoDePelis)