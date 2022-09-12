function Formulario(nombre,apellido,vocacion,nacionalidad,domicilio,edad,dni){
    this.nombre= nombre;
    this.apellido= apellido;
    this.vocacion=vocacion;
    this.nacionalidad=nacionalidad;
    this.domicilio=domicilio;
    this.edad=edad
    this.dni=dni

}

let Paciente1= new Formulario("Maria","Lentz","Docente","Argentina","Belgrano,Caba",35,45013675)
let Paciente2= new Formulario("Bautista","Lentz","Programador","Argentina","Belgrano,Caba",45,45013675)
//console.log(Paciente1)
//console.log(Paciente2)


let curso= (edad,fecha,cumple) =>{
 if(edad >=18 && cumple==02/09 && fecha==02/09){
        return "Feliz cumple podes pasar al boliche y tenes 50mil pesos de comision"
    }
   else if(edad >=18 && fecha== 02/09){
        return "Puede pasar al boliche"
    }
    else if(fecha != 02/09){
return "Hoy no hay Bochile"
    }
    else return "No tenes edad suficiente"
        
    
}
console.log(curso(20,02/09,10/09))





