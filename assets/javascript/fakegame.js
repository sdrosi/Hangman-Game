//      VARIABLES       //
var myArray = ["fire", "crackle", "hiking", "mountain", "desert"];

//choose random word
var randWord = myArray[Math.floor(Math.random() * myArray.length)]

//globals
var gameWord;
var answerArray = [];
var wrongArray = [];
var userGuess;

//counters
var wins = 0;
var loses = 0;
var guessesRemain = 10;

// USER PRESSES KEY TO BEGIN GAME; FROM WORD BANK, RANDOM WORD IS SELECTED
//RANDOM WORD IS STORED TO A GLOBAL VARIABLE; CHARACTER LENGTH OF THE RANDOM WORD IS DETERMINED TO PRINT APPROPRIATE WORD BLANKS

document.onkeyup = function(beginGame) {
    userGuess = event.key;
    for (var i = 0; i < randWord.length; i++) {
        answerArray[i] = "_";
    }

    gameWord = answerArray.join(" ");


    document.getElementById("word-blanks").innerHTML = gameWord;

    function stringSplit() {
         answerArray = str.gameWord(" ");};

        if (gameWord.includes(userGuess)) {
            document.getElementById("wordBlanks").innerHTML = answerArray.push(" ");}

        else {
            guessesRemain--;
            document.getElementById("guesses-left").innerHTML = guessesRemain;
            document.getElementById("wrong-Guesses").innerHTML = userGuess;
        }

    };



//     function Checker () {
//         if (userGuess.length > 0)
//         {
//             for (var j = 0; j < randWord.length; j++) {
//                 if (randWord[j] === userGuess) {
//                     answerArray[j] = userGuess;
//                 }
//             }
//         guessesRemain--;
//         document.getElementById("guesses-left").innerHTML = guessesRemain;
//         document.getElementById("wordBlanks").innerHTML = answerArray.join(" ");
// }};

// for (var j = 0; j < randWord.length; j++) {
//     if (randWord[j] === userGuess) {
//      answerArray[j] = userGuess;
//     guessesRemain--;
//      }
//     }


// 2. GAME FUNCTION BEGINS AND WAITS FOR KEY PRESS

// 3. AFTER EACH ONKEYUP THE FOLLOWING OCCURS:

    //1. RECORDS THE USED INPUTTED KEY

        //CHECK TO MAKE SURE THE KEY HAS NOT ALREADY BEEN USED

            //IF NOT, STORE LETTTER IN ARRAY

             //IF IT HAS, DONT ADD TO ARRAY AND DECREASE GUESSES REMAINING

    //2. CHECK IF LETTER IS IN THE WORD
        
        //FOR LOOP- FOR EACH LETTER IN THE RANDOM WORD:

        //CONDITIONAL: IF THE VALUE OF THE USER CHARACTER MATCHES THE INDEX OF A CHARACTER IN THE WORD, REPLACE BLANK WITH CHARACTER



// beginGame.onkeyup;
//         FUNCTIONS           //