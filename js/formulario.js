
/* MODAL ACEPTAR TERMINO 
let modal=document.getElementById("ejer6");

//Acceder ventana modal
let vodal444=document.getElementById("ventanaModal5");

//Acceder al botón Cerrar de la ventana modal
let ceral444=document.querySelector(".cerrarModal5");

modal.addEventListener("click",()=>{
    vodal444.style.display="block";
})

ceral444.addEventListener("click",()=>{
    vodal444.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==vodal444){
    vodal444.style.display="none"; 
}
})*/


let btnmodal21=document.getElementById("terminos");

//Acceder ventana modal
let venl=document.getElementById("ventanaModal");

//Acceder al botón Cerrar de la ventana modal
let cel=document.querySelector(".cerrarModal");

let verificar=document.querySelector(".fas fa-times-circle")

let botonSend=document.querySelector(".boton-send")

btnmodal21.addEventListener("click",()=>{
    venmodal.style.display="block";
})

venl.addEventListener("click",()=>{
    venmodal.style.display="none"; 
	verificar.style.display="none"
})

botonSend.addEventListener("click",()=>{
    venmodal.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal){
    venmodal.style.display="none"; 
}
})

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');



const expresiones = {
	nombre: /^[a-zA-Z0-9\_\-]{1,30}$/, // Letras y espacios, pueden llevar acentos.
	password: /^[A-Za-z0-9\_\-]{4,20}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@+[misena]+.[edu]+.[c]+[o]$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.,¿
	documento : /^.{5,12}$/
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false,
	documento : false,
	fecha : false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "documento":
			validarCampo(expresiones.documento, e.target, 'documento');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "fecha":
			const fnacimi = document.getElementById('fecha').value
			const saveDate = new Date()
			const year = saveDate.getFullYear()
			const naciA = parseInt(String(fnacimi).substring(0,4));
			const edad = year-naciA

			console.log(edad)
			if (year > 1930 && edad > 17 && edad < 100) {
				document.getElementById(`grupo__fecha`).classList.remove('formulario__grupo-incorrecto');
				document.getElementById(`grupo__fecha`).classList.add('formulario__grupo-correcto');
				document.getElementById(`grupo__fecha i`).classList.add('fa-check-circle');
				document.querySelector(`#grupo__fecha i`).classList.remove('fa-times-circle');
				document.querySelector(`#grupo__fecha .formulario__input-error`).classList.remove('formulario__input-error-activo');
				campos[fecha] = true;
			}
			else{
				document.getElementById(`grupo__fecha`).classList.add('formulario__grupo-incorrecto');
				document.getElementById(`grupo__fecha`).classList.remove('formulario__grupo-correcto');
				//document.getElementById(`grupo__fecha i`).classList.add('fa-times-circle');
				//document.querySelector(`#grupo__fecha i`).classList.remove('fa-check-circle');
				document.querySelector(`#grupo__fecha .formulario__input-error`).classList.add('formulario__input-error-activo');
				campos[fecha] = false;
			}

		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

