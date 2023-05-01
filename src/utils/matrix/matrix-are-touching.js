import { MATRIX_NEIGHBORS } from "./constants/matrix-neighbors.js";

export const matrixAreTouching = (a, b, neighbors = MATRIX_NEIGHBORS) => {
  return (
    (a.x === b.x && a.y === b.y) ||
    neighbors.some(
      (neighbor) => b.y + neighbor[0] === a.y && b.x + neighbor[1] === a.x
    )
  );
};
