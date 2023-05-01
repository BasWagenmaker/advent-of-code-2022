export const stringGetNumbers = (string) => {
  const numbers = string.match(/-?\d+/g)
  return numbers ? numbers.map((number) => Number(number)) : [];
};
