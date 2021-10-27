// DADI 

// chiedo all'utente un numero da 1 a 6
// estraggo tramite condizioni un numero random 
// confronto e decreto vincitore

const numeroUtente = Math.floor(Math.random() *6) +1;
const numeroPc = Math.floor(Math.random() *6) +1;
let messaggio = "";

// console.log(numeroUtente);
// console.log(numeroPc);


if (numeroUtente > numeroPc) {
    // console.log("Hai vinto!");
    messaggio = `Hai vinto, il tuo numero è ${numeroUtente}, il computer ha giocato il numero ${numeroPc}`;

}else if (numeroUtente < numeroPc) {
    // console.log("Hai perso!");
    messaggio = `Hai perso,il tuo numero è ${numeroUtente}, il computer ha giocato il numero ${numeroPc}`;
}else if (numeroUtente === numeroPc) {
    // console.log("Pareggio");
    messaggio = `Pareggio, il tuo numero è ${numeroUtente}, il computer ha giocato il tuo stesso numero`;
}

document.getElementById("messaggio").innerHTML = messaggio;