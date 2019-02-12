function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num=(Math.floor(Math.random()*(11-1)+1));
	console.log (num); 
	 
	 			if(num>=9){ 
				alert("exelente");
				}else{
				if(num>=4){
				alert("aprobado");
				}else{ 
				alert("vamos la proxima se puede");}
				}

}//FIN DE LA FUNCIÓN