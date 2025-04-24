const cancel = document.getElementsByClassName("cross");
const rule = document.querySelector(".rule");
const userClick = document.querySelector(".secondSection");
const gameBegin = document.querySelector(".mainContainer");
const imagePathUser = document.querySelector(".imgPathUser");
const imageBorder = document.querySelector("#SecondCirculeUser");

// To show Rules section
function rules() {
  rule.style.display = "block";
}
// To hide Rules section
function cross() {
  rule.style.display = "none";
}

//User Choise to get the user Pick
function userChoise(num, style) {
  imageBorder.className = style;
  imagePathUser.src = "./images/hand" + num + ".png";
  userClick.style.display = "flex";
  gameBegin.style.display = "none";
}
// PLay Again
function playAgain() {
  gameBegin.style.display = "flex";
  userClick.style.display = "none";
}

// pc Image change
