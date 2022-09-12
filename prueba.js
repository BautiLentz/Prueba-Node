//JSON Y JS

const fs = require('fs')

const interaccionDeJSyJSON=JSON.parse(fs.readFileSync("./pack.json"))

interaccionDeJSyJSON.push(
    {
       'nombre':"Juan",
        'apellido':"Roberto",
        'Domicilio':"Mendoza 2987",
        'TiempoEnElGym': "2 meses"
        
    }
)
//console.log(interaccionDeJSyJSON)


//TERMINAL

const node= process.argv
const node2=node[2]

switch(node2){
    case "Listar":
    console.log("Hola estoy en listar") 
    break;

    case "Agregar":
    console.log("Hola soy Agregar")
    break;

    default:
    console.log("no existis")
    break;
}
//console.log(node2)
