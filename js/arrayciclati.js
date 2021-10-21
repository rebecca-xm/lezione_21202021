let mioArr = ['Giorgio', 'Francesca', 256, false, ['uno', ['pippo', 'pluto'], 'tre']];

for (let nomeVariabile = 0; nomeVariabile < 20; nomeVariabile++)
{

    console.log(nomeVariabile);
}

/* for è la funzione che devo andare ad utilizzare
nel primo parametro inizializzo una variabile dandole il valore di 0
nel secondo metto una condizione che stabilisce la durata di questo ciclo 
nel terzo dichiaro di quanto si deve incrementare 
dopodiché parentesi {} per definire il blocco di codice
++ è un'abbreviazione -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment */

// secondo esempio

let nomi = ['Giorgio', 'Francesca', 256, false, 'Pippo', 'Pluto'];

for (let index = 0; index < nomi.lenght; index++)
{

    console.log(nomi[index]);
}

/* lenght ci restituisce la quantità di elementi all'interno dell'array, che in questo caso sono sei */

// terzo esempio

let nomi = ['Giorgio', 'Francesca', 256, false, 'Pippo', 'Pluto'];

for (let index = 0; index < nomi.lenght; index++)
{

    console.log((index + 1) + ": " + nomi[index]);
}

// console.log('fineciclo');

// OF

let nomi = ['Giorgio', 'Francesca', 256, false, 'Pippo', 'Pluto'];

for (let nome of nomi)
{

    console.log(nome);
}

/* inizializziamo una nuova variabile, in questo caso nome
in questo casò creerà un ciclo che dura sei volte, restituendo tutti i valori degli indici
*/

let nomi = ['Giorgio', 'Francesca', 256, false, 'Pippo', 'Pluto'];

for (let index in nomi)
{

    console.log(index);
}

/* in questo caso mi restituisce l'indice 
ricorda: index è solo un nome di variabile
 */