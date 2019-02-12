function mostrar()
{var num1,num2,num3;
    num1=prompt("Numero Uno")
    num2=prompt("Numero Dos")

    if(num1==num2){
    alert(num1+num2);
    }else{ num1=parseInt(num1)
        num2=parseInt(num2)
        if(num1>num2){
            num3=num1 - num2
            alert(num3);
        }else{ num3=num1+num2
    alert(num3);
        if(num3>10){
            alert("la suma es" + num3 +" y supero el 10")
        }}
    }

}
