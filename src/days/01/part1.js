import { getInputData } from "../../utils/get-input-data.js";
import { arraySplitByCharacter } from "../../utils/array/array-split-by-character.js";
import { arrayGetSum } from "../../utils/array/array-get-sum.js";

export const part1 = (inputFile) => {
  const input = getInputData(inputFile);
  const caloriesByElf = arraySplitByCharacter(input);

  let highestSumOfCalories = 0;
  for (let i = 0; i < caloriesByElf.length; i++) {
    let sumOfCalories = arrayGetSum(caloriesByElf[i]);
    if (sumOfCalories > highestSumOfCalories)
      highestSumOfCalories = sumOfCalories;
  }
  return highestSumOfCalories;
};
