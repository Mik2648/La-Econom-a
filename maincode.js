    /* Intrucciones
  1.- Descripcion
    En el juego eres un accionista que comprar y vende acciones.
  2.- Objetivos
    Controlar mas de la mitad de las empresas principales.
  3.- Conceptos
    Accion:
      Una centesima parte de una empresa.
    Empresa:
      Conjunto de acciones
      Empresas:
        Principales:
          Apol
          Door
          Amazonas
          Kneecomic
          Instituto Buracratico de las Malvinas
        Empresas Continentales:
          Piñera bossa nova
          Techo para Argentina
          Grupo Omega
          Naziswagen
          Hebrewbank
        Empresas Nacionales
          ArgentinaCapuccinos
          Lavadoras Aeronauticas Neumaticas
          Dumbo
          Hijo de Piñera Didi
          Copac
    Divisa:
      Tipo de Moneda.
      Divisas:
          Bolivares
          Nairas
          Rublos
          Wones Norcoreano
          Soles Peruano
        Divisa Referencia: Boingsten
  4.- Dinámica de juego:
    4.1.-Cambios de Valor:
      Cada vuelta se genera de manera aleatoria el cambio de valor de divisas.
    4.2.-Estructura del Turno:
      Al princio de cada turno se genera el cambio de valor de las acciones.
      Luego el jugador en turno realiza compra y venta de acciones.
        4.2.1.-Comercio:
          El jugador en turno puede ofrecer tratos a los otros jugadores y hacer compraventa a la bolsa

*/
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
var Round = 0;



alert("Pulse [tab] para iniciar el juego");

if (keyIsPressed && keyCode === 9) {
  alert("Bienvenido a La Economía. Puedes leer una breve introducción en este enlace https://raw.githubusercontent.com/Mik2648/La-Econom-a/master/Brief%20Introduction"
       
       ); 
};
