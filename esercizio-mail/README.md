## EXERCISE

**Email**:

Ask the user for their email,
check if it is on the list of allowed access,
print an appropriate message regarding the outcome of the check.

### SOLUTION

**Data Collection**

1. set an array of email address
2. get the html from the DOM with querySelector
3. set a condition flag named conditionFlag and initialize it with false

```javascript
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

```

**Program Logic**
1. Set an event listener function on the "send" button.
2. Set an iteration on the email array with a for loop.
3. Set the condition when the flag is true.
4. Set the condition to validate or invalidate the user input.

```javascript
btn.addEventListener("click", function () {
  const userEmail = userInput.value;

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

```


