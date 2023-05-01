import { getInputData } from "../../utils/get-input-data.js";
import { getDirSizes } from "./utils/get-dir-sizes.js";

export const part2 = (inputFile) => {
  const input = getInputData(inputFile);
  const dirSizes = getDirSizes(input);
  const DISK_SPACE_AVAILABLE = 70000000;
  const DISK_SPACE_REQUIRED = 30000000;
  const diskSpaceToBeDeleted = Math.abs(
    DISK_SPACE_AVAILABLE - dirSizes["/"] - DISK_SPACE_REQUIRED
  );

  return Object.values(dirSizes)
    .sort((a, b) => a - b)
    .find((dirSize) => dirSize >= diskSpaceToBeDeleted);
};
