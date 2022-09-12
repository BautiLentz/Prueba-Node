let arreglo=["Bautista","Juan","Manuel","Gallardo","Marcelo"]
//               0         1       2         3         4     

console.log(arreglo.indexOf("Bautista"))

console.log(arreglo.length)


//IndexOf toma los INDICES

//Lenght toma los ELEMENTOS


console.log(arreglo.slice(1,4))
//SLICE seleciona lo que queres poner desde los indices!

let club= "River Plate el mas grande de todo la Argentina"
console.log(club.length)
console.log(club.indexOf('Plate'))
console.log(club.slice(0, 11))



console.log(club.split(" "))
//SLIPT convierte un string en un array 
 
console.log(club.replace("Argentina","Mundo"))
//Replace sirve para cambiar strings primero pones el string que queres 
//cambiar y luego pones el string que queres remplazar en este caso, remplaze
// Argentina por Mundo

