
// chiedo il numero di chilometri che l'utente deve percorrere.

var chilometri_da_percorrere = prompt ('Quanti chilometri devi percorrere?')

// chiedo l'età dell'utente.

var eta_utente = prompt ('Quanti anni hai?')

// prezzo al chilometro

var prezzo_al_chilometro = 0.21;

// chilometri da percorrere moltiplicato per il prezzo del biglietto

var prezzo = chilometri_da_percorrere * prezzo_al_chilometro;

// utente minorenne sconto 20%.

var sconto_minorenne = 20;

// utente over65 sconto 40%;

var sconto_over65 = 40;

// calcolo prezzo biglietto minorenne.

var prezzo_minorenne = prezzo - (prezzo * sconto_minorenne / 100);

// calcolo prezzo biglietto over65.

var prezzo_over65 = prezzo - (prezzo * sconto_over65 / 100);



if (eta_utente < 18) {
    document.getElementById('biglietto').innerHTML = ('Prezzo Biglietto: ' + prezzo_minorenne + '€');
} else if (eta_utente > 65) {
    document.getElementById('biglietto').innerHTML = ('Prezzo Biglietto: ' + prezzo_over65 + '€');
} else {
    document.getElementById('biglietto').innerHTML = ('Il prezzo del biglietto è: ' + prezzo + '€');
}
