import { stringGetNumbers } from "../../../utils/string/string-get-numbers.js";

export const parseInstructions = (instructions) => {
  return instructions.map((instruction) => stringGetNumbers(instruction));
};
