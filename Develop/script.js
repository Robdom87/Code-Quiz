

//array with all code questions and answers
var codeQs = [
    ["How many legs does the Legs of Man have", [["Three.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["How many tails does a Manx cat have", [["None.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["How many teeth does an aardvark have", [["None.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Which sea creature has three hearts", [["Octopus.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Which instrument has forty-seven strings and seven pedals", [["Harp.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Whose face was said to have launched 1,000 ships", [["Helen of Troy.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["In the traditional rhyme, how many mice were blind", [["Three.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["How many bones does an adult human have", [["Two hundred and six.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["How many pedals do most modern pianos have", [["Three.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Water boils at 212 degrees on which temperature scale", [["Fahrenheit.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Who went to school with a lamb", [["Mary.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Who sat in a corner eating a Christmas pie", [["Little Jack Horner.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Where did the lady wearing rings on her fingers and bells on her toes ride to", [["Banbury Cross.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Which item of nursery furniture was set on top of a tree", [["Cradle.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Which traditional children's rhyme was about the plague", [["Ring O'Roses.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Name the once-popular boy's building game which was aimed at developing an understanding of mechanics and electronics", [["Mechano", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Name the doll which was famous for crying", [["Tiny Tears", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Which furry creatures lived on Wimbledon Common", [["Wombles.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["If you rode a Chopper, what was this", [["Bicycle.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["What was soaked in vinegar then hung on a string", [["Conker.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["What is the Italian word for 'pie'", [["Pizza.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["What is the national flower of Wales", [["Daffodil.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Which Australian marsupial enjoys eating eucalyptus leaves", [["Koala.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Which reptile should you never smile at, according to the song", [["Crocodile.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Alfred, an ancient King of Wessex, is famous for burning what", [["Cakes.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["In nautical terms, what is the opposite of port", [["Starboard.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["How many bones are there on a Skull & Crossbones flag", [["Three.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["What was Marilyn Monroe's natural hair colour", [["Ginger.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Name Fred Astaire's famous red-haired dancing partner", [["Ginger Rogers", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["What is the world's tallest tree", [["The coast redwood, one of three sequoia species.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["What name was given to the soldiers who protected Roman emperors", [["Praetorian Guard.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Which two metals is pewter made from", [["Tin and lead.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["What was Louis Armstrong's chosen form of music", [["Jazz.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Name the port of Rome", [["Ostia", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Paul Newman ate fifty eggs in which film", [["Cool Hand Luke.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Don Alfonso is the lead role in which opera", [["Cosi Fan Tutte by Mozart.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Which city does the River Lagan flow through", [["Belfast.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Who sang about being an eggman and a walrus", [["The Beatles.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["What takes place in Hong Kong's Happy Valley", [["Horse racing.", true], ["Spoils", false], ["For", false], ["King", false]]],
    ["Which country does the sport of pelato come from", [["Spain.", true], ["Spoils", false], ["For", false], ["King", false]]]
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
    highScores.unshift(score);
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
    highScores.unshift(initalPlusScores);
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
    for (var i = 0; i < pastScores.length; i++) {

        printedScores = printedScores + pastScores[i] + "\n";
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