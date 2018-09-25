/*var numero1;
var numero2 = 10.5;
var resultado = numero1*numero2;
var nombre = "Cristhian Rodriguez";
numero1 = 5;
numero1*=numero2;
var arreglo = ["as","bs","cs","ds","es"];
console.log("hola mundo",numero1,numero2,nombre);

console.log(iva(100));

var titulos = document.getElementsByTagName('h1');
console.log(titulos);
var claseTexto = document.getElementsByClassName('texto');
console.log(claseTexto)
var sede = document.getElementById('sede');
console.log(sede);*/
function iva(precio,iva){
return precio*(iva/100);
}

function calcular_iva(){
	var precio = parseInt(document.getElementById('precio').value);
	var porcentaje_iva = parseInt(document.getElementById('iva').value);
	var resultado = iva(precio,porcentaje_iva);
	var salida = document.getElementById('resultado');
	var texto = document.createTextNode(resultado);
	salida.value = resultado;
	console.log(precio);
	console.log(porcentaje_iva);
	console.log(resultado);
}