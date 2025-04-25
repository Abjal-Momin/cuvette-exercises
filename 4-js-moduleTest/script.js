const cancel = document.getElementsByClassName("cross");
const rule = document.querySelector(".rule");
const nextBtn = document.querySelector(".next");
const gameBegin = document.querySelector(".mainContainer");

// score
const pcScoreNum = document.querySelector(".pcScore");
const userScoreNum = document.querySelector(".userScore");

//winner & status
const winStatus = document.querySelector(".WinnerStatus");
const againstStatus = document.querySelector(".againstPC");

//rings variable user
const mostUser = document.querySelector(".mostUser");
const outerUser = document.querySelector(".outerUser");
const innerUser = document.querySelector(".innerUser");

//rings variable Pc
const mostPc = document.querySelector(".mostPc");
const outerPc = document.querySelector(".outerPc");
const innerPc = document.querySelector(".innerPc");

// Main Functions
const userClick = document.querySelector(".secondSection");
const pcClick = document.querySelector(".pcSection");
const imagePathUser = document.querySelector(".imgPathUser");
const imagePathPc = document.querySelector(".imgPathPc");
const imageBorderUser = document.querySelector("#SecondCirculeUser");
const imageBorderPc = document.querySelector("#SecondCirculePc");

// Score variable and adding to score board on page
let pcScore = 0;
let userScore = 0;

pcScoreNum.innerHTML = localStorage.getItem("pcScoreStorage");
userScoreNum.innerHTML = localStorage.getItem("userScoreStorage");

// updating variables with localStorage
pcScore = localStorage.getItem("pcScoreStorage");
userScore = localStorage.getItem("userScoreStorage");

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

  //Removing ring color user & pc
  mostUser.style.border = "none";
  outerUser.style.border = "none";
  innerUser.style.border = "none";

  mostPc.style.border = "none";
  outerPc.style.border = "none";
  innerPc.style.border = "none";

  //For generating and checking winner
  if (num == randomNum) {
    winStatus.innerHTML = "TIE UP";
  } else if (num == "1") {
    if (randomNum == "2") {
      winStatus.innerHTML = "YOU WIN";
      userScore++;
    } else if (randomNum == "3") {
      winStatus.innerHTML = "YOU LOST";
      pcScore++;
    }
  } else if (num == "2") {
    if (randomNum == "1") {
      winStatus.innerHTML = "YOU LOST";
      pcScore++;
    } else if (randomNum == "3") {
      winStatus.innerHTML = "YOU WIN";
      userScore++;
    }
  } else if (num == "3") {
    if (randomNum == "1") {
      winStatus.innerHTML = "YOU WIN";
      userScore++;
    } else if (randomNum == "2") {
      winStatus.innerHTML = "YOU LOST";
      pcScore++;
    }
  }

  // changing against value
  if (winStatus.innerHTML === "TIE UP") {
    againstStatus.innerHTML = " ";
  } else {
    againstStatus.innerHTML = "AGAINST PC";
  }

  // changing next button
  if (winStatus.innerHTML === "YOU WIN") {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }

  // seting score to local storage
  localStorage.setItem("pcScoreStorage", pcScore);
  localStorage.setItem("userScoreStorage", userScore);

  // geting from local storage
  pcScoreNum.innerHTML = localStorage.getItem("pcScoreStorage");
  userScoreNum.innerHTML = localStorage.getItem("userScoreStorage");

  //Adding ring color based on winner
  function rings() {
    if (winStatus.innerHTML === "YOU WIN") {
      mostUser.style.border = "1rem solid #2f9a253f";
      mostUser.style.transition = "border 0.8s ease-out";
      outerUser.style.border = "1rem solid #2e9a2563";
      outerUser.style.transition = "border 0.8s ease-out";
      innerUser.style.border = "1rem solid #2f9a25cc";
      innerUser.style.transition = "border 0.8s ease-out";
    } else if (winStatus.innerHTML === "YOU LOST") {
      mostPc.style.border = "1rem solid #2f9a253f";
      mostPc.style.transition = "border 0.8s ease-out";
      outerPc.style.border = "1rem solid #2e9a2563";
      outerPc.style.transition = "border 0.8s ease-out";
      innerPc.style.border = "1rem solid #2f9a25cc";
      innerPc.style.transition = "border 0.8s ease-out";
    }
  }
  setTimeout(rings, 200);

  // changing main page
  userClick.style.display = "flex";
  gameBegin.style.display = "none";
}

// reset score from local storage
function resetScore() {
  pcScore = 0;
  userScore = 0;
  localStorage.setItem("pcScoreStorage", pcScore);
  localStorage.setItem("userScoreStorage", userScore);

  pcScoreNum.innerHTML = localStorage.getItem("pcScoreStorage");
  userScoreNum.innerHTML = localStorage.getItem("userScoreStorage");
  playAgain();
}

// PLay Again
function playAgain() {
  gameBegin.style.display = "flex";
  nextBtn.style.display = "none";
  userClick.style.display = "none";
}
