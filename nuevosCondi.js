// if Ternario
let mayor= 4>10 ? "El 4 es mayor": "el 10 es mayor" ;
console.log(mayor)

let favAuto="FIAT"

let autos= favAuto=="Audi" ? "Vamos me voy a comprar mi auto favorito" : "Bueno, por lo menos es un auto! "

console.log(autos)

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ?  "Mountain Bike":"Aurora" ;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande)


//if SwitcH

let dia= "Miercoles"
switch(dia){
    case "Lunes":
        console.log("Hoy tengo Curso")
        break;
        case "Sabado":
            console.log("Hoy descanso")
            break;
            case "Domingo":
                console.log("Hoy juega River")
                break;
                default:
                console.log("Dia de coding")
                break;
}
