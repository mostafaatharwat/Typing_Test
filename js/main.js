// array of words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
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

// setting levels
let lvls= {
    "Easy" : 5,
    "Normal" : 3,
    "Hard" : 2
}

// default level
let defaultLevelName = "Easy"; //change level from here <by select box>
let defaultLevelSeconds = lvls[defaultLevelName] //if easy =5 , normal = 3 , hard =2

// catch selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// setting level name + second + score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// disable paste event
input.onpaste = function(){
    return false;
}

// start game
startButton.onclick = function(){
    this.remove();
    input.focus();
    // generate word function
    genWords()
}

function genWords(){
    // Get ramdom word from array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // Get word index
    let wordIndex = words.indexOf(randomWord);
    // remove word from array splice(index,delete count)
    words.splice(wordIndex , 1);
    // show the random word
    theWord.innerHTML = randomWord;
    // empty uncoming words
    upcomingWords.innerHTML = "";
    // generate words
    for(let i = 0 ; i < words.length ; i++){
        //create div element
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div)
    }
    // call strat play function
    startPlay()
}

function startPlay(){
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(()=>{
        timeLeftSpan.innerHTML--;
        if(timeLeftSpan.innerHTML === "0"){
            // stop timer
            clearInterval(start);
            // compare words
            if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
                //empty input field
                input.value = "";
                // increase score
                scoreGot.innerHTML++;
                if(words.length > 0){
                    // call generate word funvtion
                    genWords();
                }
                else{
                    let span = document.createElement("span");
                    span.className = "Good";
                    let spanText = document.createElement("Congratulations");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    // remove upcoming wods box
                    upcomingWords.remove();
                }
            }
            else{
                let span = document.createElement("span");
                span.className = "bad"
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
    }, 1000)
}

// tasks
// save the score time (day) in local storage
// make the level dinamic (by using select box) easy , normal ,hard
// break of logic => break the two function to more
// select array of word to each level 
// make the box contain of structure of this play
// in first word add 3 seconds 