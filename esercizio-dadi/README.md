## EXERCISE

**Dice Game**:
Generate a random number from 1 to 6 for both the player and the computer.
Determine the winner based on who scores higher.

### SOLUTION 

**Data Collection**
1. Get elements from DOM;
2. set variables:
- user number
- computer number
- result
- condition flag named firstBtnClicked

```javascript
// DATA COLLECTION
const yourDiceBtn = document.getElementById("your-dice");
const computerDiceBtn = document.getElementById("computer-dice");
let resultPrinted = document.querySelector(".result-printed");
let userNumber;
let computerNumber;
let result;
let firstBtnClicked = false;
```

**Program Logic**
1. set the first button event listener: the user dice.

```javascript
// first button
yourDiceBtn.addEventListener("click", function () {
  userNumber = Math.ceil(Math.random() * 6);
  const userNumberPrinted = `your number: ${userNumber}`;
  resultPrinted.innerHTML += ` <div>${userNumberPrinted}</div>`;
  firstBtnClicked = true;
});
```
2. set the second button event listener: the computer dice. 
3. Inside the computer dice event listener funcion set the conditions to print the result
4. set a timeout function to delay the result printing

```javascript
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
    resultPrinted.innerHTML += ` <div>${computerNumberPrinted}</div>`;

    // display result
    setTimeout(function () {
      resultPrinted.innerHTML += `<div>${result}</div>`;
    }, 1000);
    firstBtnClicked = false;
  } else {
    alert("You have to roll your dice first.");
    window.location.reload;
  }
});

```

