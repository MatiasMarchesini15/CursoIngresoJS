function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
    case "Febrero":
        alert("tiene 28 días");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert("Tiene 30 días");
        break;
    default:
        alert("tiene 31 días");
}
	




}//FIN DE LA FUNCIÓN