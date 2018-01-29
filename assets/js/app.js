function luhn() {
  var id = document.getElementById('cardNumber').value;
  id = id.split('').reverse().map(Number);  

  for (var i = 0; i < id.length; i++) {
    if (i % 2 === 1) { 
      id[i] *= 2;
      if (id[i] > 9) {
        id[i] -= 9;
      }    
    }
  } 
  var sum = eval(id.join('+'));
  if (sum % 10 === 0 && id.length === 16) {
    alert('Tu número de tarjeta es válido');
  } else {
    alert('Favor revisa nuevamente tu número de tarjeta, no es válido');
  }
}
 
