function displaySpeed()
{

let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let submitBtnEl = document.getElementById("submitBtn");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let timerId = null

function displayTimer() {
    let counter = 0;
    timerEl.textContent = counter;
    timerId = setInterval(function() {
        counter = counter + 1;
        timerEl.textContent = counter;
    }, 1000);
    submitBtnEl.addEventListener("click", function() {
        let displayText = quoteDisplayEl.textContent;
        let inputText = quoteInputEl.value;
        if (inputText === displayText) {
            let time = timerEl.textContent;
            resultEl.textContent = "You typed in " + time + " seconds";
            clearInterval(timerId);
        } else {
            resultEl.textContent = "You typed incorrect sentence";
        }
    })

}

function getRandomText() {

    spinnerEl.classList.remove("d-none");
    let option = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/random-quote";

    fetch(url, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            quoteDisplayEl.textContent = jsonData.content;
            displayTimer();
        });
}

getRandomText();

resetBtnEl.addEventListener("click", function() {
    clearInterval(timerId);
    quoteInputEl.value = "";
    getRandomText();
})

}