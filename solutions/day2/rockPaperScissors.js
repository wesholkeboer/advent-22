import { input } from "../../fixtures/day2-input.js";

let sampleInput = `A Y
B X
C Z`;

const rpsStrategy = (guide) => {
  let myScore = 0;
  let myMove = "";
  let games = guide.split(`\n`);

  games.forEach((game) => {
    let moves = game.split(" ");
    if (moves[1] === "X") {
      myScore += 0;
      if (moves[0] === "A") {
        myMove = "C";
      }
      if (moves[0] === "B") {
        myMove = "A";
      }
      if (moves[0] === "C") {
        myMove = "B";
      }
    } else if (moves[1] === "Y") {
      myScore += 3;
      if (moves[0] === "A") {
        myMove = "A";
      }
      if (moves[0] === "B") {
        myMove = "B";
      }
      if (moves[0] === "C") {
        myMove = "C";
      }
    } else if (moves[1] === "Z") {
      myScore += 6;
      if (moves[0] === "A") {
        myMove = "B";
      }
      if (moves[0] === "B") {
        myMove = "C";
      }
      if (moves[0] === "C") {
        myMove = "A";
      }
    }
    if (myMove === "A") {
      myScore += 1;
    }
    if (myMove === "B") {
      myScore += 2;
    }
    if (myMove === "C") {
      myScore += 3;
    }
  });
  console.log(myScore);
};

rpsStrategy(input);
