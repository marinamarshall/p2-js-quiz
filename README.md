# Simple Minds Veterinary Quiz
![screenshot](assets/images/homepage-responsive.png)
![screenshot](assets/images/game-responsive.png)
![screenshot](assets/images/end-responsive.png)

## [View the live quiz here](https://marinamarshall.github.io/p2-js-quiz/)

## About the Quiz

Simple Minds is a three page quiz that begins on the home page. When the "play game" button is clicked, the user is taken to the game page. 

The quiz is a fun, interactive multiple choice questionaire that is designed for Veterinary and Veterinary Nursing students from years 1-5. The questions are a mixture of course content from all of the years and test the students' general knowledge on several different topics.

The design of the quiz ensures that the user can easily navigate the content and the interactive design keeps the user engaged while updating them on their current score and how many questions they have until the quiz is completed.

Once the quiz is finished, the user is informed of their score and they have a choice to either play another game or to return to the homepage.

## User Stories
* First Time Visitor Goals
 * As a first time visitor, I want to easily understand what the quiz is for.  
 * As a first time visitor, I want to find the quiz well structured and easy to use.
 * As a first time visitor, I want to have a good experience that makes me want to come back to the site again.

* Returning Visitor Goals
 * As a returning visitor I want to see what updates there are
 * As a returning visitor I want to see more questions and topics to choose from
 * As a returning visitor I want to be tested on specific knowledge

## User Experience (UX)

### The Strategy Plane

Build an online quiz that is a fun game/challenge. The target audience is Veterinary and Veterinary Nursing students from years 1-5. It is a general knowledge quiz that assesses multiple modules from the college course.

### The Scope Plane

* It is a multiple choice quiz layout, the user must choose one option. The quiz will assess correct and incorrect answers and give the user this feedback.

* Potential future releases:
  * The addition of reasons behind the correct answer being correct. 
  * A timer feature so that the user has to manage their time like a real exam. 
  * The test could be broken down further into specific modules that the student could choose what to be tested on.

### The Structure Plane

This is a three-page quiz. 

* The homepage will display the button to be clicked to begin the quiz.

* This click will take the user to the game page that will display a question and options in MCQ style. There is an interactive display that counts the questions asked and the amount of correct and incorrect answers.
* Once the user has completed the game, they will be taken to the end page where they will be given their score and a choice to go back to the homepage or to play again.

### The Skeleton Plane

The page will have a straightforward layout so that the user will easily find what they are looking for. The user has one option to begin the quiz, taking questions randomly from a bank of questions. The question is displayed and the user is given three choices to answer from. Once the answer is selected, the answer is assessed for correctness/incorrectness.The quiz moves on to the next question until the maximum number of questions has been asked. The user can then choose if they want to play the quiz again or go back to the home page.


![screenshot](assets/images/homepage.png)

![screenshot](assets/images/game.png)

![screenshot](assets/images/end.png)



### The Surface Plane

## Colours
Neutral colours are chosen so that the user doesn't get distracted by background images and colours. The green colour for the background adds to the user experience without compromising their ability to see what is being asked of them. 

## Fonts/Typography
The font colour has been set to an off-grey/black colour so that it is less harsh to read. The font is set to Times, again so that it is clearly readable and the user can read everything easily.

## Technologies Used

### Languages used
* HTML5
* CSS3
* JavaScript ES6

### Frameworks, Libraries and Programmes used
* Google Developer Tools - Used during the coding process to identify errors in CSS and in JavaScript files

* Font Awesome - The flask icon was imported from FontAwesome to add style to the homepage font

* Favicon - The pawprint favicon adds some small but nice detail to the tab so the user can recognize the tab if they click off of it

* Github - Used to store the project code after being pushed from Git

* Git - Used for version control

* Gitpod - Used to edit code and using the terminal to add and commit code with key messages that were pushed to Github

* Balsamiq - Used to create wireframes for the quiz

* Hover.css: - Used on the link elements and option containers to add interactivity for the user

## Features

* Responsive on PC, laptop, tablet and phone screens

* Interactive elements:
  * "Play Game" Button
  * Options
  * Progress Bar
  * Question Counter
  * Score Area
  * Return Home/Play Again Buttons

  ## Testing and Bugs
 * HTML was tested using [W3C Markup Validation Service](https://validator.w3.org/)

   * No errors detected.
   * Two warnings corrected where blank input was detected 

   ![screenshot](assets/images/index-clean.png)
   ![screenshot](assets/images/game-clean.png)
   ![screenshot](assets/images/end-clean.png)

 * CSS was tested using [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

   * No errors or warnings detected
   ![screenshot](assets/images/stylecss-clean.png)
   ![screenshot](assets/images/gamecss-clean.png)
   ![screenshot](assets/images/endcss-clean.png)


 * JavaScript was tested using [ES6 Syntax Check](https://www.piliapp.com/syntax-check/es6/)

   * Two errors resolved, missing semi-colon (x2)
   * No warnings detected

 * JavaScript was tested again through recommended JSHint
   * [JSHint](https://jshint.com/)
   * Six unused variables were removed after detection
   * Twenty-five warnings related to ES6 were detected 

 * DevTools Lighthouse
   * Contrast issue with prefix background - updated green to a darker green    


 ## Bugs Fixed

 * Javascript unused variables (x6) detected in JSHint were removed

 * Navigating between pages when different links were clicked was solved by my mentor Chris

 * localStorage issue solved with the help of Sean, Tutor at CodeInstitute

 ## Further Testing
### Screen Sizes
 * Desktop
 * Laptop
 * iPad
 * iPhone 6/7/8
 * iPhone 5/SE

 ### Web Browsers Used
 * Google Chrome
 * Safari
 * Microsoft Edge
 * Mozilla Firefox

 ## Credits
### Acknowledgements
* My mentor Chris for his support and motivation
* Tutor support, Sean at CodeInstitute for his help and feedback
* CodeInstitute course content
* Fellow peers on Slack
* Stackoverflow for general queries

### Content and Media
* Colour Scheme:
  * [ColorSpace](https://mycolor.space/?hex=%23AFDCC5&sub=1)
  * [Color Hunt](https://colorhunt.co/)
  * [Coolors](https://coolors.co/231f30-5b525a-8f818d-c2d8d7-4a6767)

* CSS Flexbox
  * [FreeCodeCamp](https://www.freecodecamp.org/news/learn-css-flexbox/)
  * [Youtube tutorial - FreeCodeCamp](https://www.youtube.com/watch?v=tXIhdp5R7sc)
  * [W3Schools](https://www.w3schools.com/css/css3_flexbox.asp)
  * [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

* Breakpoints
  * [Microsoft](https://docs.microsoft.com/en-us/windows/apps/design/layout/screen-sizes-and-breakpoints-for-responsive-design)
  * [FreeCodeCamp - Media Quiries/Breakpoints](https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/)
  * [W3Schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

* Extra Reading
  * [Sitepoint - arrow functions](https://www.sitepoint.com/javascript-arrow-functions/)
  * [Difference between universal selector and root pseudo class](https://teamtreehouse.com/community/what-is-the-difference-between-and-root-functionalities)
  * [MDN - Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* Markdown Cheat Sheet
  * [Markdown Guide](https://www.markdownguide.org/cheat-sheet/)

* Design Elements
  * [FontAwesome](https://fontawesome.com/v5.15/icons/flask?style=solid)
  * [Favicon](https://favicon.io/emoji-favicons/paw-prints/)
  * [Add Favicon to page](https://www.hostinger.com/tutorials/how-to-add-favicon-to-website)
  * [Responsive Design](http://ami.responsivedesign.is/)
  * [Converting Colours](https://convertingcolors.com/)

* Tutorials
  * [Written 1](https://coding.degree/javascript-quiz-tutorial/)
  * [Written 2](https://simplestepscode.com/javascript-quiz-tutorial/)
  * [Written 3](https://www.sitepoint.com/simple-javascript-quiz/)
  * [Written 4](https://www.sitepoint.com/simple-javascript-quiz/#demo)
  
  
  * [Video 1](https://www.youtube.com/watch?v=f4fB9Xg2JEY)
  * [Video 2](https://www.youtube.com/watch?v=LQGTb112N_c)
  * [Video 3a](https://www.youtube.com/watch?v=rFWbAj40JrQ)
  * [Video 3b](https://www.youtube.com/watch?v=IK257Ln0MZc)
  * [Video 3c](https://www.youtube.com/watch?v=zZdQGs62cR8)
  * [Video 3d](https://www.youtube.com/watch?v=_LYxkClHnV0)
  * [Video 3e](https://www.youtube.com/watch?v=BOQLbu_Crc0)
  * [Video 3f](https://www.youtube.com/watch?v=4bctmtuZVcM)
  * [Video 3g](https://www.youtube.com/watch?v=o3MF_JmQxYg)
  * [Video 3h](https://www.youtube.com/watch?v=DFhmNLKwwGw)

* Change option selection colour correct/incorrect
  * [Oreilly.com](https://www.oreilly.com/library/view/javascript-cookbook/9781449390211/ch14.html)
  * [StackOverflow](https://stackoverflow.com/questions/40380676/javascript-remove-background-color-and-opacity)

* Creating delay
  * [Tutorialspoint](https://www.tutorialspoint.com/How-to-delay-a-JavaScript-function-call-using-JavaScript#:~:text=To%20delay%20a%20function%20call%2C%20use%20setTimeout()%20function.&text=functionname%20%E2%88%92%20The%20function%20name%20for,arguments%20passed%20to%20the%20function)
  * [Sitepoint](https://www.sitepoint.com/delay-sleep-pause-wait/)

* Create Progress Bar
  * [W3Schools](https://www.w3schools.com/howto/howto_js_progressbar.asp)
  * [GeeksForGeeks](https://www.geeksforgeeks.org/creating-progress-bar-using-javascript/)
  * [Youtube](https://www.youtube.com/watch?v=4LBRMSk6PLY)
  * [StackOverflow](https://stackoverflow.com/questions/50155924/how-to-increment-the-value-of-a-progress-bar-when-press-a-button-javascript/50156098)
  
* Create Random Question
  * [StackOverflow](https://stackoverflow.com/questions/43847375/creating-random-questions-and-answers-javascript)

* Convert HTML collection to array
  * [StackOverflow](https://stackoverflow.com/questions/35969974/foreach-is-not-a-function-error-with-javascript-array)

* Update Correct/Incorrect Counter
  * [Updating the Scores - CodeInstitute](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/8775beaed6ed403d92318845af971b30/?child=first)
* CodeInstitute Student Projects for a better understanding around the topics
  * [Quizzler-Javascript](https://github.com/Code-Institute-Submissions/Quizzler-Javascript/blob/master/assets/js/script.js)
  * [MS2-Quiz-Game-1](https://github.com/Code-Institute-Submissions/MS2-Quiz-Game-1/blob/master/assets/js/script.js)
  * [javascript-quiz](https://github.com/Code-Institute-Submissions/javascript-quiz/blob/main/assets/js/script.js)


## Deployment

1. Go to Github.com.
2. Select the repository to be deployed.
3. At the top of the repository on the right hand side, click the settings tab.
4. Scroll down to the "Github Pages" section and change the source branch to "master".
5. Click save.
6. Refresh the page.
7. Copy the live website link provided.
