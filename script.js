let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", myChoice);
paper.addEventListener("click", myChoice);
scissors.addEventListener("click", myChoice);

function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function myChoice(event) {
  let myChoice = event.currentTarget.id;
  let computerChoice = computerPlay();
  let result = "";

  if (myChoice === computerChoice) {
    result = "Uavgjort!";
  } else if (
    (myChoice === "rock" && computerChoice === "scissors") ||
    (myChoice === "paper" && computerChoice === "rock") ||
    (myChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Du vant!";
    playerScore++;
  } else {
    result = "Du tapte!";
    computerScore++;
  }
  document.getElementById("player").innerHTML = "Spiller: " + playerScore;
  document.getElementById("computer").innerHTML = "Computer: " + computerScore;
  document.getElementById(
    "result"
  ).innerHTML = `Du valgte ${myChoice}, computer valgte ${computerChoice}. ${result}`;
}
