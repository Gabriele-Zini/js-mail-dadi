// DATA COLLECTION
const yourDiceBtn = document.getElementById("your-dice");
const computerDiceBtn = document.getElementById("computer-dice");
let resultPrinted = document.querySelector(".result-printed");
let userNumber;
let computerNumber;
let result;

// PROGRAM LOGIC

// first button
yourDiceBtn.addEventListener("click", function () {
  userNumber = Math.ceil(Math.random() * 6);
  const userNumberPrinted = `your number: ${userNumber}`;
  resultPrinted.innerHTML += ` <div>${userNumberPrinted}</div>`;
});

// second button
computerDiceBtn.addEventListener("click", function () {
  let computerNumber = Math.ceil(Math.random() * 6);
  const computerNumberPrinted = `computer number: ${computerNumber}`;
  if (userNumber > computerNumber) {
    result = "You won against the computer.";
  } else if (computerNumber > userNumber) {
    result = "You lost against the computer.";
  } else {
    result = "You tied against the computer.";
  }
  resultPrinted.innerHTML += ` <div>${computerNumberPrinted}</div>`;

  setTimeout(function () {
    resultPrinted.innerHTML += `<div>${result}</div>`;
  }, 1000);
});
