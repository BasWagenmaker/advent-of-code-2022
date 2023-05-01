import { getInputData } from "../../utils/get-input-data.js";
import { matrixGetAdjecentRowAndColumn } from "../../utils/matrix/matrix-get-adjecent-row-and-column.js";
import { matrixIsExterior } from "../../utils/matrix/matrix-is-exterior.js";

export const calculateScenicScore = (trees, row, column) => {
  if (matrixIsExterior(trees, row, column)) return 0;

  const adjecentTrees = matrixGetAdjecentRowAndColumn(trees, row, column);

  const tree = trees[row][column];

  let left = [...adjecentTrees.adjecentRow];
  left.splice(column, trees[row].length);
  left = left.reverse();

  let viewFromLeft = 0;
  for (let i = 0; i < left.length; i++) {
    viewFromLeft++;
    if (left[i] && Number(left[i]) >= Number(tree)) break;
  }

  const right = [...adjecentTrees.adjecentRow];
  right.splice(0, column + 1);

  let viewFromRight = 0;
  for (let i = 0; i < right.length; i++) {
    viewFromRight++;
    if (right[i] && Number(right[i]) >= Number(tree)) break;
  }

  let top = [...adjecentTrees.adjecentColumn];
  top.splice(row, trees.length);
  top = top.reverse();

  let viewFromTop = 0;
  for (let i = 0; i < top.length; i++) {
    viewFromTop++;
    if (top[i] && Number(top[i]) >= Number(tree)) break;
  }

  const bottom = [...adjecentTrees.adjecentColumn];
  bottom.splice(0, row + 1);

  let viewFromBottom = 0;
  for (let i = 0; i < bottom.length; i++) {
    viewFromBottom++;
    if (bottom[i] && Number(bottom[i]) >= Number(tree)) break;
  }

  const scenicScore =
    viewFromLeft * viewFromRight * viewFromTop * viewFromBottom;

  return scenicScore;
};

export const part2 = (inputFile) => {
  const input = getInputData(inputFile);
  const trees = input.map((row) => row.split(""));
  let highestScenicScore = 0;
  for (let row = 0; row < trees.length; row++) {
    for (let column = 0; column < trees[row].length; column++) {
      let scenicScore = calculateScenicScore(trees, row, column);
      if (scenicScore > highestScenicScore) highestScenicScore = scenicScore;
    }
  }
  return highestScenicScore;
};