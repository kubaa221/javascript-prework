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
// Pobieranie ruchu gracza
var playerInput = prompt('Wybierz swój ruch! Wpisz 1 dla kamień, 2 dla papier, 3 dla nożyce:');
function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodzi o "kamień".');
        return 'kamień';
    }
}
console.log('Wpisana odpowiedź:', playerInput);

var playerMove;

// Instrukcja warunkowa przypisująca ruch gracza
if (playerInput === '1') {
    playerMove = 'kamień';
} else if (playerInput === '2') {
    playerMove = 'papier';
} else if (playerInput === '3') {
    playerMove = 'nożyce';
} else {
    playerMove = 'nieznany ruch';
    printMessage('Błędny wybór! Wpisz 1, 2 lub 3.');
}

// Wyświetlenie ruchu gracza
printMessage('Twój ruch: ' + playerMove);
function displayResult(argPlayerMove, argComputerMove) {
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrałeś!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrałeś!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrałeś!');
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else {
        printMessage('Przegrałeś :(');
    }

    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
