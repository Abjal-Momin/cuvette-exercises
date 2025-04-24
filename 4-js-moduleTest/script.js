const cancel = document.getElementsByClassName("cross");
const rule = document.querySelector(".rule");
const userClick = document.querySelector(".secondSection");
const gameBegin = document.querySelector(".mainContainer");

function rules() {
  rule.style.display = "block";
}
function cross() {
  rule.style.display = "none";
}
function userChoise() {
  userClick.style.display = "flex";
  gameBegin.style.display = "none";
}
function playAgain() {
  gameBegin.style.display = "flex";
  userClick.style.display = "none";
}
