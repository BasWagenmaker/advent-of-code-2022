import { getInputData } from "../../utils/get-input-data.js";
import { arraySplitInChunks } from "../../utils/array/array-split-in-chunks.js";
import { stringGetCommon } from "../../utils/string/string-get-common.js";
import { PRIORITIES } from "./constants/priorities.js";

export const part2 = (inputFile) => {
  const input = getInputData(inputFile);
  const groups = arraySplitInChunks(input, 3);

  let sumOfPriorities = 0;
  for (let i = 0; i < groups.length; i++) {
    const commonCharacters = stringGetCommon(groups[i]);
    const priority = PRIORITIES.indexOf(commonCharacters[0]) + 1;
    sumOfPriorities += priority;
  }
  return sumOfPriorities;
};
