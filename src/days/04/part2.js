import { getInputData } from "../../utils/get-input-data.js";
import { numberRangeOverlap } from "../../utils/number/number-range-overlap.js";

export const part2 = (inputFile) => {
  const input = getInputData(inputFile);
  let overlapped = 0;
  for (let i = 0; i < input.length; i++) {
    const elves = input[i].split(",");
    const sections1 = elves[0].split("-");
    const sections2 = elves[1].split("-");
    if (
      numberRangeOverlap(
        sections1[0],
        sections1[1],
        sections2[0],
        sections2[1]
      )
    ) {
      overlapped++;
    }
  }
  return overlapped;
};
