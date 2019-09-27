'use strict';

let baseQuestions = [
  ['refactor', 'the process of restructuring existing computer code without changing its external behavior.'],
  ['instantiate', ' to create an instance of an object in an object-oriented programming language.'],
  ['do/while statement', 'creates a loop that executes a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.'],
  ['break statement', 'used to jump out of a switch() or a loop and resumes code after the loop'],
  ['continue statement', 'breaks one iteration in the loop, if a specified condition occurs, and continues with the next iteration in the loop.']
];
let allQuestions = [];
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

// instantiate new Question objects from baseQuestions[]
function instantiateBaseQuestions(){
  for(let i = 0; i < baseQuestions.length; i++) {
    new Question(baseQuestions[i][0], baseQuestions[i][1]);
  }
}

// instantiate new Question objects from allQuestions[]
function instantiateAllQuestions(){
  allQuestions = retrieve('questionsKey');
}

// called at the end of app.js
function renderInstructions(instruction){
  qOrAEl.textContent = instruction;
  questionIsShowing = false;
}

// render randomly selected question to index.html
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// called in updateKnownProperties(e) and handleCardClick(e)
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
} // end renderQuizCard()

// Called by the cardWrapperEl onclick event
// Called by the Start nav link onclick event ///////     TODO      ////////
function handleCardClick(event) {
  if(numberOfQuestionsAsked === 0) {
    // start timer
    console.log(`Started at: ${hour}:${minutes}`);
    // need stop event to stop timer and calculate time elapsed
  }
  // if a rating was submitted or this is the first card is being requested
  if(isRated === true || currentQuestionIndex === undefined) {
    currentQuestionIndex = randomNumber(0, allQuestions.length - 1);

    // Update timesTested every time a new card is rendered
    numberOfQuestionsAsked++;
    allQuestions[currentQuestionIndex].timesTested++;
    console.log('updated numberofQeustionsAsked from handleCardClick(): ', numberOfQuestionsAsked);
    console.log('updated timesTested in handleCardClick():', allQuestions[currentQuestionIndex].timesTested);
    renderQuizCard(currentQuestionIndex);
  } else {
    renderQuizCard(currentQuestionIndex);
  }

  if(numberOfQuestionsAsked === 1) {
    knownLevelWrapperEl.addEventListener('click', updateKnownProperties);
  }
}

// increment selected known property for the card that is showing
function updateKnownProperties(event) {
  console.log('event.target.alt: ', event.target.alt);
  console.log('event.target: ', event.target);
  questionIsShowing = false;
  let isValidClick = true;

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

  // then render a new card
  if(isValidClick) {
    isRated = true;
    let randomNum = randomNumber(0, allQuestions.length - 1);
    renderQuizCard(randomNum);
    numberOfQuestionsAsked++;
    console.log('updated numberofQeustionsAsked from updateknownproperties(): ', numberOfQuestionsAsked);
    allQuestions[randomNum].timesTested++;
    console.log('updated timesTested in updateKnownProperties():', allQuestions[randomNum].timesTested);
    store('questionsKey',allQuestions);
  }

} // end updateKnownProperties()

// footer content
pEl.textContent = `${'\u00A9'} ${year} CodeFellows StrikeForce`;
footerEl[0].appendChild(pEl);

if(cardWrapperEl){
  cardWrapperEl.addEventListener('click', handleCardClick);
}

(function(){
  let test = localStorage.getItem('questionsKey');
  if(test){
    instantiateAllQuestions();
    console.log('all questions instantiated');
  } else {
    instantiateBaseQuestions();
    console.log('base questions instantiated');
  }
  if(qOrAEl){
    renderInstructions(startInstruction);
  }
})();

function store(key, value){
  //local storage
  localStorage.setItem(key, JSON.stringify(value));
  console.log('local storage stored');
}

function retrieve(key){
  let value = JSON.parse(localStorage.getItem(key));
  console.log('local storage called');
  return value;
}
