/* eslint-disable no-unused-vars */
'use strict';

let baseQuestions = [
  ['refactor', 'the process of restructuring existing computer code without changing its external behavior.', 'JavaScript'],
  ['instantiate', ' to create an instance of an object in an object-oriented programming language.', 'JavaScript'],
  ['do/while statement', 'creates a loop that executes a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.', 'JavaScript'],
  ['break statement', 'used to jump out of a switch() or a loop and resumes code after the loop', 'JavaScript'],
  ['continue statement', 'breaks one iteration in the loop, if a specified condition occurs, and continues with the next iteration in the loop.', 'JavaScript'],
  ['ophidiophobia', 'the fear of snakes', 'Phobias'],
  ['cynophobia', 'the fear of dogs', 'Phobias'],
  ['acrophobia', 'the fear of heights', 'Phobias'],
  ['astraphobia', 'the fear of thunder/lightning', 'Phobias'],
  ['mysophobia', 'the fear of germs', 'Phobias'],
  ['aerophobia', 'the fear of flying', 'Phobias'],
  ['thanatophobia', 'the fear of death', 'Phobias'],
  ['glossophobia', 'the fear of public speaking', 'Phobias'],
  ['atychiphobia', 'the fear of failure', 'Phobias'],
  ['alektorophobia', 'the fear of chickens', 'Phobias'],
  ['enochlophobia', 'the fear of crowds', 'Phobias'],
  ['autophobia', 'the fear of abandonment', 'Phobias'],
  ['hemophobia', 'the fear of blood', 'Phobias'],
  ['xenophobia', 'the fear of the unknown', 'Phobias'],
  ['vehophobia', 'the fear of driving', 'Phobias'],
  ['basiphobia', 'the fear of falling', 'Phobias'],
  ['achievemephobia', 'the fear of success', 'Phobias'],
  ['ailurophobia', 'the fear of cats', 'Phobias'],
  ['metathesiophobia', 'the fear of change', 'Phobias'],
  ['globophobia', 'the fear of balloons', 'Phobias'],
  ['nyctophobia', 'the fear of darkness', 'Phobias'],
  ['philophobia', 'the fear of love', 'Phobias'],
  ['triskaidekaphobia', 'the fear of the number 13', 'Phobias'],
  ['emetophobia', 'the fear of vomiting', 'Phobias'],
  ['gephyrophobia', 'the fear of bridges', 'Phobias'],
  ['panophobia', 'the fear of everything', 'Phobias'],
  ['paraskevidekatriaphobia', 'the fear of Friday the 13th', 'Phobias'],
  ['apiphobia', 'the fear of bees', 'Phobias'],
  ['koumpounophobia', 'the fear of buttons', 'Phobias'],
  ['athazagoraphobia', 'the fear of being forgotten or not remembering things', 'Phobias'],
  ['katsaridaphobia', 'the fear of cockroaches', 'Phobias'],
  ['latrophobia', 'the fear of doctors', 'Phobias'],
  ['pediophobia', 'the fear of dolls', 'Phobias'],
  ['ichthyophobia', 'the fear of fish', 'Phobias'],
  ['sidonglobophobia', 'the fear of cotton balls', 'Phobias'],
  ['scelerophobia', 'the fear of crime', 'Phobias'],
  ['pogonophobia', 'the fear of beards', 'Phobias'],
  ['omphalophobia', 'the fear of belly buttons', 'Phobias'],
  ['chaetophobia', 'the fear of hair', 'Phobias'],
  ['nosocomephobia', 'the fear of hospitals', 'Phobias'],
  ['ligyrophobia', 'the fear of loud noises', 'Phobias'],
  ['spheksophobia', 'the fear of wasps', 'Phobias'],
  ['coulrophobia', 'the fear of clowns', 'Phobias'],
  ['allodoxaphobia', 'the fear of other people\'s opinions of you', 'Phobias'],
  ['kinemortophobia', 'the fear of zombies', 'Phobias'],
  ['taphophobia', 'the fear of being buried alive', 'Phobias'],
  ['aurophobia', 'the fear of finding gold', 'Phobias'],
  ['nomophobia', 'the fear of being without cellphones', 'Phobias'],
  ['Hippopotomonstrosesquippedaliophobia', 'the fear of long words. This is one of two names for this condition.', 'Phobias'],
  ['Sesquipedalophobia', 'the fear of long words. This is one of two names for this condition.', 'Phobias'],
  ['phobophobia', 'the fear of fear', 'Phobias'],
  ['haphephobia', 'the fear of being touched', 'Phobias'],
  ['coherent', 'последовательный', 'English-Russian'],
  ['alumni', 'выпускник', 'English-Russian'],
  ['surd', 'иррациональный', 'English-Russian'],
  ['turquoise', 'бирюзовый', 'English-Russian'],
  ['divergent', 'расходящийся', 'English-Russian'],
  ['whereas', 'в то время как', 'English-Russian'],
  ['mitigate', 'смягчать', 'English-Russian'],
  ['deceived', 'обманутый', 'English-Russian'],
  ['churn', 'маслобойка', 'English-Russian'],
  ['mayhap', 'может быть', 'English-Russian'],
  ['trample', 'топтать', 'English-Russian'],
  ['auroch', 'зубр', 'English-Russian'],
  ['herd', 'пасти', 'English-Russian'],
  ['shy away', 'уклоняться', 'English-Russian'],
  ['treadmill', 'бегущая дорожка', 'English-Russian'],
  ['adamant', 'непреклонный', 'English-Russian'],
  ['daunting', 'пугающий', 'English-Russian'],
  ['ancillary', 'подсобный', 'English-Russian'],
  ['smolder', 'тлеть', 'English-Russian'],
  ['immutable', 'immutable', 'English-Russian'],
  ['collaborate', 'сотрудничать', 'English-Russian'],
  ['sullen', 'угрюмый', 'English-Russian'],
  ['resilience', 'упругость', 'English-Russian'],
  ['entail', 'влечь за собой', 'English-Russian'],
  ['without further adieu', 'без лишних слов', 'English-Russian'],
  ['per se', 'как таковой', 'English-Russian'],
  ['compel', 'принуждать', 'English-Russian'],
  ['tremulous', 'трепетный', 'English-Russian'],
  ['exasperation', 'озлобление', 'English-Russian'],
  ['irascible', 'вспыльчивый', 'English-Russian'],
  ['ruddy', 'румяный', 'English-Russian'],
  ['perch', 'окунь', 'English-Russian'],
  ['forswear', 'зарекаться', 'English-Russian']
];
let allQuestions = [];
let chosenQuestions = [];
let categories = [];
let clickCount = 0;
let settingsSaved = false;
let modal = document.getElementById('myModal');
let btn = document.getElementById('settings');
let span = document.getElementsByClassName('close')[0];
let settingsSubmit = document.getElementById('settings-submit');
let settingKnown = document.getElementById('settings-known');
let settingFamiliar = document.getElementById('settings-familiar');
let settingNotKnown = document.getElementById('settings-not-known');
let randomOrderEl = document.getElementById('random-order');
let cardWrapperEl = document.getElementById('card-wrapper');
let instruction = 'Click here to start. Click again to reveal the answer. To see a new card, select one of the buttons below';
let knownLevelWrapperEl = document.getElementById('known-level-wrapper');
let footerEl = document.getElementsByTagName('footer');
let pEl = document.getElementById('year');
let currentQuestionIndex;
let numberOfQuestionsAsked = 0;
let numberOfUnknownQuestionsAtStart;
let numberOfUnknownQuestionsAtFinish;
let timer;
let seconds = 0;
let minutes = 0;
let date = new Date();
let year = date.getFullYear();

function Question(question, answer, category) {
  this.question = question;
  this.answer = answer;
  this.category = category;
  this.timesTested = 0;
  this.knowledgeLevel = 0;

  allQuestions.push(this);
}

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

function clearContainer(containerElement) {
  while(containerElement.firstChild) {
    containerElement.removeChild(containerElement.firstChild);
  }
}

function instantiateBaseQuestions(){
  for(let i in baseQuestions) {
    new Question(baseQuestions[i][0], baseQuestions[i][1], baseQuestions[i][2]);
  }
}

function instantiateAllQuestions(){
  allQuestions = retrieve('questionsKey');
}

function renderInstructions(){
  if(cardWrapperEl){
    clearContainer(cardWrapperEl);
    let flipCardInnerEl = render('div', cardWrapperEl, false, 'card');
    let divEl = render('div', flipCardInnerEl, false, 'flip-card-inner instructions post-it');
    render('p', divEl, instruction);
  }
}

// fill in the categories array with unique categories
function getCategories() {
  for (let i in allQuestions) {
    if(!categories.includes(allQuestions[i].category)) {
      categories.push(allQuestions[i].category);
    }
  }
}

// if user set any settings - use chosenQuestions,
// else - go through all questions
function generateIndexes() {
  if (settingsSaved && chosenQuestions.length < 1) {
    instruction = 'No questions match selected criteria';
    renderInstructions();
  } else if (!settingsSaved) {
    for (let i in allQuestions) {
      chosenQuestions.push(i);
    }
  }
  if(randomOrderEl.checked) {
    chosenQuestions = shuffle(chosenQuestions);
  }
  console.table(chosenQuestions);
}

function startTimer() {
  window.clearInterval(timer);
  seconds = 0;
  minutes = 0;
  timer = window.setInterval(countUp, 1000);
}

function countUp() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  let timeString = `${minutes} minutes and ${seconds} seconds`;
  console.log(timeString);
  return timeString;
}

function countGradesAtStart() {
  numberOfUnknownQuestionsAtStart = 0;
  for (let i in chosenQuestions) {
    if(allQuestions[chosenQuestions[i]].knowledgeLevel < 2) {
      numberOfUnknownQuestionsAtStart++;
    }
  }
}

function countGradesAtFinish() {
  numberOfUnknownQuestionsAtFinish = 0;
  for (let i in chosenQuestions) {
    if(allQuestions[chosenQuestions[i]].knowledgeLevel < 2) {
      numberOfUnknownQuestionsAtFinish++;
    }
  }
}

function renderQuizCard(){
  clearContainer(cardWrapperEl);
  let flipCardInnerEl = render('div', cardWrapperEl, false, 'card');
  let flipCardFronEl = render('div', flipCardInnerEl, false, 'flip-card-inner flip-card-front post-it');
  render('p', flipCardFronEl, allQuestions[currentQuestionIndex].question);
  let flipCardBackEl = render('div', flipCardInnerEl, false, 'flip-card-inner flip-card-back post-it');
  render('p', flipCardBackEl, allQuestions[currentQuestionIndex].answer);

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

function handleFirstCardClick(){
  generateIndexes();

  if(chosenQuestions.length > 0) {
    currentQuestionIndex = chosenQuestions[clickCount];
    renderQuizCard();
  }
  clickCount++;
  cardWrapperEl.removeEventListener('click', handleFirstCardClick);
  cardWrapperEl.addEventListener('click', flipCard);
  knownLevelWrapperEl.addEventListener('click', handleRateClick);

  countGradesAtStart();
  startTimer();
}

function handleRateClick(event){
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

  if(isValidClick) {
    if(clickCount < chosenQuestions.length){
      currentQuestionIndex = chosenQuestions[clickCount];
      renderQuizCard();
      clickCount++;

      allQuestions[currentQuestionIndex].timesTested++;

      store('questionsKey',allQuestions);
    } else {
      countGradesAtFinish();
      let questionsLearned = numberOfUnknownQuestionsAtStart - numberOfUnknownQuestionsAtFinish;
      if (questionsLearned > 0) {
        instruction = `Congratulations! You've learned ${questionsLearned} new out of ${chosenQuestions.length} questions in ${countUp()}`;
      } else {
        instruction = `You've spent ${countUp()} and didn't learn any new questions out of ${chosenQuestions.length} shown. Try again!`;
      }
      renderInstructions();
      cardWrapperEl.removeEventListener('click', flipCard);
      knownLevelWrapperEl.removeEventListener('click', handleRateClick);
      window.clearInterval(timer);
    }
  }
}

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

if(cardWrapperEl){
  cardWrapperEl.addEventListener('click', handleFirstCardClick);
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

  renderInstructions();
})();

pEl.textContent = `${'\u00A9'} ${year} CodeFellows StrikeForce`;
footerEl[0].appendChild(pEl);
