function quiz() {

  var questionTally = 0;

  var username = prompt('Hi dude, thanks for visiting. What\'s your name slugger?');
  alert('Nice to meet you ' + username + '. I\'m going to give you a quiz about me. A little game called: How well do you know me');
  console.log('The user\'s name is ' + username + '.');

  function questionSetOne (){
    //first question
    var response1 = prompt('Is music my favorite hobby?').toLowerCase();
    var answer1 = 'yes';
    console.log('The user has responded ' + response1 + ' to the first question');

    if (response1 === answer1 || response1 === answer1[0]) {
      alert('good job. you got it right ' + username + '. Music is my favorite hobby.');
      response1 = true;
      console.log(response1);
      questionTally = questionTally += 1;
    }
    else {
      alert('Nope,' + username + '.' + ' music is my favorite hobby.');
      response1 = false;
      console.log(response1);
    }

    //second question
    var response2 = prompt('Do I come from the the big city?').toLowerCase();
    var answer2 = 'no';
    console.log('The user has responded ' + response2 + ' to the second question.');

    if (response2 === answer2 || response2 === answer2[0]){
      alert('Good job! You are correct ' + username + '. I do not come from the big city and in fact hale from a small town in the country.' );
      var response2 = true;
      console.log(response2);
      questionTally = questionTally += 1;
    }
    else {
      alert('Actually, no. ' + username + '. I come from a small country town.' );
      var response2 = false;
      console.log(response2);
    }

    //Third question
    var response3 = prompt('Is my favorite color gray?').toLowerCase();
    var answer3 = 'yes';
    console.log('The user has responded ' + response3 + ' to the third question.');

    if (response3 === answer3 || response3 === answer3[0]){
      alert('Nice. That\'s right. My favorite color is gray.');
      response3 = true;
      console.log(response3);
      questionTally = questionTally += 1;
    }
    else {
      alert('That\'s wrong ' + username + '. My favorite color is gray.');
      response3 = false;
      console.log(response3);
    }

    //Fourth question
    var response4 = prompt('Is it true that I love sports and weightlifting?').toLowerCase();
    var answer4 = 'no';
    console.log('The user has responded ' + response4 + ' to the fourth question.');

    if (response4 === answer4 || response4 === answer4[0]){
      alert('Very good ' + username + '. You\'re very clever, and obviously picked up on the fact that the last question was a curveball. I do like weightlifting, but I am no sports buff.');
      var response4 = true;
      console.log(response4);
      questionTally = questionTally += 1;
    }
    else {
      alert(username + ', you\'re going to have to try harder than that.' );
      response4 = false;
      console.log(response4);
    }

    //Fifth question
    var response5 = prompt('I prefer things that are old. Yes or No?').toLowerCase();
    var answer5 = 'yes';
    console.log('The user has responded ' + response5 + ' to the fifth question.');

    if (response5 === answer5 || response5 === answer5[0]){
      alert('Woah! Yep! That\'s right');
      response5 = true;
      console.log(response5);
      questionTally = questionTally += 1;
    }
    else{
      alert(username + ' sorry, that\'s not the right answer');
      var response5 = false;
      console.log(response5);
    }
  }

  function questionSetTwo (){
    //Sixth question
    var shoeSize = 11;
    var guesses = 4;
    var shoeSizeQuestion = parseInt(prompt('Okay, ' + username + ' let\'s see how good you really are. Can you guess my shoe size in four attempts?')) || 0;
    guesses = guesses -= 1;
    var correctSize = true;

    while (correctSize === true){
      console.log(shoeSizeQuestion);
      if (shoeSizeQuestion < shoeSize ){
        if (guesses > 1){
          shoeSizeQuestion = parseInt(prompt( 'It looks like your guess is a little too low. Try a higher number. You have ' + guesses + ' guesses left.')) || 0;
        }
        else if (guesses === 1){
          shoeSizeQuestion = parseInt(prompt( 'It looks like your guess is a little too low. Try a higher number and make it good! This is your last guess.')) || 0;
        }
        guesses = guesses -= 1;
      }

      if (shoeSizeQuestion > shoeSize ){
        if (guesses > 1){
          shoeSizeQuestion = parseInt(prompt( 'It looks like your guess is a little too high. Try a lower number. You have ' + guesses + ' guess left.')) || 0;
        }
        else if (guesses === 1){
          shoeSizeQuestion = parseInt(prompt( 'It looks like your guess is a little too high. Try a lower number and make it good! This is your last guess.' )) || 0;
        }
        guesses = guesses -= 1;
      }

      if (shoeSizeQuestion == shoeSize) {
        alert('Very good, ' + username + ', you have guessed the correct size!');
        guesses = guesses += 1;
        var correctSize = false;
        questionTally = questionTally += 1;
      }

      if (guesses === 0){
        alert('Sorry ' + username + ' you have failed to guess the my size. Which is 11 BTW. ');
        var correctSize = false;
      }
    }
  }

  function questionSetThree(){
    //Seventh question
    var youWin = 'Great job. You guessed one of my favorite colors!';
    var colorArray = ['gray', 'orange', 'mint green', 'purple', 'cerulean', 'eggplant'];
    var correctAnswer = false;
    var runAgain = false;
    y = 6;
    while (correctAnswer === false){
      if (runAgain === false){
        var questionSeven = prompt('Try guessing one of my favorite colors.');
      }
      if (runAgain === true){
        var questionSeven = prompt('Try guessing again.');
      }
      for (var i = 0; i < colorArray.length; i++){
        if (questionSeven === colorArray[i]){
          alert(youWin);
          correctAnswer = true;
          questionTally = questionTally += 1;
          break;
        }
      }
      y -= 1;
      if (questionSeven !== colorArray[i]){
        alert('wrong answer you have ' + y + ' tries left.');
        runAgain = true;
      }
      if (y === 0){
        alert('You have failed to guess one of my favorite colors. Well... here they are in case you were interested: Gray, purple, orange, mint green, cerulean, eggplant (which is really just dark purple). =)');
      }
    }
  }

  function endingMessage (){
    alert('That concludes our quiz. Thanks for playing! Your got ' + questionTally + ' out of a possible ' + 7 + ' questions correct.' );
  }

  questionSetOne();
  questionSetTwo();
  questionSetThree();
  endingMessage();
}

document.getElementById('quizbutton').onclick = function(){ quiz(); };
