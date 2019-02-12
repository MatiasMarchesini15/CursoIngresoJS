function mostrar()
{
//tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;
        if(edad<13)
        {
        alert("sos un niño");
        }
            else
            {
                if(edad<=17)
                {
                alert("sos adolescente");          
                }
                else
                {
                alert("sos mayor de edad");
                }
            }
        



}//FIN DE LA FUNCIÓN