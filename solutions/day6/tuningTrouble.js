import { input } from "../../fixtures/day6-input.js";

let sampleInputOne = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;
let sampleInputTwo = `bvwbjplbgvbhsrlpgdmjqwftvncz`;
let sampleInputThree = `nppdvjthqldpwncqszvftbrmjlhg`;
let sampleInputFour = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`;
let sampleInputFive = `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`;

const tuningTrouble = (input) => {
  let count = 0;
  let testString = "";

  for (let i = 0; i < input.length; i++) {
    let allUniqueCount = 0;
    let allUniqueLettersInTestString = false;
    let nextLetter = input.slice(i, i + 1);

    if (testString.length === 14) {
      for (let j = 0; j < testString.length; j++) {
        let letterToCheck = testString[j];
        let smallTestString = testString.slice(0, j) + testString.slice(j + 1);
        if (!smallTestString.includes(letterToCheck)) {
          allUniqueCount++;
        }
      }
    }

    if (allUniqueCount === 14) {
      allUniqueLettersInTestString = true;
    }

    if (testString.length < 14) {
      testString += nextLetter;
      count++;
    } else if (!allUniqueLettersInTestString) {
      testString = testString.slice(1);
      testString += nextLetter;
      count++;
    } else if (allUniqueLettersInTestString) {
      console.log(count++);
      console.log(testString);
      break;
    }
  }
};

tuningTrouble(input);
