
function Perfiles(nombre,apellido,vocacion,nacionalidad,domicilio,edad,dni){
    this.nombre= nombre;
    this.apellido= apellido;
    this.vocacion=vocacion;
    this.nacionalidad=nacionalidad;
    this.domicilio=domicilio;
    this.edad=edad;
    this.dni=dni;
}

let persona1=new Perfiles("Juan","Carubin","Estudiante","Argentino","CABA",19,45076890)

let persona2=new Perfiles("Bautista",'Lentz',"Programacion",'Argentino',"CABA",20,44678907)
console.log(persona1)
console.log(persona2)


let nombres={
nombre1:"Martina",
nombre2:"Pedro",
nombre3:"Juanpa"
}

nombres.nombre1="Pepe"
console.log(nombres)