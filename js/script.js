

// MAIL 


// definisco lista di chi può accedere alla mail con un array
// chiedo all'utente di inserire la sua mail tramite promp
// verifico che l'utente possa o meno accedere assegnando un valore numerico alla lista tramite un ciclo
// stampo messaggio in base al risultato tramite innerhtml


// 1 creo array con lista mail

const mailist = [
    "nomefittizio1@mail.com",
    "nomefittizio2@mail.com",
    "nomefittizio3@mail.com",
    "nomefittizio4@mail.com",
    "nomefittizio5@mail.com",
    "nomefittizio6@mail.com",
    "nomefittizio7@mail.com",
    "nomefittizio8@mail.com",
    "nomefittizio9@mail.com",
    "nomefittizio10@mail.com",
    "nomefittizio11@mail.com",
    "nomefittizio12@mail.com",
    "nomefittizio13@mail.com",
    "nomefittizio14@mail.com",
    "nomefittizio15@mail.com",
    "nomefittizio16@mail.com",
    "nomefittizio17@mail.com",
    "nomefittizio18@mail.com",
    "nomefittizio19@mail.com",
    "nomefittizio20@mail.com"
]

// console.log(mailist);

const mailutente = prompt ("Inserisci email");
let accesso = 0;
let messaggioMail= "";

// assegno valore numerico alla lista mail con il ciclo for

for (let i = 0; i < mailist.length; i++) {
     // console.log(mailist[6]);
    if (mailist[i] === mailutente) {
         accesso = 1;
         // console.log("accesso consentito");
    }
}

if (accesso == 1) {
    // console.log("accesso consentito");
    messaggioMail = "Accesso consentito";
}else {
    // console.log("accesso non consentito");
    messaggioMail = "Accesso non consentito";
}

document.getElementById("messaggioMail").innerHTML = messaggioMail;

// DADI 

// chiedo all'utente un numero da 1 a 6
// estraggo tramite condizioni un numero random 
// confronto e decreto vincitore

const numeroUtente = Math.floor(Math.random() *6) +1;
const numeroPc = Math.floor(Math.random() *6) +1;
let messaggioDadi = "";

// console.log(numeroUtente);
// console.log(numeroPc);


if (numeroUtente > numeroPc) {
    // console.log("Hai vinto!");
    messaggioDadi = `Hai vinto, il tuo numero è ${numeroUtente}, il computer ha giocato il numero ${numeroPc}`;

}else if (numeroUtente < numeroPc) {
    // console.log("Hai perso!");
    messaggioDadi = `Hai perso,il tuo numero è ${numeroUtente}, il computer ha giocato il numero ${numeroPc}`;
}else if (numeroUtente === numeroPc) {
    // console.log("Pareggio");
    messaggioDadi = `Pareggio, il tuo numero è ${numeroUtente}, il computer ha giocato il tuo stesso numero`;
}

document.getElementById("messaggioDadi").innerHTML = messaggioDadi;