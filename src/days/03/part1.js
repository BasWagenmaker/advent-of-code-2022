import { getInputData } from "../../utils/get-input-data.js";
import { arraySplitInTwo } from "../../utils/array/array-split-in-two.js";
import { stringGetCommon } from "../../utils/string/string-get-common.js";
import { PRIORITIES } from "./constants/priorities.js";

export const part1 = (inputFile) => {
  const input = getInputData(inputFile);

  let sumOfPriorities = 0;
  for (let i = 0; i < input.length; i++) {
    const compartments = arraySplitInTwo(input[i]);
    const commonCharacters = stringGetCommon(compartments);
    const priority = PRIORITIES.indexOf(commonCharacters[0]) + 1;
    sumOfPriorities += priority;
  }
  return sumOfPriorities;
};
