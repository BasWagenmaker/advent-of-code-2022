import { getInputData } from "../../utils/get-input-data.js";
import { stringGetConsequetiveDistinct } from "../../utils/string/string-get-consequetive-distinct.js"

export const part1 = (inputFile) => {
  const input = getInputData(inputFile, false);
  return stringGetConsequetiveDistinct(input, 4)
};
