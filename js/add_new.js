let submitButtonEl = document.getElementById('add-new-question');
let selectQuestionEl = document.getElementById('question-dropdown');
let questionEl = document.getElementById('question');
let answerEl = document.getElementById('answer');

function render(element,parent,content){
  let el = document.createElement(element);
  el.innerHTML=content;
  parent.appendChild(el);
}

function readForm(event){
  event.preventDefault();
  //get the form values
  let dropdown = selectQuestionEl.value;
  let question = questionEl.value;
  let answer = answerEl.value;
  
  console.log(`question = ${question}`);
  console.log(`answer = ${answer}`);
  //is this a new value or an edit to an existing question?
  //if new, push new question values through constructor function 
  if(dropdown === 'Add New'){
    new Question(question,answer);
    alert('new question submitted!');
  } else {
  //if not new, iterate through questions array to find answer to update
    for(let i in allQuestions){
      if(dropdown === allQuestions[i].question){
        allQuestions[i].answer = answer;
        alert('new answer submitted!');
      }
    }
  }
}

function populateForm() {

  render('option',selectQuestionEl,'Add New');
  for (var i = 0; i<allQuestions.length;i++) {
    var newQuestion = render('option',selectQuestionEl,allQuestions[i].question);
  }
}

populateForm();
submitButtonEl.addEventListener('submit',readForm);

