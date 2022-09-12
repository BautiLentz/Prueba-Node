//CALLBACK

let sumar=(numero1,numero2) => numero1 + numero2;

let restar=(numero1,numero2) => numero1 - numero2;

let dividir=(numero1,numero2) => numero1 / numero2;

let multiplicar=(numero1,numero2)=> numero1 * numero2;

let calculadora=(numero1,numero2,operacion) =>operacion(numero1,numero2)

console.log(calculadora(3,2,multiplicar))



//Otro ejemplo

let nombreCompleto=function(nombre,apellido){
    return nombre +" " + apellido
}

let saludo=function(nombre,apellido,operacion){
    return "Hola " + operacion(nombre,apellido)+ "!"
}
console.log(saludo("Bautista", "Lentz", nombreCompleto))



