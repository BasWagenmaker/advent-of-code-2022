import { getInputData } from "../../utils/get-input-data.js";
import { arraySplitByCharacter } from "../../utils/array/array-split-by-character.js";
import { compare } from "./utils/compare.js";

export const part1 = (inputFile) => {
  const input = getInputData(inputFile);
  const rawPairs = arraySplitByCharacter(input, "");
  const pairs = rawPairs.map((pair) =>
    pair.map((packet) => JSON.parse(packet))
  );
  let sum = 0;

  for (let i = 0; i < pairs.length; i++) {
    const [left, right] = pairs[i];
    if (compare(left, right)) sum += i + 1;
  }

  return sum;
};
