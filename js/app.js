'use strict';

let allQuestions = [
  ['refactor', 'the process of restructuring existing computer code without changing its external behavior.'],
  ['instantiate', ' to create an instance of an object in an object-oriented programming language.'],
  ['do/while statement', 'creates a loop that executes a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.'],
  ['break statement', 'used to jump out of a switch() or a loop and resumes code after the loop'],
  ['continue statement', 'breaks one iteration in the loop, if a specified condition occurs, and continues with the next iteration in the loop.']
];
let allQuestionsLength = allQuestions.length;

function Question(question, answer) {
  this.question = question;
  this.answer = answer;
  this.timesShown = 0;
  this.timesKnown = 0;
  this.timesFamiliar = 0;
  this.timesUnknown = 0;

  allQuestions.push(this);
}
console.log('allQuestions.length = ', allQuestions.length);
// instantiate new Question objects from allQuestions[]

for(let i = 0; i < allQuestionsLength; i++) {
  let writeForTesting = new Question(allQuestions[i][0], allQuestions[i][1]);
  console.log('A new object instance of Question: ', writeForTesting);
}

////// Test code //////
console.log('allQuestions[] ', allQuestions);


////// Test code //////
