// Array of Words
const words = [
"Hello",
"Programming",
"Code",
"JavaScript",
"Town",
"Country",
"Testing",
"Youtube",
"Linkedin",
"Twitter",
"Github",
"Letcode",
"Internet",
"Python",
"Scala",
"Destructuring",
"Paradign",
"Styling",
"Cascade",
"Documentation",
"Coding",
"Funny",
"Working",
"Dependencies",
"Task",
"Runner",
"Roles",
"Test",
"Rust",
"Playing"
];

//Setting Level
const lvis = {
    "Easy" :5,
    "Normal":3,
    "Hard":2
};

// Default Level
let defaultlevelName = "Normal" // Change level
let defaultlevelSeconds = lvis[defaultlevelName];

//Catch Selectors

let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let uncomingWords = document.querySelector(".uncoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finshMessage = document.querySelector(".finsh");


// Setting Level Name + Seconds + Score

lvlNameSpan.innerHTML = defaultlevelName;
secondSpan.innerHTML = defaultlevelSeconds;
timeLeftSpan.innerHTML = defaultlevelSeconds;
scoreTotal.innerHTML = words.length ;

// Disable Paste Event

input.onpaste = function(){
    return false;
};

startButton.onclick = function (){
if((words.indexOf("Hello"))===0){
    setTimeout(() => {
        timeLeftSpan.innerHTML =defaultlevelSeconds + 3
    },0);
}
    this.remove();
    input.focus();
    getWords();
    scoreGot.innerHTML = 0;
};

function getWords (){
    // Get Random Word
    let randamWord = words[Math.floor(Math.random() * words.length)];
    // Get Word
    let wordIndex = words.indexOf(randamWord);
    // Remove Word From Array
    words.splice(wordIndex,1);
    // Show the Word
    theWord.innerHTML =randamWord;
    // Empty Upcoming Word
    uncomingWords.innerHTML = "";
    // Generate Words
    for (let i =0; i<words.length; i++){
        let div = document.createElement("div");
        let text = document.createTextNode(words[i]);
        div.appendChild(text);
        uncomingWords.appendChild(div);
    };
    // Call Start Play Function
    startPlay();
};


function startPlay(){
    timeLeftSpan.innerHTML =defaultlevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if(timeLeftSpan.innerHTML === "0"){
            //Stop Timer
            clearInterval(start);
            // Compare Words
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
                // Empty Field
                input.value = "";
                // Increase Score
                scoreGot.innerHTML++;
                if(words.length > 0){
                    getWords();
                }else {
                let span = document.createElement("span");
                span.className = "good";
                let spanText = document.createTextNode("Congratulate");
                span.appendChild(spanText);
                finshMessage.appendChild(span)
                // Remove Upcoming Words
                uncomingWords.remove();
                }
            } else {
                let span = document.createElement("span");
                span.className = "bad";
                let spanText = document.createTextNode("Go Fuck you self man");
                span.appendChild(spanText);
                finshMessage.appendChild(span);
            }
        }
    }, 1000);
}

let le1 = document.querySelector(".le-1")
le1.onclick = function(){
    lvlNameSpan.innerHTML = le1.innerHTML
    secondSpan.innerHTML = lvis["Easy"];
}
let le2 = document.querySelector(".le-2")
le2.onclick = function(){
    lvlNameSpan.innerHTML = le2.innerHTML
    secondSpan.innerHTML = lvis["Normal"];
}
let le3 = document.querySelector(".le-3")
le3.onclick = function(){
    lvlNameSpan.innerHTML = le3.innerHTML
    secondSpan.innerHTML = lvis["Hard"];
}





// Save score with date in localStorage
// make levels in selectbox to make client choose from it
// choose hard words from array to hard level
 // add 3s to the first word ok


// let data =window.localStorage.setItem("score",scoreGot.value)
// let score = window.localStorage.getItem("score")
// scoreGot.innerHTML = score

