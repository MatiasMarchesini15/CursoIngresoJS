function mostrar()
{

var sexo = prompt("ingrese f ó m .");
  while(sexo!="f" && sexo!="m"){
    alert("error");
    document.getElementById('Sexo').value="error";
    break;
  }
  if(sexo=="f"){
    document.getElementById('Sexo').value="Femenino";
      }else{

}  if(sexo=="m"){
    document.getElementById('Sexo').value="Masculino";

}




}//FIN DE LA FUNCIÓN
