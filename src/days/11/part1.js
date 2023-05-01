import { getInputData } from "../../utils/get-input-data.js";
import { parseMonkeys } from "./utils/parse-monkeys.js";

export const part1 = (inputFile) => {
  const input = getInputData(inputFile, false);
  const monkeys = parseMonkeys(input);
  const rounds = 20;

  for (let r = 1; r <= rounds; r++) {
    for (let m = 0; m < monkeys.length; m++) {
      for (let i = 0; i < monkeys[m].items.length; i++) {
        monkeys[m].inspections++;
        let methodTarget = isNaN(monkeys[m].operation)
          ? monkeys[m].items[i]
          : monkeys[m].operation;

        let item =
          monkeys[m].method === "+"
            ? monkeys[m].items[i] + methodTarget
            : monkeys[m].items[i] * methodTarget;

        item = Math.floor(item / 3);
        let test = item % monkeys[m].test === 0;
        let monkeyToThrow = test ? monkeys[m].ifTrue : monkeys[m].ifFalse;
        monkeys[monkeyToThrow].items.push(item);
      }
      monkeys[m].items = [];
    }
  }

  const result = monkeys
    .map((monkey) => monkey.inspections)
    .sort((monkeyA, monkeyB) => monkeyB - monkeyA)
    .slice(0, 2);

  return result[0] * result[1];
};
