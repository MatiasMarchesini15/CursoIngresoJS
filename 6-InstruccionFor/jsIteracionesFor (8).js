function mostrar()
{
var y,c=0;
    y=prompt("Ingrese numero");
    y=parseInt(y);
    for(x=1;x!=y+1;x++){
        if(y%x==0 || x==1)
        { 
        c++;
    }
    }
    if(c==2){
      document.write("Es un Número primo");
    }else{
    document.write("NO");
    }




}//FIN DE LA FUNCIÓN