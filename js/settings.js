'use strict';
/* eslint-disable no-undef */

let selectCategoryEl = document.getElementById('category');

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

function buildQuestionArray(){
  let known = settingKnown.checked;
  let familiar = settingFamiliar.checked;
  let unknown = settingNotKnown.checked;
  let arrayOfQuestions = [];

  for(let i = 0; i < allQuestions.length; i++){
    if(selectCategoryEl.value === allQuestions[i].category ||
      selectCategoryEl.value === 'All Categories') {
      if(known && allQuestions[i].knowledgeLevel === 2 ||
        familiar && allQuestions[i].knowledgeLevel === 1 ||
        unknown && allQuestions[i].knowledgeLevel === 0){
        arrayOfQuestions.push(i);
      }
    }
  }
  chosenQuestions = arrayOfQuestions;
  store('chosen-questions',chosenQuestions);
  settingsSaved = true;
  modal.style.display = 'none';
  clickCount = 0;
  handleFirstCardClick();
}

function populateCategory() {
  let test = localStorage.getItem('questionsKey');
  if(test){
    allQuestions = retrieve('questionsKey');
  }
  //first clear the container
  clearContainer(selectCategoryEl);
  //and then add new categories
  getCategories();
  render('option', selectCategoryEl, 'All Categories');
  for (let i in categories) {
    render('option', selectCategoryEl, categories[i]);
  }
}

// ***EVENT LISTENERS***
settingsSubmit.addEventListener('click', buildQuestionArray);

// ***EXECUTING CODE***
populateCategory();
