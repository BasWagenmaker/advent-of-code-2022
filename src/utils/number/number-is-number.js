export const numberIsNumber = (number) => {
  return !Array.isArray(number) && !isNaN(number);
};
