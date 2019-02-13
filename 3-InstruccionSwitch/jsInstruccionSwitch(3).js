function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
    case "Febrero":
        alert("Tiene menos de 29 dias");
        break;
    default:
        alert("tiene más de 29 días");
}
	
	


}//FIN DE LA FUNCIÓN