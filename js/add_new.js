/* eslint-disable no-undef */
// ***GLOBAL VARIABLES***
let formEl = document.getElementById('add-new-question');
let selectQuestionEl = document.getElementById('question-dropdown');
let questionEl = document.getElementById('question');
let answerEl = document.getElementById('answer');
let questionFound = false;
let questionFoundIndex = 0;

// ***HELPER FUNCTIONS***
//fuction for rendering element to the page
function render(element, parent, content) {
  let el = document.createElement(element);
  if(content) {
    el.textContent = content;
  }
  parent.appendChild(el);
}

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
  for (var i = 0; i < allQuestions.length;i++) {
    render('option', selectQuestionEl, allQuestions[i].question);
  }
}

//function for emptying form values
function resetFormValues() {
  questionEl.value = answerEl.value = '';
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
  }
}

//function for adding new question or editing existing
function submitQuestionHandler(e) {
  e.preventDefault();
  //get the form values
  let dropdown = selectQuestionEl.value;
  let question = e.target.question.value;
  let answer = e.target.answer.value;
  //if this is a new question - add it to the array of questions, else - edit selected
  if(dropdown === 'Add New') {
    new Question(question,answer);
    console.log('new question submitted!');
    resetFormValues();
    populateForm();
  } else {
    if(questionFound) {
      allQuestions[questionFoundIndex].question = question;
      allQuestions[questionFoundIndex].answer = answer;
      console.log('question successfully edited');
      selectQuestionEl.value = 'Add New';
      resetFormValues();
      populateForm();
    }
  }
  store('questionsKey',allQuestions);
}


// ***EVENT LISTENERS***
formEl.addEventListener('submit', submitQuestionHandler);
selectQuestionEl.addEventListener('change', selectQuestionHandler);

// ***EXECUTING CODE***
populateForm();

