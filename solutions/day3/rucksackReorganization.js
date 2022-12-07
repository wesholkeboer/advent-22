import { input } from "../../fixtures/day3-input.js";

let sampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const rucksackPriorityAnalyzer = (rucksacksString) => {
  let rucksacksArray = rucksacksString.split(`\n`);
  let dupeItem = "";
  let prioritySum = 0;

  rucksacksArray.forEach((rucksack) => {
    let compartmentAmount = rucksack.length / 2;
    let comp1 = rucksack.slice(0, compartmentAmount);
    let comp2 = rucksack.slice(compartmentAmount);

    for (let i = 0; i <= comp1.length; i++) {
      if (comp2.includes(comp1[i])) {
        dupeItem = comp1[i];
        let utfNumber = dupeItem.charCodeAt();
        if (utfNumber >= 97) {
          prioritySum += utfNumber - 96;
        } else {
          prioritySum += utfNumber - 38;
        }
        break;
      }
    }
  });
  console.log(prioritySum);
};

rucksackPriorityAnalyzer(input);
