// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
var question = prompt("Scegli il tipo di difficoltà: FACILE, MEDIO o DIFFICILE").toUpperCase();
var x;
var y;
switch (question) {
  case "FACILE":
   x = 100;
   y = 84
    break;
  case "MEDIO":
    x = 80;
    y = 68
  break;
  case "DIFFICILE":
    x = 50;
    y = 34;
  break;
  default:
    alert("Inserire una difficoltà elencata");
    break;
}
alert("Hai scelto il livello " + question)
// Il computer deve generare 16 numeri casuali tra 1 e 100.
function getRandomNumber(min, max){
  random =  Math.floor(Math.random() * (max + 1 + min)) + min;
  return random;
}
var numberPc = [];
// I numeri non possono essere duplicati

while (numberPc.length < 16) {
  var numberRandom = getRandomNumber(1, x);
  if(numberPc.indexOf(numberRandom) == -1){
    numberPc.push(numberRandom);
  }
  console.log(numberRandom);
}
console.log(numberPc);


// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var numberUser = [];

// L’utente non può inserire più volte lo stesso numero.

while (numberUser.length < y) {
  var getNumber = Number(prompt("Inserisci un numero da 1 a " + x));
  var numberForbidden = (getNumber < 1 || getNumber > x);
  if(numberForbidden){
    alert("Mi dispiace, non è un numero valido");
  } else if (numberPc.indexOf(getNumber) != -1){
    alert("Mi dispiace, hai colpito una bomba 💣 totalizzando " + numberUser.length + " punti");
    break;
  } else if (numberUser.indexOf(getNumber) != -1) {
    alert("Numero già selezionato. Inserisci un altro numero 🔢");
  } else if (numberUser.indexOf(getNumber) == -1){
    numberUser.push(getNumber);
    }
    console.log(getNumber);
  }

console.log(numberUser);


if (numberUser.length == y) {
  alert("Complimenti, hai vinto 🏆")
}
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.


// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
