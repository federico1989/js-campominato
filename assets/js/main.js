// Il computer deve generare 16 numeri casuali tra 1 e 100.
function getRandomNumber(min, max){
  random =  Math.floor(Math.random() * (max + 1 + min)) + min;
  return random;
}
var numeriPc = [];

while (numeriPc.lenght < 16) {
  var numberRandom = getRandomNumber(1, 100);
  if(numeriPc.indexOf(numberRandom) == -1){
    numeriPc.push(numberRandom);
  }
  console.log(numberRandom);
}

console.log(numeriPc);

// I numeri non possono essere duplicati

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

// L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
