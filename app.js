
	do {
		var tarjeta = prompt("Por favor, ingrese su número de tarjeta");
	} while (tarjeta.length == 0); // que repita la pregunta hasta que ingrese algo

var separar = tarjeta.split(''); // separando numero entregado en tarjeta
var invertir = separar.reverse (); // inviertiendo números

var resultado = 0;
for (var i = 1; i < invertir.length; i++){
		if (i %  2 === 0){
			if((invertir[i] * 2) >= 10){
				result += 
			}
		}

}
