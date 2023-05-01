export const arrayGetSum = (array) => {
  return array.reduce((sum, a) => sum + Number(a), 0);
};
