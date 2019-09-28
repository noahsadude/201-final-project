# Developer
1.  As a developer, I want to make a fun, intuitive, simple GUI;
1.  As a developer, I want to make three distinct web pages:
  - index.html - flash card page
  - add-question.html  - add a new question and its answer to the mix
  - about.html - photo and description of each dev team member;
1.  As a developer, I want to enable the user to add more questions and answers;
1.  As a developer, I want to make a Question constructor function with:
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
1.  As a developer, I want to enable onclick events:
When the card is showing a question, the click will flip the card over and show the answer and vice versa;
1.  As a developer, I want to keep track of when a question was last shown;
E.g. If a question was shown within the last 5 times, don’t show. One possible way to do this for this example:
five arrays: inLastOne[], inLastTwo[], inLastThree[], inLastFour[], inLastFive[] (this might make the code easier to read than creating one array of these individual arrays)
After each question, store that question’s key (the question string);
1.  As a developer, I want to keep track of the user’s number of times correct for each question shown;
1.  As a developer, I want to provide a navigation link to allow the user to view information about the app developer team;
1.  As a developer, I want to provide a navigation link to allow the user to add new question/answer pairs to the localStorage database of questions and answers;
1.  As a developer, I want to store updated Questions objects in localStorage (when the user selects an answer);
1.  As a developer, I want the user to be able to know which side is the question and which side is the answer by changing the color of the fonts for question and answer;
1. As a developer, I want to enable the user to select a question topic from a dropdown list;
1. As a developer, I want to color code flash cards to give people the option to quiz on multiple groups of flash cards;
1. As a developer, I want to provide an option to stop showing a particular flashcard for a while;
1. As a developer, I want to add learning modules;
1. As a developer, I want to add CSS animations;
1. As a developer, I want to display a question less frequently if it has been answered correctly already;
1. As a developer, I want to display a results chart showing correct vs incorrect answers grouped by section/topic;
1. As a developer, I want to add a mode where the user can choose what will be displayed as the question: the term or the definition;
1. As a developer, I want to add a timer so that the user will know how much time they spent on each question / total session;
1. As a developer, I want to add a progress bar (questions wrong, questions right);
1. As a developer, I want to add a screen reader feature so that the user can be read the card content;
1. As a developer, I want to add to the quiz page a submission textbox / textarea (radio, checkbox, etc) to allow the user to answer. (Search submission string for keywords?);

# User
1. As a flash card user, I want to be presented a random question;
1. As a flash card user, I want to be able to choose a familiarity button card and be shown the answer to the question currently shown;
1. As a flash card user, I want to be shown a new questions when I click on the answer-side of the card;
1. As a flash card user, I want to be shown questions I have answered correctly less frequently than those I haven’t yet answered or those I have answered incorrectly;
1. As a flash card user, I want to be able to share cards with others;
1. As a flash card user, I want to be able to upload images or draw on the question or answer side;
1. As a flash card user, I want the card to flip;
1. As a flash card user, I want to be able to create a 1000 cards and have them where ever I go on my device instead of carrying 1000 physical flash cards;

[Google Docs to user stories.](https://docs.google.com/document/d/1D36ofhP0-x6LyAE3bMIzaEb7nMFDQVV3T-MfjSWazy0/edit?ts=5d899229#heading=h.ojffrdlt1o98)