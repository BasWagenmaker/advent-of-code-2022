export const matrixIsExterior = (matrix, row, column) => {
  return (
    row === 0 ||
    row === matrix.length - 1 ||
    column === 0 ||
    column === matrix[row].length - 1
  );
};
