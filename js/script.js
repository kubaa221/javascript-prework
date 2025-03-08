// Losowanie liczby od 1 do 3
var randomNumber = Math.floor(Math.random() * 3) + 1;
console.log('Wylosowana liczba:', randomNumber);

var computerMove; // Zmienna przechowująca ruch komputera

// Instrukcja warunkowa przypisująca ruch
if (randomNumber === 1) {
    computerMove = 'kamień';
} else if (randomNumber === 2) {
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}

// Wyświetlenie wylosowanego ruchu
printMessage('Komputer zagrał: ' + computerMove);
