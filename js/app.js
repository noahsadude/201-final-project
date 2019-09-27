'use strict';

let baseQuestions = [
  ['refactor', 'the process of restructuring existing computer code without changing its external behavior.'],
  ['instantiate', ' to create an instance of an object in an object-oriented programming language.'],
  ['do/while statement', 'creates a loop that executes a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.'],
  ['break statement', 'used to jump out of a switch() or a loop and resumes code after the loop'],
  ['continue statement', 'breaks one iteration in the loop, if a specified condition occurs, and continues with the next iteration in the loop.'],
  ['ophidiophobia', 'the fear of snakes'],
  ['cynophobia', 'the fear of dogs'],
  ['acrophobia', 'the fear of heights'],
  ['astraphobia', 'the fear of thunder/lightning'],
  ['mysophobia', 'the fear of germs'],
  ['aerophobia', 'the fear of flying'],
  ['thanatophobia', 'the fear of death'],
  ['glossophobia', 'the fear of public speaking'],
  ['atychiphobia', 'the fear of failure'],
  ['alektorophobia', 'the fear of chickens'],
  ['enochlophobia', 'the fear of crowds'],
  ['autophobia', 'the fear of abandonment'],
  ['hemophobia', 'the fear of blood'],
  ['xenophobia', 'the fear of the unknown'],
  ['vehophobia', 'the fear of driving'],
  ['basiphobia', 'the fear of falling'],
  ['achievemephobia', 'the fear of success'],
  ['ailurophobia', 'the fear of cats'],
  ['metathesiophobia', 'the fear of change'],
  ['globophobia', 'the fear of balloons'],
  ['nyctophobia', 'the fear of darkness'],
  ['philophobia', 'the fear of love'],
  ['triskaidekaphobia', 'the fear of the number 13'],
  ['emetophobia', 'the fear of vomiting'],
  ['gephyrophobia', 'the fear of bridges'],
  ['panophobia', 'the fear of everything'],
  ['paraskevidekatriaphobia', 'the fear of Friday the 13th'],
  ['apiphobia', 'the fear of bees'],
  ['koumpounophobia', 'the fear of buttons'],
  ['athazagoraphobia', 'the fear of being forgotten or not remembering things'],
  ['katsaridaphobia', 'the fear of cockroaches'],
  ['latrophobia', 'the fear of doctors'],
  ['pediophobia', 'the fear of dolls'],
  ['ichthyophobia', 'the fear of fish'],
  ['sidonglobophobia', 'the fear of cotton balls'],
  ['scelerophobia', 'the fear of crime'],
  ['pogonophobia', 'the fear of beards'],
  ['omphalophobia', 'the fear of belly buttons'],
  ['chaetophobia', 'the fear of hair'],
  ['nosocomephobia', 'the fear of hospitals'],
  ['ligyrophobia', 'the fear of loud noises'],
  ['spheksophobia', 'the fear of wasps'],
  ['coulrophobia', 'the fear of clowns'],
  ['allodoxaphobia', 'the fear of other people\'s opinions of you'],
  ['kinemortophobia', 'the fear of zombies'],
  ['taphophobia', 'the fear of being buried alive'],
  ['aurophobia', 'the fear of finding gold'],
  ['nomophobia', 'the fear of being without cellphones'],
  ['Hippopotomonstrosesquippedaliophobia', 'the fear of long words. This is one of two names for this condition.'],
  ['Sesquipedalophobia', 'the fear of long words. This is one of two names for this condition.'],
  ['phobophobia', 'the fear of fear'],
  ['haphephobia', 'the fear of being touched']
];

let allQuestions = [];
let allQuestionsLength;
let cardWrapperEl = document.getElementById('card-wrapper');
let questionOrAnswerEl = document.getElementById('question-or-answer');
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
  for(let i = 0; i < allQuestionsLength; i++) {
    new Question(allQuestions[i][0], allQuestions[i][1]);
  }
}

// called at the end of app.js
function renderInstructions(instruction){
  questionOrAnswerEl.style.paddingTop = '80.5px';
  questionOrAnswerEl.style.width = '400px';
  questionOrAnswerEl.textContent = instruction;
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
    questionOrAnswerEl.textContent = allQuestions[currentQuestionIndex].answer;
    questionIsShowing = false;
  } else if(isRated || questionIsShowing === false) {
    // If answer value is showing, render question value
    questionOrAnswerEl.textContent = allQuestions[currentQuestionIndex].question;
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
    questionOrAnswerEl.style.paddingTop = '108px';
    questionOrAnswerEl.style.width = '300px';

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
  }
} // end updateKnownProperties()

// footer content
if(pEl){
  pEl.textContent = `${'\u00A9'} ${year} CodeFellows StrikeForce`;
  footerEl[0].appendChild(pEl);

  cardWrapperEl.addEventListener('click', handleCardClick);
}

function store(key, value){
  //local storage
  localStorage.setItem(key, JSON.stringify(value));
}

function retrieve(key){
  let value = JSON.parse(localStorage.getItem(key));
  return value;
}

(function(){
  instantiateBaseQuestions();
  instantiateAllQuestions();
  if(questionOrAnswerEl){
    renderInstructions(startInstruction);
  }
})();
