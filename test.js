//questions

var paragraphSection = document.querySelector('paragraph');
var timerInterval;
var ul = document.querySelector('#choices');
var currentQuestionIndex = 0;
var display;
var timer;
var titleQuiz = document.querySelector('titleQuiz');




//start quiz
  function ButtonClicked(i) {
    var minuteclock = 15 * 5,
    display = document.querySelector('#time');
    startTimer(minuteclock, display);
    displayQuestion();
    
  }

  var startButton = document
  .querySelector('#startButton')
  .addEventListener('click', ButtonClicked);


  function answerComplete(i) {
  
  //10 secibds reduction
  if (this.value !== questions[currentQuestionIndex].answer) {
    alert('incorrect');
    timer -= 10;

  } else {
    alert('correct');
  }

  currentQuestionIndex++;
  displayQuestion();
}


  function endGame() {
    clearInterval(timerInterval);
    console.log('game over');
    document.querySelector('#time').textContent = timer;

    document.querySelector('#results').style.display = 'block';

    document.querySelector('#score').textContent = timer;

    document.querySelector('.container').style.display = 'none';
   

   
  }

//
  function displayQuestion(i) {
    var currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) {
      return endGame();
    }
    
  //changing question title from the one in html.. into the title of the array
  document.querySelector('#titleQuiz').textContent = currentQuestion.title;
  document.querySelector('#paragraph').innerHTML = '';
  ul.innerHTML = '';

//this is for when you click on button of answer choice to have a button
for (var i = 0; i< currentQuestion.choices.length; i++) {
  var li = document.createElement('li');
  var button2 = document.createElement('button');
  button2 = document.createElement('button');
  button2.setAttribute('value', currentQuestion.choices[i]);
  button2.textContent = currentQuestion.choices[i];
  button2.onclick = answerComplete;
  button2.classList.add('answerChoice');
  li.append(button2);
  ul.append(li);

  }
}



  var questions = [
    {
      title: "Who is the ravens starting slot corner?",
      choices: ["Marlon Humphrey", "Jimmy Smith","Marcus Peters","Aldon Smith"],
      answer: "Marlon Humphrey"
    },
    {
      title: "Who ran the fastest 40 time for wide reciever in the 2019 Nfl draft?",
      choices: ["Terry Mclaurin", "John Ross","Dj MetCalf","Hollywood Brown"],
      answer: "John Ross"
    },
    {
      title: "Who was the heaviest running back to play in the NFL",
      choices: ["Derrick Henry", "Christian Okoye","Jerome Bettis","Jamal Lewis"],
      answer: "Christian Okoye"
    },
    {
      title: "Who cried when they watched film on Aj Green's route running on film?",
      choices: ["Joe Horn", "Chad Johnson","Jalen Ramsey","Deuce Mcallister"],
      answer: "Chad Johnson"
    },
    {
      title: "Who was the greatest memeber of the Washington football team?",
      choices: ["Sean Taylor", "Clinton Portis", "London Fletcher", "Joe Theisman"],
      answer: "Sean Taylor"
    }
  ]

//timer
function startTimer(duration, display) {
  timer = duration;
  var minutes;
  var seconds;
  timerInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      // timer = duration;
    }
  }, 1000);
}

var time = document.getElementById('time');
time.addEventListener('click', ButtonClicked);



document.querySelector('#submit').addEventListener('submit', function(event) {
  event.preventDefault();
  var initials = document.querySelector('#initials').value;
  localStorage.setItem(initials, timer);
  displayscores();

});


document.querySelector('#results').style.display = 'none';
document.querySelector('#scoresDiv').style.display = 'none';

document.querySelector('#viewScores').addEventListener('click', displayScores);
function displayScores() {
  document.querySelector('#scoresDiv').style.display = 'block';
  Object.keys(localStorage).forEach(function (key) {
    console.log(localStorage.getItem(key));
  

var li = document.createElement('li');
li.textContent = key + '-' + localStorage.getItem(key);
document.querySelector('#scoreslist').appendChild(li);
  });

  document.querySelector('.hideDisplay').style.display = 'none';
  document.querySelector('#results').style.display = 'none';
}






