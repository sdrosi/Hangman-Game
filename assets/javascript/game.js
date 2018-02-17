//      VARIABLES       //
var myArray = ["fire", "crackle", "hiking", "mountain", "desert"];

//choose random word
var randWord = myArray[Math.floor(Math.random() * myArray.length)]
var answerArray = [];

//globals
console.log (answerArray = randWord.split(""));
var answerArray = randWord.split("");
var blanks = answerArray;
var wrongArray = [];
var userGuess = [];
var progressArray = [];

//counters
var wins = 0;
var loses = 0;
var guessesRemain = 10;

// USER PRESSES KEY TO BEGIN GAME; FROM WORD BANK, RANDOM WORD IS SELECTED
//RANDOM WORD IS STORED TO A GLOBAL VARIABLE; CHARACTER LENGTH OF THE RANDOM WORD IS DETERMINED TO PRINT APPROPRIATE WORD BLANKS

//push a letter to begin, store keyed letter event.key into progress array which will be used to compare to answer array 
document.onkeyup = function(event) {
    var letter = event.key;
    console.log(letter);
    progressArray.push(letter);
    console.log(progressArray);
    document.querySelector("#wrong-Guesses").innerHTML = progressArray;
}

//setup game with a function that will take the random word, scan it for length, replace the elements with that number of underscores.
//change the element word blanks to match the number of characters in answerArray
function randomAnswer () {
    for (var i = 0; i < randWord.length; i++) {
    answerArray[i] = "_";
    answerArray.join(" ");
    document.getElementById("word-blanks").innerHTML = answerArray;
    }
//cycle through the progress array and compare each index of progress array to answer array, if the letter matches, replace answer array _ with letter

    if (answerArray.includes(progressArray[i])) {
        document.getElementById("wordBlanks").innerHTML = progressArray.push(" ");
    }
//if not, then add progress array index to page element wrong-guess, and decrease guessRemain by 1
    else {
        guessesRemain--;
        document.getElementById("guesses-left").innerHTML = guessesRemain;
        document.getElementById("wrong-Guesses").innerHTML = progressArray;
    }}
    
   // create function that will keep comparing user input to answer array as long as guesses remain is greater than 0
   //if the letters in the answer array have all been compared and equal letters in progress array, then the user wins

   //once guesses remain equals 0, then prompt game is over

   //create function to reset game and let user know number of wins and losses

//My original logic flow:
//1. create word array and variables

// 2. GAME FUNCTION BEGINS AND WAITS FOR KEY PRESS

// 3. AFTER EACH ONKEYUP THE FOLLOWING OCCURS:

    //1. RECORDS THE USED INPUTTED KEY

        //CHECK TO MAKE SURE THE KEY HAS NOT ALREADY BEEN USED

            //IF NOT, STORE LETTTER IN ARRAY

             //IF IT HAS, DONT ADD TO ARRAY AND DECREASE GUESSES REMAINING

    //2. CHECK IF LETTER IS IN THE WORD
        
        //FOR LOOP- FOR EACH LETTER IN THE RANDOM WORD:

        //CONDITIONAL: IF THE VALUE OF THE USER CHARACTER MATCHES THE INDEX OF A CHARACTER IN THE WORD, REPLACE BLANK WITH CHARACTER

    
      //I got really lost throughout this exercise. I feel like if I had more time I would have started over. I know I should have approached this from the center and kept better track of my
      //variables. I wish I had spent more time reviewing exercises and less time banging my head against the computer and continuously trying different options
      //that honestly didnt quite make sense to me in the first place. I'm taking this homework as a serious learning for how I am going to approach the
      //bootcamp going forward. I hate failure, and I'm honestly super disappointed.


//Step 1 initialize variables word, random word, put in array, display, etc.
//Step 2 get user input document.onkeyup
//Step 3 logic, comparison, conditionals, functions
//Step 4 wins, losses, in progress
//Step 5 display output, what letters they guessed, wins, losses