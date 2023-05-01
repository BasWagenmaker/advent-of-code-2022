export const arraySplitByCharacter = (inputArray, character = "") => {
  const outputArray = [];
  let subArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === character) {
      outputArray.push(subArray);
      subArray = [];
      continue;
    }
    subArray.push(inputArray[i]);
    if (i + 1 === inputArray.length) outputArray.push(subArray);
  }
  return outputArray;
};
