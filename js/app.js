'use strict';

let baseQuestions = [
  ['refactor', 'the process of restructuring existing computer code without changing its external behavior.'],
  ['instantiate', ' to create an instance of an object in an object-oriented programming language.'],
  ['do/while statement', 'creates a loop that executes a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.'],
  ['break statement', 'used to jump out of a switch() or a loop and resumes code after the loop'],
  ['continue statement', 'breaks one iteration in the loop, if a specified condition occurs, and continues with the next iteration in the loop.']
];
let allQuestions = [];
let allQuestionsLength;
let cardWrapperEl = document.getElementById('card-wrapper');
let qOrAEl = document.getElementById('question-or-answer');
let questionIsShowing = false;
let knownLevelWrapperEl = document.getElementById('known-level-wrapper');
let currentQuestionIndex;
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
  this.timesTested = 0;
  this.markedKnown = 0;
  this.markedFamiliar = 0;
  this.markedUnknown = 0;

  allQuestions.push(this);
}

function instantiateBaseQuestions(){
  // instantiate new Question objects from baseQuestions[]
  for(let i = 0; i < baseQuestions.length; i++) {
    new Question(baseQuestions[i][0], baseQuestions[i][1]);
  }
}

function instantiateAllQuestions(){
  // instantiate new Question objects from allQuestions[]
  for(let i = 0; i < allQuestionsLength; i++) {
    new Question(allQuestions[i][0], allQuestions[i][1]);
  }
}

// render randomly selected question to index.html
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Called by the cardWrapperEl onclick event
// Called by the Start nav link onclick event
function handleCardClick(event) {
  console.log('event.target: ', event.target);
  renderCard(randomNumber(0, allQuestions.length - 1));
}

function renderCard(questionIndex){
  currentQuestionIndex = questionIndex;
  if(questionIsShowing){
    // If question value is showing, render answer value
    qOrAEl.textContent = allQuestions[questionIndex].answer;
    questionIsShowing = false;
  } else {
    // If answer value is showing, render question value
    qOrAEl.textContent = allQuestions[questionIndex].question;
    questionIsShowing = true;
  }
}

function updateKnownProperties(event) {
  console.log('event.target.value: ', event.target.value);
  console.log('event.target: ', event.target);
  // increment know property that was selected for the card that is showing
  if(event.target.value === 'know'){
    allQuestions[currentQuestionIndex].markedKnown++;
  } else if(event.target.value === 'familiar') {
    allQuestions[currentQuestionIndex].markedFamiliar++;
  } else if(event.target.value === 'not-known') {
    allQuestions[currentQuestionIndex].markedUnknown++;
  }
  // then call renderCard()
  console.log('check known properties: ', allQuestions);
  renderCard(randomNumber(0, allQuestions.length - 1));
}

// footer content
pEl.textContent = `${'\u00A9'} ${year} CodeFellows StrikeForce`;
footerEl[0].appendChild(pEl);

cardWrapperEl.addEventListener('click', handleCardClick);
knownLevelWrapperEl.addEventListener('click', updateKnownProperties);

(function(){
  instantiateBaseQuestions();
  console.log('baseQuestions: ', baseQuestions);
  instantiateAllQuestions();
  console.log('allQuestions: ', allQuestions);
  allQuestionsLength = allQuestions.length;
  renderCard(randomNumber(0, allQuestions.length - 1));
})();
