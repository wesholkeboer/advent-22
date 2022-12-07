import { input } from "../../fixtures/day4-input.js";

let sampleInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const campCleanup = (allSectionAssignmentsString) => {
  let arrayContainingAnotherCount = 0;
  let allPairsArray = allSectionAssignmentsString.split(`\n`);

  allPairsArray.forEach((item) => {
    let pairArray = item.split(",");
    if (doesArrayOverlapOtherArrayAtAll(pairArray[0], pairArray[1])) {
      arrayContainingAnotherCount++;
    }
  });
  console.log(arrayContainingAnotherCount);
};

const doesArrayContainAnother = (str1, str2) => {
  let [elfOneStart, elfOneEnd] = str1.split("-").map(Number);
  let [elfTwoStart, elfTwoEnd] = str2.split("-").map(Number);
  return !!(
    (elfOneStart <= elfTwoStart && elfOneEnd >= elfTwoEnd) ||
    (elfTwoStart <= elfOneStart && elfTwoEnd >= elfOneEnd)
  );
};

const doesArrayOverlapOtherArrayAtAll = (str1, str2) => {
  let [elfOneStart, elfOneEnd] = str1.split("-").map(Number);
  let [elfTwoStart, elfTwoEnd] = str2.split("-").map(Number);
  return !!(
    (elfOneStart <= elfTwoStart && elfOneEnd >= elfTwoStart) ||
    (elfTwoStart <= elfOneStart && elfTwoEnd >= elfOneStart)
  );
};

campCleanup(input);
