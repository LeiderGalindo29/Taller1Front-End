

function longitud() {
    const boton = document.getElementById("calcular")
    boton.addEventListener('click', ()=>{
    const texts = document.getElementById("texto").value    
    const resultado = texts.length;
    alert(resultado);
})
}
longitud()

/* ---------- */
const boton = document.getElementById("color");
boton.addEventListener('mousemove', ()=>
    {
        boton.classList.replace("color","colorf")
    }
)

boton.addEventListener('mouseleave', ()=>
    {
        boton.classList.replace("colorf","color")
    }
)


/*------*/
const boton1 = document.getElementById("colort");
boton1.addEventListener('click', ()=>
    {
        boton1.classList.toggle("colort")
    }
)

/* ------------*/

const boton2 = document.getElementById('boton-id');

boton2.onmouseup = function(){
    console.log("Estas soltandolo")
}
boton2.onmousedown = function(){
    console.log("Estas oprimiendo")
}


/*-------*/

const boton33 = document.getElementById("boton-11")
boton33.addEventListener('mousemove', ()=>
    {
        boton33.classList.replace("boton-cl","boton-11")
    }
)
boton33.addEventListener('mouseleave', ()=>
    {
        boton33.classList.replace("boton-11","boton-cl")
    }
)

    boton33.onmouseup = function(){
        console.log("Estas soltandolo")
    }
    boton33.onmousedown = function(){
        console.log("Estas oprimiendo")
    }

    boton33.addEventListener('click', ()=>
    {
        boton33.classList.toggle("boton-11")
    }
)


