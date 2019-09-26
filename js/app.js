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
let startInstruction = 'Click on this card to start. Click again to reveal the answer. Each successive click  will flip the same card back and forth. To test yourself on a new question, rate your comfort-level with the current question by selecting one of the buttons below. You can add new cards or revise existing cards at any time by going to the Add New Cards page.';
let questionIsShowing = false;
let isRated = false;
let knownLevelWrapperEl = document.getElementById('known-level-wrapper');
let currentQuestionIndex = undefined;
let footerEl = document.getElementsByTagName('footer');
let pEl = document.getElementById('year');
let numberOfQuestionsAsked = 0;
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

function renderInstructions(instruction){
  qOrAEl.style.paddingTop = '80.5px';
  qOrAEl.style.width = '400px';
  qOrAEl.textContent = instruction;
  questionIsShowing = false;
}

// render randomly selected question to index.html
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Called by the cardWrapperEl onclick event
// Called by the Start nav link onclick event ///////TODO////////
function handleCardClick(event) {
  if(numberOfQuestionsAsked === 0) {
    // start timer
    console.log(`Started at: ${hour}:${minutes}`);
  }

  if(isRated === true || currentQuestionIndex === undefined) {
    currentQuestionIndex = randomNumber(0, allQuestions.length - 1);
    numberOfQuestionsAsked++;
    qOrAEl.style.paddingTop = '108px';
    qOrAEl.style.width = '300px';
    renderQuizCard(currentQuestionIndex);
  } else {
    renderQuizCard(currentQuestionIndex);
  }

  if(numberOfQuestionsAsked === 1) {
    knownLevelWrapperEl.addEventListener('click', updateKnownProperties);
  }
}

function renderQuizCard(questionIndex){
  currentQuestionIndex = questionIndex;
  if(questionIsShowing){
    // If question value is showing, render answer value
    qOrAEl.textContent = allQuestions[currentQuestionIndex].answer;
    questionIsShowing = false;
  } else if(isRated || questionIsShowing === false) {
    // If answer value is showing, render question value
    qOrAEl.textContent = allQuestions[currentQuestionIndex].question;
    questionIsShowing = true;
    isRated = false;
  }
}

function updateKnownProperties(event) {
  console.log('event.target.value: ', event.target.value);
  console.log('event.target: ', event.target);
  questionIsShowing = false;
  let isValidClick = true;
  // increment know property that was selected for the card that is showing
  switch(event.target.alt) {
    case undefined:
      isValidClick = false;
      break;
    case 'know':
      allQuestions[currentQuestionIndex].markedKnown++;
      break;
    case 'familiar':
      allQuestions[currentQuestionIndex].markedFamiliar++;
      break;
    case 'not-known':
      allQuestions[currentQuestionIndex].markedUnknown++;
      break;
  }

  // then call renderCard()
  if(isValidClick) {
    isRated = true;
    let randomNum = randomNumber(0, allQuestions.length - 1);
    renderQuizCard(randomNum);
  }
}

// footer content
pEl.textContent = `${'\u00A9'} ${year} CodeFellows StrikeForce`;
footerEl[0].appendChild(pEl);

cardWrapperEl.addEventListener('click', handleCardClick);

(function(){
  instantiateBaseQuestions();
  instantiateAllQuestions();
  renderInstructions(startInstruction);
})();
