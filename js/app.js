'use strict';

let allQuestions = [
  ['refactor', 'the process of restructuring existing computer code without changing its external behavior.'],
  ['instantiate', ' to create an instance of an object in an object-oriented programming language.'],
  ['do/while statement', 'creates a loop that executes a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.'],
  ['break statement', 'used to jump out of a switch() or a loop and resumes code after the loop'],
  ['continue statement', 'breaks one iteration in the loop, if a specified condition occurs, and continues with the next iteration in the loop.']
];
let allQuestionsLength = allQuestions.length; // to avoid infinite loop hell
let cardWrapperEl = document.getElementById('card-wrapper');
let knowLevelWrapperEl = document.getElementById('know-level-wrapper');
let footerEl = document.getElementsByTagName('footer');
let pEl = document.getElementById('year');
let date = new Date();
let hour = date.getHours();
let minutes = ('0'+ date.getMinutes()).slice(-2);
let year = date.getFullYear();
let day = date.getDay();
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


function Question(question, answer) {
  this.question = question;
  this.answer = answer;
  this.timesShown = 0;
  this.timesKnown = 0;
  this.timesFamiliar = 0;
  this.timesUnknown = 0;

  allQuestions.push(this);
}

// instantiate new Question objects from allQuestions[]
for(let i = 0; i < allQuestionsLength; i++) {
  new Question(allQuestions[i][0], allQuestions[i][1]);
}

// render randomlyl selected question to index.html
function randomNumber(min, max) {

}


// footer content
pEl.textContent = `${'\u00A9'} ${year} CodeFellows StrikeForce`;
footerEl[0].appendChild(pEl);
