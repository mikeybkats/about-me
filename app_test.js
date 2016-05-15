//this is a comment

function quiz() {
  // var username = prompt('Hi dude, thanks for visiting. What\'s your name slugger?');
  // alert('Nice to meet you ' + username + '. I\'m going to give you a quiz about me. A little game called: How well do you know me?');
  // console.log('The user\'s name is ' + username + '.');

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
