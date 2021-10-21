let nomi = ['Giorgio', 'Francesca', 256, false, 'Pippo', 'Pluto'];

function pippo(nome, cognome) {
    
    let fullName = nome + cognome;

    return fullName;

}
// il valore che deve contenere non è altro che il concatenamento di nome e cognome

let getName = pippo("Rebecca", " Mollica");

console.log(getName);

// questa funzione prevede due valori, che sono nome e cognome
// dopodiché delimito il codice che deve seguire con {}
// la funzione può eseguire una parte di programma e basta o può restituire un risultato

console.log(pippo("Michele", " Amato"));

// ho richiamato la stessa funzione passando dei parametri differenti