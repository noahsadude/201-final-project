/* eslint-disable no-undef */
// ***GLOBAL VARIABLES***
let formEl = document.getElementById('add-new-question');
let selectQuestionEl = document.getElementById('question-dropdown');
let questionEl = document.getElementById('question');
let answerEl = document.getElementById('answer');
let deleteButtonEl = document.getElementById('delete');
let showAllCardsButtonEl = document.getElementById('show-all-cards');
let allCardsWrapperEl = document.getElementById('all-cards-wrapper');
let questionFound;
let questionFoundIndex;
let showCards = false;

// ***HELPER FUNCTIONS***
//function for filling selectQuestion dropdown with values from allQuestions array
function populateForm() {
  let test = localStorage.getItem('questionsKey');
  if(test){
    allQuestions = retrieve('questionsKey');
  }
  //clear the dropdown first
  while(selectQuestionEl.firstChild) {
    selectQuestionEl.removeChild(selectQuestionEl.firstChild);
  }
  //and then add new questions
  render('option', selectQuestionEl, 'Add New');
  for (var i = 0; i < allQuestions.length; i++) {
    render('option', selectQuestionEl, allQuestions[i].question);
  }
}

//function for emptying form values
function resetFormValues() {
  questionEl.value = answerEl.value = '';
}

//function for removing enter keys
function removeEnter(string) {
  console.log(string);
  console.log(string.replace(/\n/g, ''));
  return string.replace(/\n/g, '');
}

// ***EVENT HANDLERS***
//function for getting element index if such question exists in allQuestions array
function selectQuestionHandler() {
  questionFound = false;
  //if question exists - get its index, else - clear question and answer forms
  for(let i in allQuestions) {
    if(selectQuestionEl.value === allQuestions[i].question){
      questionEl.value = allQuestions[i].question;
      answerEl.value = allQuestions[i].answer;
      questionFound = true;
      questionFoundIndex = i;
    }
  }
  if(!questionFound) {
    resetFormValues();
    deleteButtonEl.textContent = 'Clear';
  } else {
    deleteButtonEl.textContent = 'Delete';
  }
}

//function for adding new question or editing existing
function submitQuestionHandler(e) {
  e.preventDefault();
  //get the form values
  let dropdown = selectQuestionEl.value;
  let question = removeEnter(e.target.question.value);
  let answer = removeEnter(e.target.answer.value);
  //if this is a new question - add it to the array of questions, else - edit selected
  if(dropdown === 'Add New') {
    new Question(question, answer);
    console.log('new question submitted!');
    store('questionsKey', allQuestions);
    resetFormValues();
    populateForm();
  } else {
    if(questionFound) {
      allQuestions[questionFoundIndex].question = question;
      allQuestions[questionFoundIndex].answer = answer;
      console.log('question successfully edited');
      selectQuestionEl.value = 'Add New';
      store('questionsKey', allQuestions);
      resetFormValues();
      populateForm();
    }
  }
  if(showCards) {
    showAllCards();
  }
}

//function for deleting selected question
function deleteQuestionHandler() {
  if(questionFound) {
    allQuestions.splice(questionFoundIndex, 1);
    store('questionsKey', allQuestions);
    resetFormValues();
    populateForm();
  } else {
    resetFormValues();
  }
}

//function for rendering card for all questions from allQuestion array
function showAllCards() {
  while (allCardsWrapperEl.firstChild) {
    allCardsWrapperEl.removeChild(allCardsWrapperEl.firstChild);
  }
  for (let i in allQuestions) {
    let flipCardEl = render('div', allCardsWrapperEl, false, 'card-container flip-card');
    let flipCardInnerEl = render('div', flipCardEl, false, 'flip-card-inner post-it');
    let flipCardFronEl = render('div', flipCardInnerEl, false, 'flip-card-front post-it');
    render('p', flipCardFronEl, allQuestions[i].question);
    let flipCardBackEl = render('div', flipCardInnerEl, false, 'flip-card-back post-it');
    render('p', flipCardBackEl, allQuestions[i].answer);
  }
  showCards = true;
  showAllCardsButtonEl.textContent = 'HIDE CARDS';
  showAllCardsButtonEl.removeEventListener('click', showAllCards);
  showAllCardsButtonEl.addEventListener('click', hideCards);
}

//function for hiding all cards
function hideCards() {
  while (allCardsWrapperEl.firstChild) {
    allCardsWrapperEl.removeChild(allCardsWrapperEl.firstChild);
  }
  showCards = false;
  showAllCardsButtonEl.textContent = 'SHOW ALL CARDS';
  showAllCardsButtonEl.removeEventListener('click', hideCards);
  showAllCardsButtonEl.addEventListener('click', showAllCards);
}

// ***EVENT LISTENERS***
formEl.addEventListener('submit', submitQuestionHandler);
selectQuestionEl.addEventListener('change', selectQuestionHandler);
deleteButtonEl.addEventListener('click', deleteQuestionHandler);
showAllCardsButtonEl.addEventListener('click', showAllCards);

// ***EXECUTING CODE***
populateForm();
