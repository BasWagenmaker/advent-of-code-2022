export const arraySplitInTwo = (array) => {
  const halfWayIndex = Math.ceil(array.length / 2);
  const firstHalfOfArray = array.slice(0, halfWayIndex);
  const secondHalfOfArray = array.slice(halfWayIndex);
  return [firstHalfOfArray, secondHalfOfArray];
};
