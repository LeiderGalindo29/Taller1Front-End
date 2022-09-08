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

triangulos()