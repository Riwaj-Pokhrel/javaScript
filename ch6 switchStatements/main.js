let playerOne = "paper";
let computer = "rock";

switch (playerOne) {
  case computer:
    console.log("tie game");
    break;

  case "rock":
    if (computer === "paper") {
      console.log("Computer wins!");
    } else console.log("Player_one wins!");
    break;

  case "paper":
    if (computer === "scissors") {
      console.log("Computer wins!");
    } else console.log("Player_one wins!");
    break;
  default:
    if (computer === "rock") {
      console.log("Computer wins!");
    } else console.log("Player_one wins!");
    break;
}
