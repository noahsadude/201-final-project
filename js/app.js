'use strict';

// ***GLOBAL VARIABLES***
let baseQuestions = [
  ['refactor', 'the process of restructuring existing computer code without changing its external behavior.'],
  ['instantiate', ' to create an instance of an object in an object-oriented programming language.'],
  ['do/while statement', 'creates a loop that executes a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.'],
  ['break statement', 'used to jump out of a switch() or a loop and resumes code after the loop'],
  ['continue statement', 'breaks one iteration in the loop, if a specified condition occurs, and continues with the next iteration in the loop.'],
  ['ophidiophobia', 'the fear of snakes'],
  // ['cynophobia', 'the fear of dogs'],
  // ['acrophobia', 'the fear of heights'],
  // ['astraphobia', 'the fear of thunder/lightning'],
  // ['mysophobia', 'the fear of germs'],
  // ['aerophobia', 'the fear of flying'],
  // ['thanatophobia', 'the fear of death'],
  // ['glossophobia', 'the fear of public speaking'],
  // ['atychiphobia', 'the fear of failure'],
  // ['alektorophobia', 'the fear of chickens'],
  // ['enochlophobia', 'the fear of crowds'],
  // ['autophobia', 'the fear of abandonment'],
  // ['hemophobia', 'the fear of blood'],
  // ['xenophobia', 'the fear of the unknown'],
  // ['vehophobia', 'the fear of driving'],
  // ['basiphobia', 'the fear of falling'],
  // ['achievemephobia', 'the fear of success'],
  // ['ailurophobia', 'the fear of cats'],
  // ['metathesiophobia', 'the fear of change'],
  // ['globophobia', 'the fear of balloons'],
  // ['nyctophobia', 'the fear of darkness'],
  // ['philophobia', 'the fear of love'],
  // ['triskaidekaphobia', 'the fear of the number 13'],
  // ['emetophobia', 'the fear of vomiting'],
  // ['gephyrophobia', 'the fear of bridges'],
  // ['panophobia', 'the fear of everything'],
  // ['paraskevidekatriaphobia', 'the fear of Friday the 13th'],
  // ['apiphobia', 'the fear of bees'],
  // ['koumpounophobia', 'the fear of buttons'],
  // ['athazagoraphobia', 'the fear of being forgotten or not remembering things'],
  // ['katsaridaphobia', 'the fear of cockroaches'],
  // ['latrophobia', 'the fear of doctors'],
  // ['pediophobia', 'the fear of dolls'],
  // ['ichthyophobia', 'the fear of fish'],
  // ['sidonglobophobia', 'the fear of cotton balls'],
  // ['scelerophobia', 'the fear of crime'],
  // ['pogonophobia', 'the fear of beards'],
  // ['omphalophobia', 'the fear of belly buttons'],
  // ['chaetophobia', 'the fear of hair'],
  // ['nosocomephobia', 'the fear of hospitals'],
  // ['ligyrophobia', 'the fear of loud noises'],
  // ['spheksophobia', 'the fear of wasps'],
  // ['coulrophobia', 'the fear of clowns'],
  // ['allodoxaphobia', 'the fear of other people\'s opinions of you'],
  // ['kinemortophobia', 'the fear of zombies'],
  // ['taphophobia', 'the fear of being buried alive'],
  // ['aurophobia', 'the fear of finding gold'],
  // ['nomophobia', 'the fear of being without cellphones'],
  // ['Hippopotomonstrosesquippedaliophobia', 'the fear of long words. This is one of two names for this condition.'],
  // ['Sesquipedalophobia', 'the fear of long words. This is one of two names for this condition.'],
  // ['phobophobia', 'the fear of fear'],
  // ['haphephobia', 'the fear of being touched']
];
let allQuestions = [];
let cardWrapperEl = document.getElementById('card-wrapper');
let instruction = 'Click on this card to start. Click again to reveal the answer. Each successive click  will flip the same card back and forth. To test yourself on a new question, rate your comfort-level with the current question by selecting one of the buttons below. You can add new cards or revise existing cards at any time by going to the Add New Cards page.';
let knownLevelWrapperEl = document.getElementById('known-level-wrapper');
let footerEl = document.getElementsByTagName('footer');
let pEl = document.getElementById('year');
let currentQuestionIndex = 0;
let numberOfQuestionsAsked = 0;
let notKnownQuestionsIndexes = [];
let currentNotKnownQuestionIndex = 0;
let date = new Date();
let hour = date.getHours();
let minutes = ('0'+ date.getMinutes()).slice(-2);
let year = date.getFullYear();

// ***CONSTRUCTOR FUNCTIONS***
function Question(question, answer) {
  this.question = question;
  this.answer = answer;
  this.timesTested = 0;
  this.knowledgeLevel = 0;

  allQuestions.push(this);
}

// ***HELPER FUNCTIONS***
//fuction for rendering element to the page
function render(element, parent, content, className, src) {
  let el = document.createElement(element);
  if(content) {
    el.textContent = content;
  }
  if(className) {
    el.className = className;
  }
  if(src) {
    el.src = src;
  }
  parent.appendChild(el);
  return el;
}

// instantiate new Question objects from baseQuestions[]
function instantiateBaseQuestions(){
  for(let i in baseQuestions) {
    new Question(baseQuestions[i][0], baseQuestions[i][1]);
  }
}

// instantiate new Question objects from allQuestions[]
function instantiateAllQuestions(){
  allQuestions = retrieve('questionsKey');
}

// called at the end of app.js
function renderInstructions(){
  if(cardWrapperEl){
    let flipCardInnerEl = render('div', cardWrapperEl, false, 'card');
    let divEl = render('div', flipCardInnerEl, false, 'flip-card-inner instructions post-it');
    render('p', divEl, instruction);
  }
}

// // function for generating a random number
// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function renderQuizCard(questionIndex){
function renderQuizCard(){
  while (cardWrapperEl.firstChild) {
    cardWrapperEl.removeChild(cardWrapperEl.firstChild);
  }
  let flipCardInnerEl = render('div', cardWrapperEl, false, 'card');
  let flipCardFronEl = render('div', flipCardInnerEl, false, 'flip-card-inner flip-card-front post-it');
  render('p', flipCardFronEl, allQuestions[currentQuestionIndex].question);
  let flipCardBackEl = render('div', flipCardInnerEl, false, 'flip-card-inner flip-card-back post-it');
  render('p', flipCardBackEl, allQuestions[currentQuestionIndex].answer);

  //update values
  // currentQuestionIndex = questionIndex;
  numberOfQuestionsAsked++;
  allQuestions[currentQuestionIndex].timesTested++;
}

function flipCard() {
  var card = document.querySelector('.card');
  card.classList.toggle('is-flipped');
}

function shuffle(objectsOrIndexes){
  for (var i = objectsOrIndexes.length - 1; i >= 0; i--){
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = objectsOrIndexes[randomIndex];
    objectsOrIndexes[randomIndex] = objectsOrIndexes[i];
    objectsOrIndexes[i] = itemAtIndex;
  }

  return objectsOrIndexes;
}

function fillNotKnownQuestionsIndexes(){
  let numberOfNotKnowns = 0;

  for (let i in allQuestions){
    switch (allQuestions[i].knowledgeLevel){
      case 0:
        notKnownQuestionsIndexes.push(i);
        numberOfNotKnowns++;
        break;
      case 1:
        notKnownQuestionsIndexes.push(i);
        numberOfNotKnowns++;
        break;
      case 2:
        notKnownQuestionsIndexes.push(i);
        break;
    }

    if (numberOfNotKnowns === 0){
      instruction = 'Congratulations! You have achieved 100%!';
      renderInstructions();
    }
  }
}

// ***EVENT HANDLERS***
//while instructions are displayed replace them with question, add eventListener for answer buttons and make the card flip when clicked
// renamed function
function handleFirstCardClick(){
  // start timer
  console.log(`Started at: ${hour}:${minutes}`);
  // need stop event to stop timer and calculate time elapsed

  // currentQuestionIndex = randomNumber(0, allQuestions.length - 1);
  renderQuizCard(currentQuestionIndex);

  cardWrapperEl.removeEventListener('click', handleFirstCardClick);
  cardWrapperEl.addEventListener('click', flipCard);
  knownLevelWrapperEl.addEventListener('click', handleRateClick);
}


// increment selected known property for the card that is showing
function handleRateClick(event){

  if (numberOfQuestionsAsked > 0){
    console.log('event.target.alt: ', event.target.value);
    let isValidClick = true;

    switch(event.target.value){
      case undefined:
        isValidClick = false;
        break;
      case 'known':
        allQuestions[currentQuestionIndex].knowledgeLevel = 2;
        break;
      case 'unsure':
        allQuestions[currentQuestionIndex].knowledgeLevel = 1;
        break;
      case 'unknown':
        allQuestions[currentQuestionIndex].knowledgeLevel = 0;
        break;
    }

    if (numberOfQuestionsAsked === allQuestions.length){
      notKnownQuestionsIndexes = fillNotKnownQuestionsIndexes();
      currentQuestionIndex = notKnownQuestionsIndexes[currentNotKnownQuestionIndex];
    } else if (numberOfQuestionsAsked > allQuestions.length){
      currentQuestionIndex = numberOfQuestionsAsked - allQuestions.length;
      currentNotKnownQuestionIndex++;
    }

    // then render a new card
    if (isValidClick){
      // let randomNum = randomNumber(0, allQuestions.length - 1);
      // renderQuizCard(randomNum);
      currentQuestionIndex++;
      renderQuizCard();

      // redundant
      // numberOfQuestionsAsked++;

      console.log(`handleRatedClick() > updated numberofQuestionsAsked: ${numberOfQuestionsAsked}`);
      allQuestions[currentQuestionIndex].timesTested++;
      console.log(`handleRatedClick() > updated timesTested: ${allQuestions[currentQuestionIndex].timesTested}`);

      store('questionsKey',allQuestions);
    }
  }
} // end handleRateClick()

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

// ***EVENT LISTENERS***
if(cardWrapperEl){
  cardWrapperEl.addEventListener('click', handleFirstCardClick);
}

// ***EXECUTING CODE***
(function(){
  let test = localStorage.getItem('questionsKey');

  if(test){
    instantiateAllQuestions();
    console.log('all questions instantiated');
  } else {
    instantiateBaseQuestions();
    console.log('base questions instantiated');
  }

  allQuestions = shuffle(allQuestions);
  for(let i in allQuestions){
    console.log(allQuestions[i].question);
  }
  renderInstructions();
})();

// footer content
pEl.textContent = `${'\u00A9'} ${year} CodeFellows StrikeForce`;
footerEl[0].appendChild(pEl);
