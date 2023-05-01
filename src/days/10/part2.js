import { getInputData } from "../../utils/get-input-data.js";
import { matrixCreate } from "../../utils/matrix/matrix-create.js";

export const part2 = (inputFile) => {
  const input = getInputData(inputFile);
  const instructions = input.map((line) => {
    const [command, value] = line.split(" ");
    return [command, isNaN(Number(value)) ? null : Number(value)];
  });
  let sprite = 1;
  let cycle = 0;
  const addxLength = 2;
  let pixels = matrixCreate(6, 40, "  ");
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i][0] === "addx") {
      for (let c = 0; c < addxLength; c++) {
        let computedCycle = Math.floor(cycle % 40);
        if (
          computedCycle == sprite + 1 ||
          computedCycle === sprite ||
          computedCycle === sprite - 1
        ) {
          pixels[Math.floor(cycle / 40)][Math.floor(cycle % 40)] = "██";
        }
        if (c === addxLength - 1) {
          sprite += instructions[i][1];
        }
        cycle++;
      }
    }
    if (instructions[i][0] === "noop") {
      let computedCycle = Math.floor(cycle % 40);
      if (
        computedCycle == sprite + 1 ||
        computedCycle === sprite ||
        computedCycle === sprite - 1
      ) {
        pixels[Math.floor(cycle / 40)][Math.floor(cycle % 40)] = "██";
      }
      cycle++;
    }
  }

  return `\n${pixels.map((array) => array.join("")).join("\n")}`;
};

