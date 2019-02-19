function mostrar()
{
    var amigos,cuenta,propina,suma,suma2,iva,pf;
    amigos=prompt("Ingrese cantidad de personas");
    amigos=parseInt(amigos);
    cuenta=prompt("Ingrese el valor de consumo");
    cuenta=parseInt(cuenta);
    propina=((cuenta*10)/100);
    suma=(cuenta+propina);
    iva=((suma*21)/100);
    suma2=(iva+suma);
    pf=(suma2/amigos);
    alert("El valor de la cuenta es " +cuenta+ " agregando el 10% de propina es "+ suma+ " y agregandole el iva es "+ suma2+ " entonces el precio final por persona es "+ pf );

}
