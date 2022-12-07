import { input } from "../../fixtures/day1-input.js";

let sampleInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const calorieCounting = (string) => {
  let elfArray = string.split(`\n\n`);
  let elfArrayCombined = [];
  elfArray.forEach((elf) => {
    elfArrayCombined.push(
      parseInt(
        elf.split("\n").reduce((acc, v) => {
          return parseInt(acc) + parseInt(v);
        })
      )
    );
  });
  elfArrayCombined.sort((a, b) => {
    return b - a;
  });
  console.log(elfArrayCombined[0] + elfArrayCombined[1] + elfArrayCombined[2]);
};

calorieCounting(input);
