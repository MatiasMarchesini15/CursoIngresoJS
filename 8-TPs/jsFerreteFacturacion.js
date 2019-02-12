/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var num1,num2,num3,resul;
    num1=document.getElementById("PrecioUno").value;
    num2=document.getElementById("PrecioDos").value;
    num3=document.getElementById("PrecioTres").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    num3=parseInt(num3);
    resul=num1 + num2 + num3;
    alert(resul);

	
}
function Promedio () 
{var num1,num2,num3,resul;
    num1=document.getElementById("PrecioUno").value;
    num2=document.getElementById("PrecioDos").value;
    num3=document.getElementById("PrecioTres").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    num3=parseInt(num3);
    resul= (num1 + num2 + num3)/3; 
    alert(resul);
	
}
function PrecioFinal () 
{var num1,num2,num3,resul;
    num1=document.getElementById("PrecioUno").value;
    num2=document.getElementById("PrecioDos").value;
    num3=document.getElementById("PrecioTres").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    num3=parseInt(num3);
    resul= (num1 + num2 + num3)*0,21;
    alert(resul);
	
}