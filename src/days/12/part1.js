import { getInputData } from "../../utils/get-input-data.js";
import { bfs } from "./utils/bfs.js";

export const part1 = (inputFile) => {
  const input = getInputData(inputFile);
  const heightMap = input.map((row) => row.split(""));
  return bfs(heightMap, "E", "S");
};

