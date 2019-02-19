
function mostrar()
{
    var mascota,mascota2,peso1,peso2,suma;
    mascota=prompt("Ingrese nombre de la mascota");
    mascota2=prompt("Ingrese nombre de la mascota");
    peso1=prompt("Ingrese peso de la mascota");
    peso2=prompt("Ingrese peso de la mascota");
    peso1=parseInt(peso1);
    peso2=parseInt(peso2);
    suma=peso1+peso2;
    alert("tenes dos mascotas "+ mascota+ " y "+ mascota2+ ", que pesan "+ peso1+  " y "+ peso2+ " kilos, la suma de los kilos es "+ suma);

}
