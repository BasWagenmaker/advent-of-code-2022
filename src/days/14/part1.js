import { getInputData } from "../../utils/get-input-data.js";
import { matrixCreate } from "../../utils/matrix/matrix-create.js";

const parseScan = (input) => {
  return input.map((row) =>
    row
      .replaceAll("->", ":")
      .split(":")
      .map((x) => x.trim().split(","))
  );
};

const createCave = (scan) => {
  const rows = scan
    .map((row) => row.map((column) => Number(column[1])))
    .flat()
    .sort((a, b) => a - b);
  const column = scan
    .map((row) => row.map((column) => Number(column[0])))
    .flat()
    .sort((a, b) => a - b);
  const highestRow = Number(rows.at(-1));
  const lowestColumn = Number(column.at(0));
  const highestColumn = Number(column.at(-1));
  const cave = matrixCreate(
    highestRow + 1,
    highestColumn - lowestColumn + 1,
    "."
  );

  for (let lines of scan) {
    for (let i = 0; i < lines.length; i++) {
      let column = Number(lines[i][0]);
      let row = Number(lines[i][1]);

      cave[row][column - lowestColumn] = "#";

      if (!lines[i + 1]) break;
      let nextColumn = Number(lines[i + 1][0]);
      let nextRow = Number(lines[i + 1][1]);

      if (nextColumn > column) {
        let difference = Math.abs(nextColumn - column);
        while (difference) {
          cave[row][column - lowestColumn + difference] = "#";
          difference--;
        }
      }
      if (nextColumn < column) {
        let difference = Math.abs(nextColumn - column);
        while (difference) {
          cave[row][column - lowestColumn - difference] = "#";
          difference--;
        }
      }
      if (nextRow > row) {
        let difference = Math.abs(nextRow - row);
        while (difference) {
          cave[row + difference][column - lowestColumn] = "#";
          difference--;
        }
      }
      if (nextRow < row) {
        let difference = Math.abs(nextRow - row);
        while (difference) {
          cave[row - difference][column - lowestColumn] = "#";
          difference--;
        }
      }
    }
  }
  return { cave, lowestColumn };
};

const produceSand = (cave, [startRow, startColumn]) => {
  let totalSand = 0;
  let row = startRow;
  let column = startColumn;
  while (column > 0 && column + 1 < cave[0].length && cave.length > row + 1) {
    if (cave[row + 1][column] === ".") {
      row++;
    } else if (cave[row + 1][column - 1] === ".") {
      row++;
      column--;
    } else if (cave[row + 1][column + 1] === ".") {
      row++;
      column++;
    } else {
      cave[row][column] = "O";
      row = startRow;
      column = startColumn;
      totalSand++;
    }
  }
  return totalSand;
};

export const part1 = (inputFile) => {
  const input = getInputData(inputFile);
  const scan = parseScan(input);
  const { cave, lowestColumn } = createCave(scan);
  return produceSand(cave, [0, 500 - lowestColumn]);
};
