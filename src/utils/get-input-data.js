import fs from "fs";

export const getInputData = (filename, splitLines = true) => {
  const input = fs.readFileSync(filename, { encoding: "utf8", flag: "r" });
  return splitLines ? input.split(/\r?\n/) : input;
};
