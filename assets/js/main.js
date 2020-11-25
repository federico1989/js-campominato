// Il computer deve generare 16 numeri casuali tra 1 e 100.
function getRandomNumber(min, max){
  random =  Math.floor(Math.random() * (max + 1 + min)) + min;
  return random;
}
var numberPc = [];
// I numeri non possono essere duplicati

while (numberPc.length < 16) {
  var numberRandom = getRandomNumber(1, 100);
  if(numberPc.indexOf(numberRandom) == -1){
    numberPc.push(numberRandom);
  }
  console.log(numberRandom);
}
console.log(numberPc);


// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var numberUser = [];

// L’utente non può inserire più volte lo stesso numero.

while (numberUser.length < 84) {
  var getNumber = Number(prompt("Inserisci un numero da 1 a 100"));
  var numberForbidden = (getNumber < 1 || getNumber > 100);
  if(numberForbidden){
    alert("Mi dispiace, non è un numero valido");
  } else if (numberPc.indexOf(getNumber) != -1){
    alert("Mi dispiace, hai colpito una bomba 💣 totalizzando " + numberUser.length + " punti");
  } else if (numberUser.indexOf(getNumber) != -1) {
    alert("Numero già selezionato. Inserisci un altro numero 🔢");
  } else if (numberUser.indexOf(getNumber) == -1){
    numberUser.push(getNumber);
  }
  console.log(getNumber);
}
console.log(numberUser);


if (numberUser.length == 84) {
  alert("Complimenti, hai vinto 🏆")
}
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.


// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
