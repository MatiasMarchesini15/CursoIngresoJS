function mostrar()
{
  var numero
  var suma
  var promedio
	var contador=0;
  var acumulador=0;
  while(contador<5){
    contador++;
    acumulador++;
    numero=prompt();
    numero=parseInt(numero);
    suma+numero;
  }
    while(numero===NaN){
      numero=prompt();
      numero=parseInt(numero);

    }

  promedio=suma/contador;



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
