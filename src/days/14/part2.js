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
  const cave = matrixCreate(highestRow + 3, highestColumn * 2, ".");

  for (let lines of scan) {
    for (let i = 0; i < lines.length; i++) {
      let column = Number(lines[i][0]);
      let row = Number(lines[i][1]);

      cave[row][column] = "#";

      if (!lines[i + 1]) break;
      let nextColumn = Number(lines[i + 1][0]);
      let nextRow = Number(lines[i + 1][1]);

      if (nextColumn > column) {
        let difference = Math.abs(nextColumn - column);
        while (difference) {
          cave[row][column + difference] = "#";
          difference--;
        }
      }
      if (nextColumn < column) {
        let difference = Math.abs(nextColumn - column);
        while (difference) {
          cave[row][column - difference] = "#";
          difference--;
        }
      }
      if (nextRow > row) {
        let difference = Math.abs(nextRow - row);
        while (difference) {
          cave[row + difference][column] = "#";
          difference--;
        }
      }
      if (nextRow < row) {
        let difference = Math.abs(nextRow - row);
        while (difference) {
          cave[row - difference][column] = "#";
          difference--;
        }
      }
    }
  }

  for (let i = 0; i < highestColumn + 100; i++) {
    const row = highestRow + 2;
    cave[row][i] = "#";
  }

  return { cave, lowestColumn };
};

const produceSand = (cave) => {
  let totalSand = 0;
  let [startRow, startColumn] = [0, 500];
  let [row, column] = [startRow, startColumn];
  let full = false;
  while (column + 1 < cave[0].length && cave.length > row + 1 && !full) {
    if (cave[row + 1][column] === ".") {
      row++;
    } else if (cave[row + 1][column - 1] === ".") {
      row++;
      column--;
    } else if (cave[row + 1][column + 1] === ".") {
      row++;
      column++;
    } else {
      if (cave[row][column] === "O") {
        full = true;
      }
      cave[row][column] = "O";
      [row, column] = [startRow, startColumn];
      totalSand++;
    }
  }
  return totalSand - 1;
};

export const part2 = (inputFile) => {
  const input = getInputData(inputFile);
  const scan = parseScan(input);
  const { cave } = createCave(scan);
  return produceSand(cave);
};
