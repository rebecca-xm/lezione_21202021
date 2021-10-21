// SINTASSI

let         nomeVariabile           =           'valore'

/* VARIABILI PRIMITIVE */

// Stringhe
let nome = "Rebecca";
let cognome = "Mollica";
let paragrafo = `Utilizziamo il metodo TEMPLATE STRING
                solo quando ci serve, come ad esempio:
                voglio inserire il contenuto delle
                variabili all'interno di una stringa 
                con il segnaposto ${nomeVariabile}
                \n
                o per poter inserire del testo su più
                righe per renderne più comprensibile
                il contenuto come ad esempio:
                <header>
                    <div class="menu">
                        <a href"/index.html>Vai alla Home</a>
                    </div>
                </header>`;

// Numeri
let unNumero = 13;
let age = 48;
let quantiGrammi = 10.18;
let quantiGradi = -5;

// Booleani
let portaGliOcchiali = true;
let isFull = false;

// Indefinite ovvero la variabile non è stata dichiarata o non ha ricevuto un valore
let myName;
let mySurname = undefined;

// Nessun valore
let myAge = null;

/* Differenza tra undefined e null */

let secondoNome = "Francesca";
    // ho un secondo nome ed è Francesca

let secondoNome = null;
    // non ho un secondo nome

let secondoNome = undefined;
    // posso o non posso avere un secondo nome, o non lo so
    // se c'è o no, o si sceglie di non dirlo è irrilevante o non sono affari tuoi

/* VARIABILI OBJECT */

// Array

// Indice(index)
// o chiave(key)
//                0           1        2     3        il primo elemento di un array ha indice 0

let mioArr = ['Giorgio', 'Francesca', 256, false]; /* può avere al suo interno una sola tipologia di dato oppure differenti, 
                                                    inclusi gli array */
let cognome = []; // array inizializzato vuoto

console.log( mioArr[2] ); // in questo caso la console stamperà 256