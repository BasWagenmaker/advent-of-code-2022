import { HEIGHTS } from "../constants/heights.js";
import { NODE_OPTIONS } from "../constants/node-options.js";

export const getPossibleNodes = (square, heightMap) => {
  return NODE_OPTIONS.map((option) => {
    const r = square.r + option[0];
    const c = square.c + option[1];
    if (
      heightMap[r] &&
      heightMap[r][c] &&
      HEIGHTS.indexOf(
        heightMap[r][c] === "E"
          ? "z"
          : heightMap[r][c] === "S"
          ? "a"
          : heightMap[r][c]
      ) -
        HEIGHTS.indexOf(
          heightMap[square.r][square.c] === "E"
            ? "z"
            : heightMap[square.r][square.c] === "S"
            ? "a"
            : heightMap[square.r][square.c]
        ) <
        2
    ) {
      return { r, c };
    }
  }).filter((option) => option);
};
