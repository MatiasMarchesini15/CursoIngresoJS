function mostrar()
{
  var importe,importe2,importe3,importe4,suma;
  importe=prompt("ingrese importe");
  importe2=prompt("ingrese importe");
  importe3=prompt("ingrese importe");
  importe4=prompt("ingrese importe");
  importe=parseInt(importe);
  importe2=parseInt(importe2);
  importe3=parseInt(importe3);
  importe4=parseInt(importe4);
  if (importe > importe2){
    if (importe > importe3){
      alert("El primer importe es más grande");
    }else{
      alert("El tercer importe es más grande")
      }
    }

}
