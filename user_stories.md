1 - As a developer, I want to make a fun, intuitive, simple GUI;
2 - As a developer, I want to make three distinct web pages:
  - index.html - flash card page
  - add-question.html  - add a new question and its answer to the mix
  - about.html - photo and description of each dev team member;
3 - As a developer, I want to enable the user to add more questions and answers;
4 - As a developer, I want to make a Question constructor function with:
  - Properties:
    - question category
    - question
    - answer
    - number of times shown
  - Number of times the user selects that they know the answer
  - Number of times the user selects that they do not know the answer.
  - Number of times the user selects that they are familiar, but not certain.
  - Prototypes:
    - calcPlayerScore = answered/shown;

5 - As a developer, I want to enable onclick events:
When the card is showing a question, the click will flip the card over and show the answer and vice versa;
6 - As a developer, I want to keep track of when a question was last shown;
E.g. If a question was shown within the last 5 times, don’t show. One possible way to do this for this example:
five arrays: inLastOne[], inLastTwo[], inLastThree[], inLastFour[], inLastFive[] (this might make the code easier to read than creating one array of these individual arrays)
After each question, store that question’s key (the question string);
7 - As a developer, I want to keep track of the user’s number of times correct for each question shown;
8 - As a developer, I want to provide a navigation link to allow the user to view information about the app developer team;
9 - As a developer, I want to provide a navigation link to allow the user to add new question/answer pairs to the localStorage database of questions and answers;
10 - As a developer, I want to store updated Questions objects in localStorage (when the user selects an answer);
