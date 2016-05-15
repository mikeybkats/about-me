//this is a scratch pad for project tests and ideas

function quiz() {

<<<<<<< HEAD
  function guessShoeSize (){
    var username = 'cob';
    var shoeSize = 11;
    var guesses = 4;
    console.log(shoeSizeQuestion);
    var correctSize = true;
    while (correctSize === true){
      var shoeSizeQuestion = parseFloat(prompt('Okay, ' + username + ' let\'s see how good you really are. Can you guess my shoe size in four attempts?'));
      console.log(shoeSizeQuestion);
      // if (shoeSizeQuestion < shoeSize ){
      //   guesses = guesses -= 1;
      //   if (guesses > 0){
      //     shoeSizeQuestion = prompt( 'Try a higher number. You have ' + guesses + ' guesses left.');
      //     console.log(shoeSizeQuestion);
      //   }
      //   if (guesses === 0){
      //     shoeSizeQuestion = prompt('This is your last chance, make it a good guess!');
      //     console.log(shoeSizeQuestion);
      //   }
      // }
      // if (shoeSizeQuestion > shoeSize ){
      //   guesses = guesses -= 1;
      //   if (guesses > 0){
      //     shoeSizeQuestion = prompt( 'Try a lower number. You have ' + guesses + ' guesses left.' );
      //     console.log(shoeSizeQuestion);
      //   }
      //   else if (guesses === 0){
      //     shoeSizeQuestion = prompt('This is your last chance, make it a good guess!');
      //     console.log(shoeSizeQuestion);
      //   }
      // }

      if (shoeSizeQuestion === shoeSize) {
        alert('Very good, ' + username + ', you have guessed the correct size!');
        var correctSize = false;
        break;
      }
    }
  }
  guessShoeSize();
=======
  questionSeven();
>>>>>>> a11f5d76ab523176e0fa63b5fdb2fdf8718de882
}

document.getElementById('quizbutton').onclick = function(){
  quiz();
};

function questionSeven(){
  var test = true;
  var i = 10;

  while( test === true){
    i++;
    console.log(i);
    if (i === 200){
      var test = false;
    }
  }
}
