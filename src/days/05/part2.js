import { getInputData } from "../../utils/get-input-data.js";
import { arraySplitByCharacter } from "../../utils/array/array-split-by-character.js";
import { parseDrawing } from "./utils/parse-drawing.js";
import { parseInstructions } from "./utils/parse-instructions.js";
import { moveCrates } from "./utils/move-crates.js";

export const part2 = (inputFile) => {
  const input = arraySplitByCharacter(getInputData(inputFile));
  const stacks = parseDrawing(input[0]);
  const instructions = parseInstructions(input[1]);
  return moveCrates(instructions, stacks, false);
};
