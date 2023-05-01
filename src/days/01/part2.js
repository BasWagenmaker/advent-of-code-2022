import { getInputData } from "../../utils/get-input-data.js";
import { arraySplitByCharacter } from "../../utils/array/array-split-by-character.js";
import { arrayGetSum } from "../../utils/array/array-get-sum.js";

export const part2 = (inputFile) => {
  const input = getInputData(inputFile);
  const caloriesByElf = arraySplitByCharacter(input);

  const sumsOfCalories = [];
  for (let i = 0; i < caloriesByElf.length; i++) {
    sumsOfCalories.push(arrayGetSum(caloriesByElf[i]));
  }

  sumsOfCalories.sort((a, b) => b - a);

  const top3 = sumsOfCalories.slice(0, 3);
  const sumOfTop3 = arrayGetSum(top3);

  return sumOfTop3;
};
