document.querySelector('input[type="button"]').addEventListener("click", check);
var result = document.querySelector("#result");
//Generating a random number without fractions (round) between 0 and 100:
var chosenNumber = Math.round(Math.random() * 100);

function check() {
  //value represents the value given in input:
  let checkedNumber = document.querySelector("#number").value;
  if (chosenNumber == checkedNumber) {
    result.innerText = "You win!";
  } else if (chosenNumber > checkedNumber) {
    result.innerText = "Too small!";
  } else {
    result.innerText = "Too big!";
  }
}
