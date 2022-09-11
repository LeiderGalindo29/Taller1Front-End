/*Acceder al botón para abrir el modal */

let btnmodal=document.getElementById("ejer1");

//Acceder ventana modal
let venmodal=document.getElementById("ventanaModal");

//Acceder al botón Cerrar de la ventana modal
let cermodal=document.querySelector(".cerrarModal");

btnmodal.addEventListener("click",()=>{
    venmodal.style.display="block";
})

cermodal.addEventListener("click",()=>{
    venmodal.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal){
    venmodal.style.display="none"; 
}
})


function longitud() {
    const boton = document.getElementById("lo-btn")
    boton.addEventListener('click', ()=>{
    const texts = document.getElementById("inp-id").value    
    const resultado = texts.length;
    alert(`Su grupo de caracter de ${texts} tiene ${resultado} caracteres`);
})
}
longitud()


function mayusculas() {
    const boton = document.getElementById("my-btn")
    boton.addEventListener('click', ()=>{
    const texts = document.getElementById("inp-id").value    
    const resultado = texts.toUpperCase();
    alert(`Su grupo de caracter de ${texts} a mayuscula es ${resultado}`);
})
}
mayusculas()

function minusculas() {
    const boton = document.getElementById("mn-btn")
    boton.addEventListener('click', ()=>{
    const texts = document.getElementById("inp-id").value    
    const resultado = texts.toLowerCase();
    alert(`Su grupo de caracter de ${texts} a minuscula es ${resultado}`);
})
}
minusculas()


function primer() {
    const boton = document.getElementById("pc-btn")
    boton.addEventListener('click', ()=>{
    const texts = document.getElementById("inp-id").value    
    const resultado = texts.charAt();
    alert(`Su grupo de caracter de ${texts} su primer caracter es ${resultado}`);
})
}
primer()


/* MEDIR GRADOS */
/* EJERCICIO 2 */
let btnmodal1=document.getElementById("ejer2");

//Acceder ventana modal
let venmodal1=document.getElementById("ventanaModal1");

//Acceder al botón Cerrar de la ventana modal
let cermodal1=document.querySelector(".cerrarModal1");

btnmodal1.addEventListener("click",()=>{
    venmodal1.style.display="block";
})

cermodal1.addEventListener("click",()=>{
    venmodal1.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal1){
    venmodal1.style.display="none"; 
}
})

function calcular() {
    const calc = document.getElementById('calcular');
    calc.addEventListener('click', ()=>{
        const primSelec = document.getElementById("val-all").value
        const segSelec = document.getElementById("all-selc").value
        const firstCamp = document.getElementById("fir-dc").value
        //const secondCamp = document.getElementById("sec-dc").value
        //primSelec=parseInt(primSelec)
        //segSelec=parseInt(segSelec)
        //firstCamp=parseFloat(firstCamp)
        //secondCamp=parseFloat(secondCamp)

        if (primSelec == 1 && segSelec == 5) {
            const resu = (parseFloat(firstCamp)-32) * (5/9);
            alert(`los ${firstCamp} Fahrenheit a Celcius es de ${resu.toFixed(3)}`)
        }
        else if(primSelec == 2 && segSelec == 4){
            const resu = (parseFloat(firstCamp)*1.8) + 32;
            alert(`los ${firstCamp} Celcius a Fahrenheit es de ${resu.toFixed(3)}`)
        }
        else if(primSelec == 1 && segSelec == 6){
            const resu = (parseFloat(firstCamp)-32)*(5/9) + 273.15;
            alert(`los ${firstCamp} Fahrenheit a Kelvin es de ${resu.toFixed(3)}`)
        }

        else if(primSelec == 2 && segSelec == 6){
            const resu = (parseFloat(firstCamp)-32)*(5/9) + 273.15;
            alert(`los ${firstCamp} Celcius a Kelvin es de ${resu.toFixed(3)}`)
        }
        else if (primSelec == 3 && segSelec == 5) {
            const resu = (parseFloat(firstCamp)-273.15);
            alert(`los ${firstCamp} Kelvin a Celcius es de ${resu.toFixed(3)}`)
        }
        else if(primSelec == 3 && segSelec == 4){
            const resu = (parseFloat(firstCamp)-273.15)*(9/5) + 32;
            alert(`los ${firstCamp} Kelvin a Fahrenheit es de ${resu.toFixed(3)}`)
        }
        else{
            alert("Corriga el convertidor")
        }
})
}
calcular()


/* TIPOS DE TRIANGULOS */

let btnmodal2=document.getElementById("ejer3");

//Acceder ventana modal
let venmodal2=document.getElementById("ventanaModal2");

//Acceder al botón Cerrar de la ventana modal
let cermodal2=document.querySelector(".cerrarModal2");

btnmodal2.addEventListener("click",()=>{
    venmodal2.style.display="block";
})

cermodal2.addEventListener("click",()=>{
    venmodal2.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal2){
    venmodal2.style.display="none"; 
}
})

function triangulos() {
    const bot = document.getElementById("tri")
    bot.addEventListener('click', ()=>{
        const firstValue = document.getElementById("tri-1").value
        const secondValue = document.getElementById("tri-2").value
        const thirdValue = document.getElementById("tri-3").value
        
        if(firstValue==secondValue && firstValue ==thirdValue){
            alert(`Los lados del triangulo ${firstValue},${secondValue},${thirdValue}, es un triangulo equilatero `)
        }

        else if(firstValue==secondValue || secondValue==thirdValue || firstValue==thirdValue){
            alert(`Los lados del triangulo ${firstValue},${secondValue},${thirdValue},  es un triangulo isosceles `)
        }
        
        else{
            alert(`Los lados del triangulo ${firstValue},${secondValue},${thirdValue}, es un triangulo escaleno `)
        }  
        })
}

triangulos();


/* Actividad del Instructor */

let btnmodal3=document.getElementById("ejer4");

//Acceder ventana modal
let venmodal3=document.getElementById("ventanaModal3");

//Acceder al botón Cerrar de la ventana modal
let cermodal3=document.querySelector(".cerrarModal3");

btnmodal3.addEventListener("click",()=>{
    venmodal3.style.display="block";
})

cermodal3.addEventListener("click",()=>{
    venmodal3.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal3){
    venmodal3.style.display="none"; 
}
})

function instructor() {
    const ejecutar = document.getElementById("showes-2")
    ejecutar.addEventListener('click', () => {
        const firstSelec = document.getElementById("nombre-1").value
        const secondSelec = document.getElementById("cont-ape").value
        const thirdSelec = document.getElementById("orient-ins").value
        
        if (firstSelec == 1 && secondSelec == 10 && thirdSelec== 15) {
            alert(`Su respuesta es correcta`)
        }else if (firstSelec == 2 && secondSelec == 9 && thirdSelec== 16) {
            alert(`Su respuesta es correcta`)
        }
        else if (firstSelec == 3 && secondSelec == 8 && thirdSelec== 17) {
            alert(`Su respuesta es correcta`)
        }
        else if (firstSelec == 4 && secondSelec == 7 && thirdSelec== 14) {
            alert(`Su respuesta es correcta`)
        }
        else if (firstSelec == 5 && secondSelec == 11 && thirdSelec== 13) {
            alert(`Su respuesta es correcta`)
        }    
        else{
            alert(`Su respuesta es falsa`)
        }
    })

}
instructor();


/*Actividad de las figuras*/

let btnmodal4=document.getElementById("ejer5");

//Acceder ventana modal
let venmodal4=document.getElementById("ventanaModal4");

//Acceder al botón Cerrar de la ventana modal
let cermodal4=document.querySelector(".cerrarModal4");

btnmodal4.addEventListener("click",()=>{
    venmodal4.style.display="block";
})

cermodal4.addEventListener("click",()=>{
    venmodal4.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal4){
    venmodal4.style.display="none"; 
}
})

function circulo() {
const images = document.getElementById("cirid");
const modal = document.querySelector(".modal44");
const close = document.querySelector(".cerrarModalc");
const modalImg = document.querySelector(".modalImg");

  images.addEventListener("click", () => {
    modal.classList.add("appear");

    close.addEventListener("click", () => {
      modal.classList.remove("appear");
    });
  });


const btncl = document.getElementById("espe")
btncl.addEventListener("click", ()=>{
    const radio = document.getElementById("area-cir").value
	const res = Math.PI*(parseFloat(radio)**2);
    alert(`El area del circulo es de ${res.toFixed(3)}`)
})

const btnpr = document.getElementById("per-cal")
btnpr.addEventListener("click", ()=>{
    const perimetro = document.getElementById("area-cir2").value
    const per = 2.0*(parseFloat(perimetro)*Math.PI)
    alert(`El perimetro del circulo es de ${per.toFixed(3)}`)
})

}

circulo()

/* MODAL Y OPEN DE MODAL CUADRADO*/
/*Actividad de las figuras*/
 function cuadrado() {
const images1 = document.getElementById("cuaid");
const modal1 = document.querySelector(".modal55");
const close1 = document.querySelector(".cerrarModalcm");

  images1.addEventListener("click", () => {
    modal1.classList.add("appear1");

    close1.addEventListener("click", () => {
      modal1.classList.remove("appear1");
    });
  });


const btnclc = document.getElementById("espe1")
btnclc.addEventListener("click", ()=>{
    const aria = document.getElementById("area-cir1").value
    const res = parseFloat(aria)* parseFloat(aria);
    alert(`El area del cuadrado es de ${res.toFixed(3)}`)
})

const btnprc = document.getElementById("per-cal")
btnprc.addEventListener("click", ()=>{
    const perimetro = document.getElementById("area-cir2").value
    const per = 2.0*(parseFloat(perimetro)*Math.PI)
    alert(`El area del cuadrado es de ${per.toFixed(3)}`)
})
 }

 cuadrado();


 function rectangulo() {
    const images3 = document.getElementById("recid");
    const modal3 = document.querySelector(".modal6");
    const close3 = document.querySelector(".cerrarModalre");
    
    images3.addEventListener("click", () => {
        modal3.classList.add("appear2");
    
        close3.addEventListener("click", () => {
            modal3.classList.remove("appear2");
        });
      });
    
    
    const btnclc = document.getElementById("espe1")
    btnclc.addEventListener("click", ()=>{
        const aria = document.getElementById("area-cir1").value
        const res = parseFloat(aria)* parseFloat(aria);
        alert(`El area del circulo es de ${res.toFixed(3)}`)
    })
    
    const btnprc = document.getElementById("per-cal")
    btnprc.addEventListener("click", ()=>{
        const perimetro = document.getElementById("area-cir2").value
        const per = 2.0*(parseFloat(perimetro)*Math.PI)
        alert(`El perimetro del circulo es de ${per.toFixed(3)}`)
    })
     }
    
     cuadrado();
/*btnmodalc.addEventListener("click",()=>{
    venmodalc.style.display="none";
})
cermodalc.addEventListener("click",()=>{
    venmodalc.style.display="none"; 
})
window.addEventListener("click",(e)=>{
if(e.target==venmodalc){
    venmodalc.style.display="none"; 
}
})

const images = document.querySelectorAll('shapes-1d img');
const modalP = document.querySelector("modalc")


*/


