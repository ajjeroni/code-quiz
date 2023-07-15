var startButton = document.querySelector("#start-button"); 
var questioner = document.querySelector("#question");
var highscore = document.querySelector("#highscore");
var scoreBlock = document.querySelector("#score-block");
var time = document.querySelector("#time");
var scoreSection = document.querySelector("#view-score");
var answerElements = document.querySelector(".answers");
var A = document.querySelector("#A");
var B = document.querySelector("#B");
var C = document.querySelector("#C");
var D = document.querySelector("#D");
var response = document.querySelector("#response");
var quizBlock = document.querySelector("#quiz-block");
var initial = document.querySelector("#initial");
var score = document.querySelector("#score");
var timeLeft = 75;
var isFunctionCalled = false;
var name = localStorage.getItem("hs");
var submit = document.querySelector("#sumbit");
var playAgain = document.querySelector("#play-again");
var lastPage = document.querySelector("#last-page");
var finalText = document.querySelector("#final-text");
var playAgain2 = document.querySelector("#play-again2");
var finalText2 = document.querySelector("#final-text2");
var playAgain3 = document.querySelector("#play-again3");
var questions = [
    {
        question: "question 1",
        answerChoice: ["A","B","C","D"],
        correctAnswer: "A"
    },
    {
        question: "question 2",
        answerChoice: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "question 3",
        answerChoice: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "question 4",
        answerChoice: ["A", "B", "C", "D"],
        correctAnswer: "D"
    }
]
startButton.addEventListener("click", function() {
    document.querySelector("#start-block").setAttribute("class", "hide");
    document.querySelector("#quiz-block").setAttribute("class", "");
    setTime();
    firstQuestion();
});
highscore.addEventListener("click", function() {
    time.setAttribute("class", "hide");
    startButton.setAttribute("class", "hide");
    document.querySelector("#start-block").setAttribute("class", "hide");
    document.querySelector("#final-text2").setAttribute("class", "");
    highscore.setAttribute("class", "hide");
    playAgain3.setAttribute("class", "");
    var lsInitial = localStorage.getItem("initial");
    var lsHs = localStorage.getItem("hs");
    finalText2.textContent = "Your Score: " + lsInitial + " : " + lsHs;
});
playAgain.addEventListener("click", function() {
    Reload();     
});
playAgain2.addEventListener("click", function() {
    Reload();     
});
playAgain3.addEventListener("click", function() {
    Reload();
});
function firstQuestion() {
    var selectedQuestion = questions[0].question;
    questioner.textContent = selectedQuestion;
    for (i=0; i<4; i++) {
        var displayAnswers = answerElements.children[i];
        var answers = questions[0].answerChoice[i];
        displayAnswers.textContent = answers;
    }

    // Clear the previous event listeners
    clearEventListeners();

    A.addEventListener("click", function() {
        response.innerHTML = "";
        response.textContent = "Correct";
        secondQuestion();
    });

    B.addEventListener("click", function() {
        response.innerHTML = "";
        response.textContent = "Wrong";
        subtractTime()
    });

    C.addEventListener("click", function() {
        response.innerHTML = "";
        response.textContent = "Wrong";
        subtractTime()
    });

    D.addEventListener("click", function() {
        response.innerHTML = "";
        response.textContent = "Wrong";
        subtractTime()
    });
}
function secondQuestion() {
    var selectedQuestion = questions[1].question;
    questioner.textContent = selectedQuestion;
    for (i=0; i<4; i++) {
        var displayAnswers = answerElements.children[i];
        var answers = questions[1].answerChoice[i];
        displayAnswers.textContent = answers;
    }

    // Clear the previous event listeners
    clearEventListeners();

    A.addEventListener("click", function() {
        response.innerHTML = "";
        response.textContent = "Wrong";
        subtractTime()
    });

    B.addEventListener("click", function() {
        response.innerHTML = "";
        response.textContent = "Correct";
        // Call the next function after a delay (e.g., 1 second)
        thirdQuestion();    
    });

    C.addEventListener("click", function() {
        response.innerHTML = "";
        response.textContent = "Wrong";
        subtractTime()
    });

    D.addEventListener("click", function() {
        response.innerHTML = "";
        response.textContent = "Wrong";
        subtractTime()
    });
}
function thirdQuestion() {
    var selectedQuestion = questions[2].question
    questioner.textContent = selectedQuestion
    for (i=0;i<4;i++) {
        var displayAnswers = answerElements.children[i]
        var answers = questions[2].answerChoice[i]
        displayAnswers.textContent = answers
    } 
    clearEventListeners();  
    A.addEventListener("click",function() {
        response.innerHTML = ""
        response.textContent = "Wrong"
        subtractTime()
    })
    B.addEventListener("click", function() {
    response.innerHTML = ""
        response.textContent = "Wrong"
        subtractTime()
    })
    C.addEventListener("click", function() {
    response.innerHTML = ""
        response.textContent = "Correct"
        fourthQuestion();    
    })
    D.addEventListener("click", function() {
    response.innerHTML = ""
        response.textContent = "Wrong"
        subtractTime()
    });
}
function fourthQuestion() {
    var selectedQuestion = questions[3].question
    questioner.textContent = selectedQuestion
    for (i=0;i<4;i++) {
        var displayAnswers = answerElements.children[i]
        var answers = questions[3].answerChoice[i]
        displayAnswers.textContent = answers
    }    
    A.addEventListener("click",function() {
        response.innerHTML = ""
        response.textContent = "Wrong"
        subtractTime()
    })
    B.addEventListener("click", function() {
    response.innerHTML = ""
        response.textContent = "Wrong"
        subtractTime()
    })
    C.addEventListener("click", function() {
    response.innerHTML = ""
        response.textContent = "Wrong"
        subtractTime()
    })
    D.addEventListener("click", function() {
    response.innerHTML = ""
        response.textContent = "Correct"
        ending();
    });
}
// Function to clear the event listeners
function clearEventListeners() {
    // Clone the elements
    var a = A.cloneNode(true);
    var b = B.cloneNode(true);
    var c = C.cloneNode(true);
    var d = D.cloneNode(true);

    // Replace the elements with their clones
    A.parentNode.replaceChild(a, A);
    B.parentNode.replaceChild(b, B);
    C.parentNode.replaceChild(c, C);
    D.parentNode.replaceChild(d, D);

    // Assign the new elements to the variables
    A = a;
    B = b;
    C = c;
    D = d;
}
function ending() {
    document.querySelector("#score-block").setAttribute("class", "");
    document.querySelector("#start-block").setAttribute("class", "hide");
    document.querySelector("#time").setAttribute("class", "hide");
    document.querySelector("#view-score").setAttribute("class", "hide");
    document.querySelector("#quiz-block").setAttribute("class", "hide");
    score.textContent = "Your Score: " + (timeLeft+5);
    isFunctionCalled = true;
}
function setTime() {
        var timerInterval = setInterval(function() {
          timeLeft--;
          time.textContent = "Time: " + timeLeft;
          
          if (isFunctionCalled) {
            clearInterval(timerInterval);
            }

          if(timeLeft === 0) {
            clearInterval(timerInterval);
            ending();
          }
        }, 1000);
}
function subtractTime() {
        timeLeft -= 5;
        if (timeLeft < 0) {
          timeLeft = 0;
        };
}
function getValue() {
    var initial = document.querySelector("#initial");
    playAgain2.setAttribute("class","");
    var inputValue = initial.value;
    console.log(inputValue);
    localStorage.setItem("hs",(timeLeft+6));
    localStorage.setItem("initial",inputValue);
    lastPage.setAttribute("class", "");
    scoreBlock.setAttribute("class", "hide");
    finalText.setAttribute("class", "");
    finalText.textContent = "Your Score: " + inputValue + " : " + (timeLeft+6);
}
function Reload() {
    location.reload();
}
