//Arrow Function


//Funcion facil

let dividir= numero => numero/2

console.log(dividir(4))

let sumar= (numeroA, numeroB) => (numeroA + numeroB)
console.log(sumar(5,10))

let tengoQueIrATrabajar= dia => {
    if(dia=="Sabado" || dia=="Domingo")
    return "Fin de semana no laburo"
    else{
        return "Si hay que ir a laburar"
    } 

}
console.log(tengoQueIrATrabajar("Sabado"))