

//array with all code questions and answers
var codeQs = [
    ["Commonly used data types DO NOT include ______.", [["Alerts", true], ["Booleans", false], ["Strings", false], ["Numbers", false]]],
    ["The condition in an if / else statement is enclosed within ______.", [["Paranthesis", true], ["Curly Brackets", false], ["Quotes", false], ["Square Brackets", false]]],
    ["Arrays in JavaScript can be used to store _____.", [["All of the above", true], ["Other Arrays", false], ["Booleans", false], ["Numbers and Strings", false]]],
    ["String values must be enclosed within _____ when being assigned to variables.", [["Quotes", true], ["Curly Brackets", false], ["Commas", false], ["Paranthesis", false]]],
    ["A very useful tool used during development and debugging for printing content to the debugger is:", [["console.log", true], ["terminal/bash", false], ["for loops", false], ["JavaScript", false]]]
];

//global variables
var wrong = 0;
var numQs = 0;
var btnClicked = 0;

//global array holding score
var highScores = [];
//global array holding the questions asked in the quiz
var qAsked = [];

//variables holding various containers from the html  
var startBtn = document.querySelector("#startBtn");
var r1Btn = document.querySelector("#r1");
var r2Btn = document.querySelector("#r2");
var r3Btn = document.querySelector("#r3");
var r4Btn = document.querySelector("#r4");
var scoreBtn = document.querySelector("#score");
var submitBtn = document.querySelector("#submit");
var clearBtn = document.querySelector("#clear");
var goBackBtn = document.querySelector("#goBack");

//initiated once the start quiz is clicked
function initiateQuiz() {
    //hide score link, start page, and display questions
    document.getElementById("start").style.display = "none";
    document.getElementById("score").style.visibility = "hidden";
    document.getElementById("questionSect").style.display = "block";

    //reset values for this test session
    wrong = 0;
    numQs = 0;
    highScores.splice(0, highScores.length);
    qAsked.splice(0, qAsked.length);

    //prints out first random question
    let random = Math.floor(Math.random() * codeQs.length);
    while (qAsked.includes(random)) {
        random = Math.floor(Math.random() * codeQs.length);
    }
    document.getElementById("question").innerHTML = codeQs[random][0];
    qAsked.push(random);

    //fills response buttons in random order for the first question
    let randR = Math.floor(Math.random() * 4);
    let placedR = [];
    placedR.push(randR);
    document.getElementById("r1").innerHTML = codeQs[random][1][randR][0];

    while (placedR.includes(randR)) {
        randR = Math.floor(Math.random() * 4);
    }
    document.getElementById("r2").innerHTML = codeQs[random][1][randR][0];
    placedR.push(randR);

    while (placedR.includes(randR)) {
        randR = Math.floor(Math.random() * 4);
    }
    document.getElementById("r3").innerHTML = codeQs[random][1][randR][0];
    placedR.push(randR);

    while (placedR.includes(randR)) {
        randR = Math.floor(Math.random() * 4);
    }
    document.getElementById("r4").innerHTML = codeQs[random][1][randR][0];
    placedR.push(randR);

    //initate timer
    timer();
};

//fillQ populates the questions at random, and places the answers randomly as well
function fillQ() {

    //add another question to the counter
    numQs++;

    //fills random question 
    let random = Math.floor(Math.random() * codeQs.length);

    //check if all questions have been asked
    if (codeQs.length === numQs) {
        return;
    } else {
        //cross references array to make sure its not repeated
        while (qAsked.includes(random)) {
            random = Math.floor(Math.random() * codeQs.length);
        }
    }
    document.getElementById("question").innerHTML = codeQs[random][0];
    qAsked.push(random);

    //fill response buttons in random order by cross referencing within an array for posted responses
    let randR = Math.floor(Math.random() * 4);
    let placedR = [];
    placedR.push(randR);
    document.getElementById("r1").innerHTML = codeQs[random][1][randR][0];

    while (placedR.includes(randR)) {
        randR = Math.floor(Math.random() * 4);
    }
    document.getElementById("r2").innerHTML = codeQs[random][1][randR][0];
    placedR.push(randR);

    while (placedR.includes(randR)) {
        randR = Math.floor(Math.random() * 4);
    }
    document.getElementById("r3").innerHTML = codeQs[random][1][randR][0];
    placedR.push(randR);

    while (placedR.includes(randR)) {
        randR = Math.floor(Math.random() * 4);
    }
    document.getElementById("r4").innerHTML = codeQs[random][1][randR][0];
    placedR.push(randR);
}

//initiated when response one is clicked and adds response 1 flag to btn clicked variable
function MC1() {
    btnClicked = 1;
    MC();
}

function MC2() {
    btnClicked = 2;
    MC();
}

function MC3() {
    btnClicked = 3;
    MC();
}

function MC4() {
    btnClicked = 4;
    MC();
}

function MC() {
    //display question footer
    document.getElementById("qFooter").style.display = "flex";

    //pull the question present
    var questionNum = qAsked.pop()

    //check which button was clicked
    if (btnClicked === 1) {
        //if button was clicked check if the value in the button matches the correct answer in the array
        if (codeQs[questionNum][1][0][0] === document.getElementById("r1").innerHTML) {
            document.getElementById("check").innerHTML = "Correct!";
        } else {
            document.getElementById("check").innerHTML = "Wrong!";
            wrong++;
        }
    } else if (btnClicked === 2) {
        if (codeQs[questionNum][1][0][0] === document.getElementById("r2").innerHTML) {
            document.getElementById("check").innerHTML = "Correct!";
        } else {
            document.getElementById("check").innerHTML = "Wrong!";
            wrong++;
        }
    } else if (btnClicked === 3) {
        if (codeQs[questionNum][1][0][0] === document.getElementById("r3").innerHTML) {
            document.getElementById("check").innerHTML = "Correct!";
        } else {
            document.getElementById("check").innerHTML = "Wrong!";
            wrong++;
        }
    } else if (btnClicked === 4) {
        if (codeQs[questionNum][1][0][0] === document.getElementById("r4").innerHTML) {
            document.getElementById("check").innerHTML = "Correct!";
        } else {
            document.getElementById("check").innerHTML = "Wrong!";
            wrong++;
        }
    }


    //return question asked to array
    qAsked.push(questionNum);

    //prints out the next question
    fillQ();

}

//add timer that starts when code is started and is reduced by 10 everytime user gets a wrong answer
function timer() {
    var endTime = new Date().getTime() + 76000; //outside of setInterval so it is not updated
    var countdown = setInterval(function () {
        var startTime = new Date().getTime(); //gets the current time of todays date in miliseconds
        var timeLeft = endTime - startTime - (wrong * 10000);
        var seconds = Math.floor(timeLeft / 1000);
        document.getElementById("time").innerHTML = "Time: " + seconds + " sec";
        //close out timer and quiz if timer out or all questions asked
        if (timeLeft <= 0 || numQs === codeQs.length) {
            clearInterval(countdown);
            document.getElementById("time").innerHTML = "Time: 0 sec";
            //close outs code page when done 
            endQuiz();
            return;
        }
    }, 1000);
};

//initated when out of time and all questions have been asked
function endQuiz() {
    //enable submit button
    submitBtn.disabled = false;
    //display end page and scores link as well as hiding questions section
    document.getElementById("questionSect").style.display = "none";
    document.getElementById("end").style.display = "block";
    document.getElementById("score").style.visibility = "visible";

    //calc score and send to highscores array and display
    let score = Math.round(100 * (numQs - wrong) / codeQs.length);
    highScores.push(score);
    document.getElementById("scoreStated").innerHTML = "Your final score is " + score + "%!";

};

//sends initals and scores to be save to local drive
function submit() {
    //disable submit button after pressing
    submitBtn.disabled = true;
    //pull initials
    let inputValue = document.getElementById("input").value;
    //add intials to current scores
    let initalPlusScores = inputValue + " - " + highScores.pop();
    highScores.push(initalPlusScores);
    //pull scores from memory
    var storedScore = localStorage.getItem("highScores");
    //add to highscore array
    highScores.push(storedScore);
    //push back up to memory as a string
    localStorage.setItem("highScores", highScores.join());
}

//initiated after pressing scores link and populate scores page
function scorePage() {
    //hide start and end pages
    document.getElementById("end").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("scores").style.display = "block";

    //pull scores from local storage
    var storedScore = localStorage.getItem("highScores");

    //break string into an array then run forloop to add scores into a single string with \n
    var pastScores = storedScore.split(",");
    var printedScores = "";
    for (var i = 0; i < pastScores.length-1; i++) {

        printedScores = printedScores + "<p>" + pastScores[i] + "</p>";
    
    }

    //add string to box
    document.getElementById("allScores").innerHTML = printedScores;

}

//initiated after clicking cleear and clears out local drive and text displayed in box
function clear() {
    localStorage.setItem("highScores", "");
    var storedScore = localStorage.getItem("highScores");
    document.getElementById("allScores").innerHTML = storedScore;
}

//initated with goback and return to starting page and make everything else unviewable
function goBack() {
    document.getElementById("start").style.display = "block";
    document.getElementById("questionSect").style.display = "none";
    document.getElementById("score").style.visibility = "visible";
    document.getElementById("end").style.display = "none";
    document.getElementById("scores").style.display = "none";

}

//event listeners for all buttons and links
startBtn.addEventListener("click", initiateQuiz);
r1Btn.addEventListener("click", MC1);
r2Btn.addEventListener("click", MC2);
r3Btn.addEventListener("click", MC3);
r4Btn.addEventListener("click", MC4);
scoreBtn.addEventListener("click", scorePage);
submitBtn.addEventListener("click", submit);
goBackBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clear);