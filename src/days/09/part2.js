import { getInputData } from "../../utils/get-input-data.js";
import { moveRope } from "./utils/move-rope.js";

export const part2 = (inputFile) => {
  const input = getInputData(inputFile);
  const instructions = input.map((line) => {
    const [direction, steps] = line.split(" ");
    return [direction, Number(steps)];
  });

  return moveRope(instructions, 10);
};
