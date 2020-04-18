//empresas
var ePs = [1000,950,950,850,900];
var eCs = [500,100,300,450,700];
var eNs = [200,250,50,10,20];
//divisas
var Boingsten = 1;
var Bolivares = Boingsten*10;
var Nairas = Boingsten*5;
var Wones = Boingsten*3;
var Soles = Boingsten*1;
//HUD
var Players = 0;
var Turn = 0;
var Round = -1;




//alert("Pulse [tab] para iniciar el juego");

//if (keyIsPressed && keyCode === 9) {
//  alert("Bienvenido a La Economía. Puedes leer una breve introducción en este enlace https://bit.ly/2RDbStu"
       
//       ); 
//};

if(Round === -1) {
  if(turn===0) {
    document.getElementById("text1").innerHTML = "Pulse [next] para iniciar el juego";
  }
}
