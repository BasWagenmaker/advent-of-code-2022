import { stringGetNumbers } from "../../../utils/string/string-get-numbers.js";

export const parseMonkeys = (input) => {
    const rawMonkeys = input.split("\n\n").map((monkey) => monkey.split("\n"));
  
    const monkeys = rawMonkeys.map((monkey) => {
      const monkeyId = stringGetNumbers(monkey[0])[0];
      const items = stringGetNumbers(monkey[1]);
      const method = monkey[2].substring(23, 24);
      const operation =
        stringGetNumbers(monkey[2]).length > 0
          ? stringGetNumbers(monkey[2])[0]
          : "old";
      const test = stringGetNumbers(monkey[3])[0];
      const ifTrue = stringGetNumbers(monkey[4])[0];
      const ifFalse = stringGetNumbers(monkey[5])[0];
      const inspections = 0;
  
      return {
        monkeyId,
        items,
        method,
        operation,
        test,
        ifTrue,
        ifFalse,
        inspections,
      };
    });
  
    return monkeys;
  };
  