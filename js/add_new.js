/* eslint-disable no-undef */
// ***GLOBAL VARIABLES***
let formEl = document.getElementById('add-new-question');
let categoryWrapperEl = document.getElementById('category-wrapper');
let selectCategoryEl = document.getElementById('category');
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
function populateCategory() {
  let test = localStorage.getItem('questionsKey');
  if(test){
    allQuestions = retrieve('questionsKey');
  }
  clearContainer(selectCategoryEl);
  //and then add new categories
  getCategories();
  render('option', selectCategoryEl, 'All Categories');
  for (let i in categories) {
    render('option', selectCategoryEl, categories[i]);
  }
  render('option', selectCategoryEl, 'Add New');
}

function populateForm() {
  let test = localStorage.getItem('questionsKey');
  if(test){
    allQuestions = retrieve('questionsKey');
  }
  selectCategoryHandler();
}

//function for emptying form values
function resetFormValues() {
  questionEl.value = answerEl.value = '';
}

//function for removing enter keys
function removeEnter(string) {
  return string.replace(/\n/g, '');
}

function addNewCategory() {
  let inputEl = render('input', categoryWrapperEl);
  // inputEl.id = 'new-category-input';
  let buttonEl = render('button', categoryWrapperEl, 'ADD');
  // buttonEl.id = 'new-category-button';
  buttonEl.type = 'button';
  buttonEl.addEventListener('click', addNewCategoryHandler);

  function addNewCategoryHandler() {
    categories.push(inputEl.value);
    clearContainer(categoryWrapperEl);
    populateCategory();
  }
}

// ***EVENT HANDLERS***
function selectCategoryHandler() {
  //clear the dropdowns first
  clearContainer(selectQuestionEl);
  //and then add new questions
  render('option', selectQuestionEl, 'Add New');
  for (i in allQuestions) {
    if(selectCategoryEl.value === 'All Categories' ||
    selectCategoryEl.value === allQuestions[i].category) {
      render('option', selectQuestionEl, allQuestions[i].question);
    }
  }
  if(showCards) {
    showAllCards();
  }
  if(selectCategoryEl.value === 'Add New'){
    addNewCategory();
  } else {
    clearContainer(categoryWrapperEl);
  }
}

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
    deleteButtonEl.textContent = 'CLEAR';
  } else {
    deleteButtonEl.textContent = 'DELETE';
  }
}

//function for adding new question or editing existing
function submitQuestionHandler(e) {
  e.preventDefault();
  //get the form values
  let category = selectCategoryEl.value;
  let dropdown = selectQuestionEl.value;
  let question = removeEnter(e.target.question.value);
  let answer = removeEnter(e.target.answer.value);
  //if this is a new question - add it to the array of questions, else - edit selected
  if(dropdown === 'Add New' && category !== 'All Categories') {
    new Question(question, answer, category);
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
  if(showCards) {
    showAllCards();
  }
}

//function for rendering card for all questions from allQuestion array
function showAllCards() {
  clearContainer(allCardsWrapperEl);
  for (let i in allQuestions) {
    if(selectCategoryEl.value === 'All Categories' ||
    selectCategoryEl.value === allQuestions[i].category) {
      let flipCardEl = render('div', allCardsWrapperEl, false, 'card-container flip-card');
      let flipCardInnerEl = render('div', flipCardEl, false, 'flip-card-inner post-it');
      let flipCardFronEl = render('div', flipCardInnerEl, false, 'flip-card-front post-it');
      render('p', flipCardFronEl, allQuestions[i].question);
      let flipCardBackEl = render('div', flipCardInnerEl, false, 'flip-card-back post-it');
      render('p', flipCardBackEl, allQuestions[i].answer);
      let imgEl = render('img', flipCardBackEl, false, 'delete_button', 'img/edit_icon.png');
      imgEl.alt = imgEl.title = 'Edit this card';
      imgEl = render('img', flipCardBackEl, false, 'delete_button', 'img/delete_icon.png');
      imgEl.alt = imgEl.title = 'Delete this card';
    }
  }
  showCards = true;
  showAllCardsButtonEl.textContent = 'HIDE CARDS';
  showAllCardsButtonEl.removeEventListener('click', showAllCards);
  showAllCardsButtonEl.addEventListener('click', hideCards);
}

//function for hiding all cards
function hideCards() {
  clearContainer(allCardsWrapperEl);
  showCards = false;
  showAllCardsButtonEl.textContent = 'SHOW ALL CARDS';
  showAllCardsButtonEl.removeEventListener('click', hideCards);
  showAllCardsButtonEl.addEventListener('click', showAllCards);
}

//function for deleting card
function deleteCardHandler(e) {
  if(e.target.tagName === 'IMG') {
    let selectedQuestion = e.target.parentElement.parentElement.firstChild.textContent;
    for(let i in allQuestions) {
      if(selectedQuestion === allQuestions[i].question) {
        questionFound = true;
        questionFoundIndex = i;
      }
    }
    if(e.target.alt === 'Delete this card') {
      deleteQuestionHandler();
    } else {
      selectQuestionEl.value = allQuestions[questionFoundIndex].question;
      selectQuestionHandler();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}


// ***EVENT LISTENERS***
formEl.addEventListener('submit', submitQuestionHandler);
selectCategoryEl.addEventListener('change', selectCategoryHandler);
selectQuestionEl.addEventListener('change', selectQuestionHandler);
deleteButtonEl.addEventListener('click', deleteQuestionHandler);
showAllCardsButtonEl.addEventListener('click', showAllCards);
allCardsWrapperEl.addEventListener('click', deleteCardHandler);

// ***EXECUTING CODE***
populateCategory();
populateForm();
