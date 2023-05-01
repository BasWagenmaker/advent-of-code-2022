export const matrixGetAdjecentRowAndColumn = (matrix, row, column) => {
  const adjecentRow = [...matrix[row]];
  const adjecentColumn = matrix.reduce((matrixColumn, matrixRow) => {
    matrixColumn.push(matrixRow[column]);
    return matrixColumn;
  }, []);
  return { adjecentRow, adjecentColumn };
};
