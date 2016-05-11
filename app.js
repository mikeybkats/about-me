//this is a comment

function quiz() {
  var username = prompt('Hi dude, thanks for visiting. What\'s your name slugger?');
  alert('Nice to meet you ' + username + '. I\'m going to give you a quiz about me. How well do you know me?');
  console.log('The user\'s name is ' + username + '.');

  var response1 = prompt('Is music my favorite hobby?').toLowerCase();
  var answer1 = 'yes';
  console.log('The user has responded ' + response1 + ' to the first question');

  if (response1 === answer1 || response1 === answer1[0]) {
    alert('good job. you got it right ' + username + '. Music is my favorite hobby.');
    response1 = true;
    console.log(response1);
  }

  else {
    alert('Nope,' + username + '.' + ' music is my favorite hobby.');
    response1 = false;
    console.log(response1);
  }

  var response2 = prompt('Do I come from the the big city?').toLowerCase();
  var answer2 = 'no';
  console.log('The user has responded ' + response2 + ' to the second question.');

  if (response2 === answer2 || response2 === answer2[0]){
    alert('Good job! You are correct ' + username + '. I do not come from the big city and in fact hale from a small town in the country.' );
    var response2 = true;
    console.log(response2);
  }

  else {
    alert('Actually, no. ' + username + '. I come from a small country town.' );
    var response2 = false;
    console.log(response2);
  }

  var response3 = prompt('Is my favorite color gray?').toLowerCase();
  var answer3 = 'yes';
  console.log('The user has responded ' + response3 + ' to the third question.');

  if (response3 === answer3 || response3 === answer3[0]){
    alert('Nice. That\'s right. My favorite color is gray.');
    response3 = true;
    console.log(response3);
  }

  else {
    alert('That\'s wrong ' + username + '. My favorite color is gray.');
    response3 = false;
    console.log(response3);
  }

  var response4 = prompt('Is it true that I love sports and weightlifting?').toLowerCase();
  var answer4 = 'no';
  console.log('The user has responded ' + response4 + ' to the fourth question.');

  if (response4 === answer4 || response4 === answer4[0]){
    alert('Very good ' + username + '. You\'re very clever, and obviously picked up on the fact that the last question was a curveball. I do like weightlifting, but I am no sports buff.');
    var response4 = true;
    console.log(response4);
  }
  else {
    alert(username + ', you\'re going to have to try harder than that.' );
    response4 = false;
    console.log(response4);
  }

  var response5 = prompt('I prefer things that are old. Yes or No?').toLowerCase();
  var answer5 = 'yes';
  console.log('The user has responded ' + response5 + ' to the fifth question.');

  if (response5 === answer5 || response5 === answer5[0]){
    alert('Woah! Yep! That\'s right');
    response5 = true;
    console.log(response5);
  }
  else{
    alert(username + ' sorry, that\'s not the right answer');
    var response5 = false;
    console.log(response5);
  }

};

document.getElementById('quizbutton').onclick = function(){
  quiz();
};
