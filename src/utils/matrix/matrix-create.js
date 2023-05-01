export const matrixCreate = (rows, column, fill) => {
  const matrix = [];
  for (var i = 0; matrix.length < rows; i++) {
    matrix[i] = new Array(column);
    if (fill !== undefined) matrix[i].fill(fill);
  }
  return matrix;
};
