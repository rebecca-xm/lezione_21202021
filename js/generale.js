// Indici         0           1        2      3             4

let mioArr = ['Giorgio', 'Francesca', 256, false, ['uno', 'due', 'tre']];

//    0      1      2
// ['uno', 'due', 'tre']

console.log(mioArr[4]); // per adesso sono sull'indice 4

console.log(mioArr[4][1]); /*  in questo modo la console mi restituisce 
                            la posizione 1 (='due') dell'array selezionato*/


//                0           1        2     3                    4          
let mioArr = ['Giorgio', 'Francesca', 256, false, ['uno', ['pippo', 'pluto'], 'tre']]; // array nidificato
console.log(mioArr[4][1][0]); // entro nell'oggetto 4, poi 1, infine prendo il valore 0 (=pippo)