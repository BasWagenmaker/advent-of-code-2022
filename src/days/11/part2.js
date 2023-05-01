import { getInputData } from "../../utils/get-input-data.js";
import { parseMonkeys } from "./utils/parse-monkeys.js";
import { monkeyBusiness } from "./utils/monkey-business.js";

export const part2 = (inputFile) => {
  const input = getInputData(inputFile, false);
  const monkeys = parseMonkeys(input);
  const rounds = 10000;
  // const divisors = monkeys.map(({ test }) => test).reduce((a, b) => a * b);

  return monkeyBusiness(monkeys, 1, rounds)

  for (let r = 1; r <= rounds; r++) {
    for (let m = 0; m < monkeys.length; m++) {
      monkeys[m].inspections += monkeys[m].items.length;
      for (let i = 0; i < monkeys[m].items.length; i++) {
        let methodTarget = isNaN(monkeys[m].operation)
          ? monkeys[m].items[i]
          : monkeys[m].operation;

        let item = monkeys[m].items[i] % divisors;

        item =
          monkeys[m].method === "+" ? item + methodTarget : item * methodTarget;

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
    .slice(0, 2)
    .reduce((a, b) => a * b);

  return result;
};
