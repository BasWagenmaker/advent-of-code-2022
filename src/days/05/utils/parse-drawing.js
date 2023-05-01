import { matrixCreate } from "../../../utils/matrix/matrix-create.js";

export const parseDrawing = (drawing) => {
  const amountOfStacks = drawing[drawing.length - 1]
    .match(/\d+/g)
    .map((instruction) => Number(instruction)).length;

  drawing.splice(-1);

  const stacks = matrixCreate(amountOfStacks, 0)

  for (let i = 0; i < drawing.length; i++) {
    for (let c = 0; c < drawing[i].length; c++) {
      if (drawing[i][c].match(/^[A-Z]+$/i)) {
        stacks[Math.floor(c / 4)].push(drawing[i][c]);
      }
    }
  }

  return stacks;
};
