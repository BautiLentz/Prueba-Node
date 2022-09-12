let pais= {
    pais: "Argentina",
    poblacion: 400000,
    capital: "Buenos Aires"

}

module.exports=pais


let curso={
    curso: 32,
    docentes: ["Juan","Ale",'Xime'],
    horario: "de 19 a 21 hs",
    recordatorio: function(){
        return "el horario del curso es "+ this.horario
    }
}
console.log(curso.recordatorio())



//FUNCIONES CONSTRUCTORAS GODDDDDD

function Auto(marca,precio,ano,km){
    this.marca= marca;
    this.precio=precio;
    this.ano= ano;
    this.km= km;
}

let audi= new Auto("Audi","$15000",2019,"45000Km")

let bmw= new Auto("BMW","$35000",2022,"0Km")

console.log(audi)
console.log(bmw)



