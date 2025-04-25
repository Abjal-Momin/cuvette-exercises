const cancel = document.getElementsByClassName("cross");
const rule = document.querySelector(".rule");
const gameBegin = document.querySelector(".mainContainer");

const winStatus = document.querySelector(".WinnerStatus");
const againstStatus = document.querySelector(".againstPC");

const userClick = document.querySelector(".secondSection");
const pcClick = document.querySelector(".pcSection");
const imagePathUser = document.querySelector(".imgPathUser");
const imagePathPc = document.querySelector(".imgPathPc");
const imageBorderUser = document.querySelector("#SecondCirculeUser");
const imageBorderPc = document.querySelector("#SecondCirculePc");

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
  rule.style.display = "none";

  const randomNum = Math.floor(Math.random() * 3) + 1;
  //Image Part
  imagePathUser.src = "./images/hand" + num + ".png";
  imagePathPc.src = "./images/hand" + randomNum + ".png";

  //For Styling part
  imageBorderUser.className = style;
  if (randomNum == "1") {
    imageBorderPc.className = "stone";
  } else if (randomNum == "2") {
    imageBorderPc.className = "scissor";
  } else {
    imageBorderPc.className = "paper";
  }

  if (num < randomNum && randomNum == "2") {
    winStatus.innerHTML = "YOU LOST";
  } else if (num > randomNum && ) {
  } else if (num == randomNum) {
    winStatus.innerHTML = "TIE UP";
    againstStatus.innerHTML = " ";
  }

  userClick.style.display = "flex";
  gameBegin.style.display = "none";
}
// PLay Again
function playAgain() {
  gameBegin.style.display = "flex";
  userClick.style.display = "none";
}

// pc Image change
