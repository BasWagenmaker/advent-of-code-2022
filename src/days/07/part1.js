import { getInputData } from "../../utils/get-input-data.js";
import { getDirSizes } from "./utils/get-dir-sizes.js";

export const part1 = (inputFile) => {
  const input = getInputData(inputFile);
  const dirSizes = getDirSizes(input);

  return Object.values(dirSizes).reduce(
    (total, dirSize) => (dirSize <= 100000 ? total + dirSize : total),
    0
  );
};
