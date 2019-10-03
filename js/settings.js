// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function buildQuestionArray(){
  let known = settingKnown.checked;
  let familiar = settingFamiliar.checked;
  let unknown = settingNotKnown.checked;
  let arrayOfQuestions = [];
  if(known){
    console.log('known checked!');
    for(let i = 0; i<allQuestions.length; i++){
      console.log('for loop for known started. currently at '+i);
      if(allQuestions[i].knowledgeLevel === 2){
        arrayOfQuestions.push(i);
      }
    }
  }
  if(familiar){
    console.log('familiar checked!');
    for(let i = 0; i<allQuestions.length; i++){
      console.log('for loop for familiar started. currently at '+i);
      if(allQuestions[i].knowledgeLevel === 1){
        arrayOfQuestions.push(i);
        console.log(arrayOfQuestions);
      }
    }
  }
  if(unknown){
    console.log('unknown checked!');
    for(let i = 0; i<allQuestions.length; i++){
      console.log('for loop for unknown started. currently at '+i);
      if(allQuestions[i].knowledgeLevel === 0){
        arrayOfQuestions.push(i);
        console.log(arrayOfQuestions);
      }
    }
  }
  chosenQuestions = arrayOfQuestions;
  store('chosen-questions',chosenQuestions);
  alert('settings saved!');
}

settingsSubmit.addEventListener('click',buildQuestionArray);