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
var Players = 10;
var Turn = 0;
var Round = -1;


function myFunction() {
  if(Turn>Players) {
       Round++;
       Turn=0;
  } else {
       Turn++;
  }
};

//alert("Pulse [tab] para iniciar el juego");

//if (keyIsPressed && keyCode === 9) {
//  alert("Bienvenido a La Economía. Puedes leer una breve introducción en este enlace https://bit.ly/2RDbStu"
       
//       ); 
//};

while(Round === -1) {
  if(Turn===0) {
    document.getElementById("text1").innerHTML = "Pulse [next] para iniciar el juego";
  } else if(Turn===1) {
    document.getElementById("text1").innerHTML = "Bienvenido a La Economía. Puedes leer una breve introducción en este enlace https://bit.ly/2RDbStu";
  }
  
}
