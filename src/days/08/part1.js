import { getInputData } from "../../utils/get-input-data.js";
import { matrixGetAdjecentRowAndColumn } from "../../utils/matrix/matrix-get-adjecent-row-and-column.js";
import { matrixIsExterior } from "../../utils/matrix/matrix-is-exterior.js";

export const isTreeVisible = (trees, row, column) => {
  if (matrixIsExterior(trees, row, column)) return true;

  const adjecentTrees = matrixGetAdjecentRowAndColumn(trees, row, column);

  const tree = trees[row][column];

  const left = [...adjecentTrees.adjecentRow];
  left.splice(column, trees[row].length);

  let hasCoverFromLeft = false;
  for (let i = 0; i < left.length; i++) {
    if (Number(left[i]) >= Number(tree)) hasCoverFromLeft = true;
  }

  const right = [...adjecentTrees.adjecentRow];
  right.splice(0, column + 1);

  let hasCoverFromRight = false;
  for (let i = 0; i < right.length; i++) {
    if (Number(right[i]) >= Number(tree)) hasCoverFromRight = true;
  }

  const top = [...adjecentTrees.adjecentColumn];
  top.splice(row, trees.length);

  let hasCoverFromTop = false;
  for (let i = 0; i < top.length; i++) {
    if (Number(top[i]) >= Number(tree)) hasCoverFromTop = true;
  }

  const bottom = [...adjecentTrees.adjecentColumn];
  bottom.splice(0, row + 1);

  let hasCoverFromBottom = false;
  for (let i = 0; i < bottom.length; i++) {
    if (Number(bottom[i]) >= Number(tree)) hasCoverFromBottom = true;
  }
  const isVisible =
    !hasCoverFromLeft ||
    !hasCoverFromRight ||
    !hasCoverFromTop ||
    !hasCoverFromBottom;

  return isVisible;
};

export const part1 = (inputFile) => {
  const input = getInputData(inputFile);
  const trees = input.map((row) => row.split(""));
  let amountOfVisibleTrees = 0;
  for (let row = 0; row < trees.length; row++) {
    for (let column = 0; column < trees[row].length; column++) {
      if (isTreeVisible(trees, row, column)) {
        amountOfVisibleTrees++;
      }
    }
  }
  return amountOfVisibleTrees;
};

