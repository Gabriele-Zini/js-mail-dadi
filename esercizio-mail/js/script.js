const arrayEmail = [
  "giuliocesare@gmail.com",
  "giuseppeverdi@hotmail.it",
  "mariorossi@libero.it",
  "gioacchinorossini@tiscali.it",
  "napoleonebonaparte",
];

const btn = document.querySelector(".btn");
const userInput = document.querySelector(".user-input");
const answer = document.querySelector(".answer");
const answerContent = "";
let conditionFlag = false;

btn.addEventListener("click", function () {
  const userEmail = userInput.value;
  answer.classList.remove("d-hidden");

  for (i = 0; i < arrayEmail.length; i++) {
    if (userEmail === arrayEmail[i]) {
      conditionFlag = true;
    }
  }

  if (conditionFlag) {
    answer.innerHTML = `<div>Valid email, access granted</div>`;
  } else {
    answer.innerHTML = `<div>Invalid email, access denied.</div>`;
  }
});

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", function () {
  answer.innerHTML = "";
  answer.classList.add("d-hidden");
  userInput.value = "";
  conditionFlag = false;
});
