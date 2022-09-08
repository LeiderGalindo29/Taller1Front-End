
/*let array = [];
 
for(let i=1;i<=10;i++){
    array.push(i);
}
 
document.write(array);
*/




let cantidad = prompt("Cuantos meses quiere digitar?")
cantidad = parseInt(cantidad)

let meses = []

for (let i = 0; i < cantidad ; i++) {
    let mes = prompt(`Digite el nombre del mes ${i}`)
    meses.push(mes)
    console.log(meses)
}

meses.forEach(cantidad => {
        console.log(cantidad,[])
    });



/*var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.write(meses[0]+"<br>");
document.write(meses[1]+"<br>");
document.write(meses[2]+"<br>");
document.write(meses[3]+"<br>");
document.write(meses[4]+"<br>");
document.write(meses[5]+"<br>");
document.write(meses[6]+"<br>");
document.write(meses[7]+"<br>");
document.write(meses[8]+"<br>");
document.write(meses[9]+"<br>");
document.write(meses[10]+"<br>");
document.write(meses[11]+"<br>");*/