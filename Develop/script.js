

//array with all code questions and answers
var codeQs = [
    ["How many legs does the Legs of Man have", [["Three.", true], "Spoils", "For", "King"]],
    ["How many tails does a Manx cat have", [["None.", true], "Spoils", "For", "King"]],
    ["How many teeth does an aardvark have", [["None.", true], "Spoils", "For", "King"]],
    ["Which sea creature has three hearts", [["Octopus.", true], "Spoils", "For", "King"]],
    ["Which instrument has forty-seven strings and seven pedals", [["Harp.", true], "Spoils", "For", "King"]],
    ["Whose face was said to have launched 1,000 ships", [["Helen of Troy.", true], "Spoils", "For", "King"]],
    ["In the traditional rhyme, how many mice were blind", [["Three.", true], "Spoils", "For", "King"]],
    ["How many bones does an adult human have", [["Two hundred and six.", true], "Spoils", "For", "King"]],
    ["How many pedals do most modern pianos have", [["Three.", true], "Spoils", "For", "King"]],
    ["Water boils at 212 degrees on which temperature scale", [["Fahrenheit.", true], "Spoils", "For", "King"]],
    ["Who went to school with a lamb", [["Mary.", true], "Spoils", "For", "King"]],
    ["Who sat in a corner eating a Christmas pie", [["Little Jack Horner.", true], "Spoils", "For", "King"]],
    ["Where did the lady wearing rings on her fingers and bells on her toes ride to", [["Banbury Cross.", true], "Spoils", "For", "King"]],
    ["Which item of nursery furniture was set on top of a tree", [["Cradle.", true], "Spoils", "For", "King"]],
    ["Which traditional children's rhyme was about the plague", [["Ring O'Roses.", true], "Spoils", "For", "King"]],
    ["Name the once-popular boy's building game which was aimed at developing an understanding of mechanics and electronics", [["Mechano", true], "Spoils", "For", "King"]],
    ["Name the doll which was famous for crying", [["Tiny Tears", true], "Spoils", "For", "King"]],
    ["Which furry creatures lived on Wimbledon Common", [["Wombles.", true], "Spoils", "For", "King"]],
    ["If you rode a Chopper, what was this", [["Bicycle.", true], "Spoils", "For", "King"]],
    ["What was soaked in vinegar then hung on a string", [["Conker.", true], "Spoils", "For", "King"]],
    ["What is the Italian word for 'pie'", [["Pizza.", true], "Spoils", "For", "King"]],
    ["What is the national flower of Wales", [["Daffodil.", true], "Spoils", "For", "King"]],
    ["Which Australian marsupial enjoys eating eucalyptus leaves", [["Koala.", true], "Spoils", "For", "King"]],
    ["Which reptile should you never smile at, according to the song", [["Crocodile.", true], "Spoils", "For", "King"]],
    ["Alfred, an ancient King of Wessex, is famous for burning what", [["Cakes.", true], "Spoils", "For", "King"]],
    ["In nautical terms, what is the opposite of port", [["Starboard.", true], "Spoils", "For", "King"]],
    ["How many bones are there on a Skull & Crossbones flag", [["Three.", true], "Spoils", "For", "King"]],
    ["What was Marilyn Monroe's natural hair colour", [["Ginger.", true], "Spoils", "For", "King"]],
    ["Name Fred Astaire's famous red-haired dancing partner", [["Ginger Rogers", true], "Spoils", "For", "King"]],
    ["What is the world's tallest tree", [["The coast redwood, one of three sequoia species.", true], "Spoils", "For", "King"]],
    ["What name was given to the soldiers who protected Roman emperors", [["Praetorian Guard.", true], "Spoils", "For", "King"]],
    ["Which two metals is pewter made from", [["Tin and lead.", true], "Spoils", "For", "King"]],
    ["What was Louis Armstrong's chosen form of music", [["Jazz.", true], "Spoils", "For", "King"]],
    ["Name the port of Rome", [["Ostia", true], "Spoils", "For", "King"]],
    ["Paul Newman ate fifty eggs in which film", [["Cool Hand Luke.", true], "Spoils", "For", "King"]],
    ["Don Alfonso is the lead role in which opera", [["Cosi Fan Tutte by Mozart.", true], "Spoils", "For", "King"]],
    ["Which city does the River Lagan flow through", [["Belfast.", true], "Spoils", "For", "King"]],
    ["Who sang about being an eggman and a walrus", [["The Beatles.", true], "Spoils", "For", "King"]],
    ["What takes place in Hong Kong's Happy Valley", [["Horse racing.", true], "Spoils", "For", "King"]],
    ["Which country does the sport of pelato come from", [["Spain.", true], "Spoils", "For", "King"]]
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

    function initiateQuiz (){
        document.getElementById("start").style.display = "none";
        document.getElementById("questions").style.display= "block";
        var wrong = 73000;
        var outOfTime = timer(wrong); 
        //close outs code page when done
        if (outOfTime) {
            document.getElementById("questions").style.display = "none";
            return;
        }

    };
    //random and array to propulate randomly and not repeat, with answers in different locations



//user toggles one of the buttons and then sumbit, gets feedback if its correct or not, then can proceed next
    //array to count all write answers and calc score

//add timer that starts when code is started and is reduced by 10 everytime user gets a wrong answer
    
    function timer (wrong) {
        var endTime = new Date().getTime()+ 76000;
        var countdown = setInterval(function(){
            var startTime = new Date().getTime();
            var timeLeft = endTime - startTime - wrong;
            var seconds = Math.floor(timeLeft / 1000);
            document.getElementById("time").innerHTML ="Time: " + seconds + " sec";      
            if (timeLeft <= 0) {
                clearInterval(countdown);
                return true;
            }
        }, 1000);     
    };

//end page open and shows scores, also allows the user to submit their intitals to the scores
    //array to hold all scores
    //button to restart quiz?

//open up high score when view scores and is pressed and populates the page appropriately
    //button to clear scores
    //button to go back to the start of the page