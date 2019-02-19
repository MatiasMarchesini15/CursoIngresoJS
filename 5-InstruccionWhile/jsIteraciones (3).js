function mostrar()
{   
    var intentos=0
    var clave="utn750"
    var clave = prompt("ingrese el número clave.");
    while(clave!="utn750"){
        alert("clave equivocada.");
        clave=prompt("ingrese el numero clave.");
        intentos++;
    if (intentos==3){
        alert("3 intentos fallidos, fin de la ejecucion.");
        break;
    }
    }
    alert("clave aceptada");
    
    


}//FIN DE LA FUNCIÓN
