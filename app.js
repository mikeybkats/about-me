//this is a comment
alert('hey is this thing on?');
var username = prompt('Hi dude, thanks for visiting. What\'s your name slugger?');
alert('Nice to meet you ' + username + '. I\'m going to give you a quiz about me. How well do you know me?');
console.log('The user\'s name is ' + username + '.');

//var username = 'test';
var response1 = prompt('Is music my favorite hobby?').toLowerCase();
var answer1 = 'yes';

if (response1 === answer1 || response1 === answer1[0]) {
  alert('good job. you got it right ' + username + '. Music is my favorite hobby.');
}
else {
  alert('Nope,' + username + '.' + 'Music is my favorite hobby.');
}
