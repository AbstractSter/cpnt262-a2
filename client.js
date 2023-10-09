// create counter variable that can be shown on the page and added to to or subtracted from
  let count = 100;
  const displayCount = document.querySelector("#display-input");
  const increaseButton = document.querySelector("#increase-count");
  const decreaseButton = document.querySelector("#decrease-count");
// create a function that can add from the variable by 1
function increaseCount () {
  // change the count variable
  count++;
  // update the DOM
  document.querySelector("#count").innerHTML = count;
}
// create a function that can subtract from the variable by 1
function decreaseCount () {
  count--;
  document.querySelector("#count").innerHTML = count;
}

increaseButton.addEventListener("click", function () {
    increaseCount();
})

decreaseButton.addEventListener("click", function () {
  decreaseCount();
})

// Convert number to string
let text = number.toString(11);
  document.getElementById("count").innerHTML;

// Convert number to exponential notation
const number = 1000000;
  number.toExponential(1);
  document.getElementById("count").innerHTML;




// Show number of characters in string
const myString = 'Counter';
const stringLength = myString.length;

console.log('Length of the string "${myString} is: ${stringLength');