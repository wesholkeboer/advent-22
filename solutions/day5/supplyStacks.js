import { input } from "../../fixtures/day5-input.js";

let sampleInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const supplyStacks = (input) => {
  let moves = [];
  // seperate stacks and moves from input string
  let [stacksString, movesString] = input.split(`\n\n`);

  // make stacksString into nested arrays of stacks
  let stacks = [[], [], [], [], [], [], [], [], []];

  // from the top of the stacks, if the space is not empty,
  // each line will add each item found
  // to the beginning of its respective nested array
  // this should be refactored to be dynamic but I am tired
  stacksString.split(`\n`).map((line) => {
    if (line.slice(0, 3) !== "   ") {
      stacks[0].unshift(line.slice(0, 3));
    }
    if (line.slice(4, 7) !== "   ") {
      stacks[1].unshift(line.slice(4, 7));
    }
    if (line.slice(8, 11) !== "   ") {
      stacks[2].unshift(line.slice(8, 11));
    }
    if (line.slice(12, 15) !== "   ") {
      stacks[3].unshift(line.slice(12, 15));
    }
    if (line.slice(16, 19) !== "   ") {
      stacks[4].unshift(line.slice(16, 19));
    }
    if (line.slice(20, 23) !== "   ") {
      stacks[5].unshift(line.slice(20, 23));
    }
    if (line.slice(24, 27) !== "   ") {
      stacks[6].unshift(line.slice(24, 27));
    }
    if (line.slice(28, 31) !== "   ") {
      stacks[7].unshift(line.slice(28, 31));
    }
    if (line.slice(32, 35) !== "   ") {
      stacks[8].unshift(line.slice(32, 35));
    }
  });

  // make moves into array
  let movesArray = movesString.split(`\n`);
  movesArray.forEach((move) => {
    let quantity = parseInt(move.slice(5, 7));
    let from = parseInt(move.slice(move.length - 6, move.length - 5));
    let to = parseInt(move.slice(move.length - 1));
    moves.push({ quantity, from, to });
  });

  // use moves list to sort the nested arrays
  moves.forEach((move) => {
    for (let i = 0; i < move.quantity; i++) {
      // add to new array
      stacks[move.to - 1].push(
        stacks[move.from - 1][stacks[move.from - 1].length - 1]
      );

      // delete from old array
      stacks[move.from - 1].pop();
    }
  });

  // console.log last item from each array without brackets
  stacks.forEach((array) => {
    console.log(array[array.length - 1][1]);
  });
};

supplyStacks(input);
