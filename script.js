const hangManWordList = [
    "Programmering", 
    "Stockholm", 
    "Studenter", 
    "Javascript", 
    "Afterwork"
];

/* a function to generate a random hangman word from a list of words */
let hangManWord = [];
function randomWord(wordList) {
    let randomNumber;

    do {
        randomNumber = Math.floor((Math.random() * 10) + 1);
    } while (randomNumber !== 1 && randomNumber !== 2 && randomNumber !== 3 && randomNumber !== 4 && randomNumber !== 5);
    
    return hangManWord = wordList[randomNumber - 1];
}

randomWord(hangManWordList);
console.log(hangManWord);

/* the random generated hangman word changed into a list of letters */
const hangManLetters = [];
for (let i = 0; i < hangManWord.length; i++) {
    hangManLetters.push(hangManWord[i]);
}

/* all letters replaced with underscore */
const hangManBlank = [];
for (let i = 0; i < hangManLetters.length; i++) {
    hangManBlank[i] = "_";
}

/* all letters changed to lowercase letters */
const lowerCaseWord = [];
for (let i = 0; i < hangManLetters.length; i++) {
    lowerCaseWord[i] = hangManLetters[i].toLowerCase();
}

/* hangman game loop */
let playing = true;
let lives = 5;
let wrongGuessMade = [];    
do {
    /* prompt guess loop */
    let letterGuess = prompt(`      
    ${hangManBlank.toString().replace(/,/g, " ")}

    Lives left: ${lives}
    Guesses made: ${wrongGuessMade.toString().replace(/,/g, ", ")}
    `);

    /* if player presses cancel game turned off */
    if (letterGuess === null) {
        alert("You have canceled the game");
        break;
    }

    /* guess letter changed to lowercase letter */
    let lowerCaseLetterGuess = letterGuess.toLowerCase();

    /* lowercase string to ASCII conversion a-z ASCII code 97-122 */
    let asciiConversion = letterGuess.charCodeAt(0);
    console.log(asciiConversion);
    let moreThanTwoLetters = letterGuess.charCodeAt(1);
    console.log(moreThanTwoLetters);

    /* if guess is different from a legitimate guess go again */
    let correctAscii;
    if (asciiConversion > 97 && asciiConversion < 122 && isNaN(moreThanTwoLetters)) {
        correctAscii = true;
    } else {
        correctAscii = false;
    }

    /* if guess is a correct letter than hidden guessed letter is visible */
    for (let i = 0; i < hangManLetters.length; i++) {
        if (lowerCaseLetterGuess === lowerCaseWord[i]) {
            hangManBlank[i] = hangManLetters[i];
        }
    }

    /* a function to determine if guess is correct */
    let correctGuess = lowerCaseWord.find(guessRight); 
    function guessRight(string) {
        return string === lowerCaseLetterGuess;  
    }

    /* if guess is incorrect -1 lives */
    if (lowerCaseLetterGuess !== correctGuess && correctAscii && letterGuess !== "") {
        lives--;
        wrongGuessMade.push(letterGuess);
    }

    /* if lives reach 0 game lost and turned off */
    if (lives === 0) {
        alert(`You have lost! The correct word was ${hangManWord}`);
        break;
    }

    /* if all letters are correctly guessed game won and turned off */
    if (hangManBlank.toString() === hangManLetters.toString()) {
        alert("You have won, congratulations!");
        playing = false;
    }
} while (playing);

/* uppercase A-Z ASCII code 65-90 and lowercase a-z ASCII code 97-122 */
