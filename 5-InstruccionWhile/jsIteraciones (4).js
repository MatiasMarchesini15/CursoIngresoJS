function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	  while(numero>9 || numero<0){
    alert("error");
    break;
	}
	document.getElementById("Numero").value=numero;


}//FIN DE LA FUNCIÓN
