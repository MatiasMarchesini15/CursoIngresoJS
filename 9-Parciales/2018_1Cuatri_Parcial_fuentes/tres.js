function mostrar()
{var precio,descuento,pf;
	precio=prompt("precio")
    descuento=prompt("descuento")
    precio=parseInt(precio);
    descuento=parseInt(descuento);
    pf=precio-(precio*descuento/100);
	document.getElementById("elPrecioFinal").value=pf;

}
