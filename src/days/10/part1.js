import { getInputData } from "../../utils/get-input-data.js";

export const part1 = (inputFile) => {
  const input = getInputData(inputFile);
  const instructions = input.map((line) => {
    const [command, value] = line.split(" ");
    return [command, isNaN(Number(value)) ? null : Number(value)];
  });
  let x = 1;
  let sumOfSignalStrength = 0;
  let cycle = 1;
  const addxLength = 2;
  let cycles = [];
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i][0] === "addx") {
      for (let c = 0; c < addxLength; c++) {
        cycles.push({ cycle, x });
        if ((cycle + 20) % 40 === 0) {
          sumOfSignalStrength += cycle * x;
        }
        if (c === addxLength - 1) {
          x += instructions[i][1];
        }
        cycle++;
      }
    }
    if (instructions[i][0] === "noop") {
      cycles.push({ cycle, x });
      if ((cycle + 20) % 40 === 0) {
        sumOfSignalStrength += cycle * x;
      }
      cycle++;
    }
  }
  return sumOfSignalStrength
};

