//this is a comment

function quiz() {
  // var username = prompt('Hi dude, thanks for visiting. What\'s your name slugger?');
  // alert('Nice to meet you ' + username + '. I\'m going to give you a quiz about me. A little game called: How well do you know me?');
  // console.log('The user\'s name is ' + username + '.');

  function questionSeven(){
    var questionSeven = prompt('Try guessing one of my favorite colors in six tries?');
    var nextGuess = 'Try guessing again.';
    var youWin = 'Great job. You won the game.';
    var colorArray = ['gray', 'orange', 'mint green', 'purple', 'cerulean', 'eggplant'];
    var correctAnswer = false;
    var repeatGuess = false;
    for (var i = 0; i < colorArray.length; i++){
      if (correctAnswer === false){
        console.log(colorArray[i]);
        if(questionSeven === colorArray[i]){
          correctAnswer = true;
        }
        else if (questionSeven !== colorArray[i]){
          correctAnswer = false;
        }
      }
      else if (correctAnswer === true){
        alert(youWin);
      }
    }
    // for (var i = 0; i < colorArray.length; i++){
    //   if (correctAnswer === true){
    //     var questionSeven = prompt('Try guessing again. You now have ' + (colorArray.length - i) + ' tries left.');
    //     correctAnswer = false;
    //   }
    //   else if (correctAnswer === false){
    //     console.log(colorArray[i]);
    //     if(questionSeven === colorArray[i]){
    //       alert(youWin);
    //     }
    //     else {
    //       var correctAnswer = true;
    //     }
    //   }
    //   else {
    //     alert('Try again.');
    //     var correctAnswer = true;
    //   }
    // }
  }
  questionSeven();
}
document.getElementById('quizbutton').onclick = function(){
  quiz();
};
