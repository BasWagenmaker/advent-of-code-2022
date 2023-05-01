import { getInputData } from "../../utils/get-input-data.js";
import { compare } from "./utils/compare.js"

export const part2 = (inputFile) => {
  const input = getInputData(inputFile);
  const packets = input
    .filter((pair) => pair.length)
    .map((pair) => JSON.parse(pair));
  packets.push([[2]], [[6]]);

  packets.sort((a, b) =>
    compare(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(b)))
      ? -1
      : 1
  );

  const key1 = packets.findIndex((x) => x[0]?.[0] == 2) + 1;
  const key2 = packets.findIndex((x) => x[0]?.[0] == 6) + 1;
  return key1 * key2;
};

