import { input } from "../../fixtures/day3-input.js";

const rucksackPriorityAnalyzer = (rucksacksString) => {
  let rucksacksArray = rucksacksString.split(`\n`);
  let elfTrio = [];
  let dupeItems = "";
  let prioritySum = 0;
  let count = 0;

  while (rucksacksArray.length) {
    for (let i = 0; i < 3; i++) {
      elfTrio.push(rucksacksArray[0]);
      rucksacksArray.shift();
    }
    for (let i = 0; i < elfTrio[0].length; i++) {
      if (elfTrio[1].includes(elfTrio[0][i])) {
        dupeItems += elfTrio[0][i];
      }
    }
    for (let i = 0; i <= dupeItems.length; i++) {
      if (elfTrio[2].includes(dupeItems[i])) {
        let utfNumber = dupeItems[i].charCodeAt();
        if (utfNumber >= 97) {
          prioritySum += utfNumber - 96;
        } else {
          prioritySum += utfNumber - 38;
        }
        break;
      }
    }
    dupeItems = "";
    elfTrio = [];
  }
  console.log("prioritySum =", prioritySum);
};

rucksackPriorityAnalyzer(input);
