

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
//console.log(codeQs[22][0]); should print question
//console.log(codeQs[22][1][3]); question 22 4th response
//console.log(codeQs[22][1][0][1]); should be true

//global array to hold all hish scores
var highScores = [
];


//upon touching the start button, code page is opened and populated appropiately   
var startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", initiateQuiz);

function initiateQuiz() {
    
    document.getElementById("start").style.display = "none";
    document.getElementById("questionSect").style.display = "block";
    var qAsked = [-1];
    fillQ(qAsked);
    var nextBtn = document.querySelector("#next");
    nextBtn.addEventListener("click", function(){ //how to add a function with a parameter in an event listener
        fillQ(qAsked);// <- There use your function with param in brackets
     }, false);
    var wrong = wrongQs();

    timer(wrong);
};

//fillQ populates the questions at random, and places the answers randomly as well
function fillQ(qAsked) {
    //fills random question
    let random = Math.floor(Math.random() * codeQs.length);
    while (qAsked.includes(random)) {
        random = Math.floor(Math.random() * codeQs.length);
    }
    document.getElementById("question").innerHTML = codeQs[random][0];
    qAsked.push(random);

    //fill response buttons in random order
    let randR = Math.floor(Math.random() * 4);
    var placedR = [];
    placedR.push(randR);
    document.getElementById("1").innerHTML = codeQs[random][1][randR][0];

    while (placedR.includes(randR)) {
        randR = Math.floor(Math.random() * 4);
    }
    document.getElementById("2").innerHTML = codeQs[random][1][randR][0];
    placedR.push(randR);

    while (placedR.includes(randR)) {
        randR = Math.floor(Math.random() * 4);
    }
    document.getElementById("3").innerHTML = codeQs[random][1][randR][0];
    placedR.push(randR);

    while (placedR.includes(randR)) {
        randR = Math.floor(Math.random() * 4);
    }
    document.getElementById("4").innerHTML = codeQs[random][1][randR][0];
    placedR.push(randR);
    console.log("g");
    return qAsked;

}

//random and array to propulate randomly and not repeat, with answers in different locations



//user toggles one of the buttons and then sumbit, gets feedback if its correct or not, then can proceed next
//array to count all write answers and calc score
function wrongQs() {
    return 0;
}

//add timer that starts when code is started and is reduced by 10 everytime user gets a wrong answer

function timer(wrong) {
    var endTime = new Date().getTime() + 76000; //outside of setInterval so it is not updated
    var countdown = setInterval(function () {
        var startTime = new Date().getTime(); //gets the current time of todays date in miliseconds
        var timeLeft = endTime - startTime - wrong;
        var seconds = Math.floor(timeLeft / 1000);
        document.getElementById("time").innerHTML = "Time: " + seconds + " sec";
        if (timeLeft <= 0) {
            clearInterval(countdown); //closes interval
            endQuiz(); //close outs code page when done 
            return true;
        }
    }, 1000); //updates the timer every second
};

//end page open and shows scores, also allows the user to submit their intitals to the scores
//array to hold all scores
//button to restart quiz?
function endQuiz() {
    document.getElementById("questionSect").style.display = "none";
    document.getElementById("end").style.display = "block";
};

//open up high score when view scores and is pressed and populates the page appropriately
    //button to clear scores
    //button to go back to the start of the page