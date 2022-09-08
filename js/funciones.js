//declaracion
/*
let edad = prompt("Digite su edad");
edad=parseInt(edad)
function Edad(){
      if(edad >= 18){
            console.log("Usted puede ingresar");
      }else if(edad <= 18  && edad > 1){
            console.log("Usted no puede ingresar");
      }else if(edad <= 0){
            console.log("Ingrese bien los datos");
      }
}
Edad();
*/
//expresion
/*
let edad = prompt("Digite su edad");
edad=parseInt(edad)
let edades = function Edad(){
      if(edad >= 18){
            console.log("Usted puede ingresar");
      }else if(edad <= 18  && edad > 1){
            console.log("Usted no puede ingresar");
      }else if(edad <= 0){
            console.log("Ingrese bien los datos");
      }
}
edades();
*/

//anonima
/*
let edad = prompt("Digite su edad");
edad=parseInt(edad)
let edades = function(){
      if(edad >= 18){
            console.log("Usted puede ingresar");
      }else if(edad <= 18  && edad > 1){
            console.log("Usted no puede ingresar");
      }else if(edad <= 0){
            console.log("Ingrese bien los datos");
      }
}
edades();*/

//flecha

let edad = prompt("Digite su edad");
edad=parseInt(edad)
let edades = ()=>{
      if(edad >= 18){
            console.log("Usted puede ingresar");
      }else if(edad <= 18 && edad > 1){
            console.log("Usted no puede ingresar");
      }else if(edad <= 0){
            console.log("Ingrese bien los datos");
      }
}
edades();