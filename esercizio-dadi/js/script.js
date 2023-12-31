// DATA COLLECTION
const yourDiceBtn = document.getElementById("your-dice");
const computerDiceBtn = document.getElementById("computer-dice");
let resultPrinted = document.querySelector(".result-printed");
let userNumber;
let computerNumber;
let result;
let firstBtnClicked = false;

// PROGRAM LOGIC

// first button
yourDiceBtn.addEventListener("click", function () {
  userNumber = Math.ceil(Math.random() * 6);
  const userNumberPrinted = `your number: ${userNumber}`;
  resultPrinted.innerHTML += ` <div class="mini-card bg-light-salmon">${userNumberPrinted}</div>`;
  firstBtnClicked = true;
});

// second button
computerDiceBtn.addEventListener("click", function () {
  let computerNumber = Math.ceil(Math.random() * 6);
  const computerNumberPrinted = `computer number: ${computerNumber}`;
  if (firstBtnClicked) {
    if (userNumber > computerNumber) {
      result = "You won against the computer.";
    } else if (computerNumber > userNumber) {
      result = "You lost against the computer.";
    } else {
      result = "You tied against the computer.";
    }
    resultPrinted.innerHTML += ` <div class="mini-card bg-light-beige">${computerNumberPrinted}</div>`;

    // display result
    setTimeout(function () {
      resultPrinted.innerHTML += `<div class="mini-card bg-white">${result}</div>`;
    }, 1000);
    firstBtnClicked = false;
  } else {
    alert("You have to roll your dice first.");
    window.location.reload;
  }
});


const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", function () {
  resultPrinted.innerHTML = "";
  userNumber = "";
  computerNumber = "";
  result = "";
  firstBtnClicked = false;
});

