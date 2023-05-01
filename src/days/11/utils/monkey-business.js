export const monkeyBusiness = (monkeys, divisor, rounds) => {
  const divisors = monkeys.map(({ test }) => test).reduce((a, b) => a * b);
  for (let r = 1; r <= rounds; r++) {
    for (let m = 0; m < monkeys.length; m++) {
      monkeys[m].inspections += monkeys[m].items.length;
      for (let i = 0; i < monkeys[m].items.length; i++) {
        let methodTarget = isNaN(monkeys[m].operation)
          ? monkeys[m].items[i]
          : monkeys[m].operation;

        let item = Math.trunc(monkeys[m].items[i] / divisor) % divisors;

        item =
          monkeys[m].method === "+" ? item + methodTarget : item * methodTarget;

        let test = item % monkeys[m].test === 0;
        let monkeyToThrow = test ? monkeys[m].ifTrue : monkeys[m].ifFalse;
        monkeys[monkeyToThrow].items.push(item);
      }
      monkeys[m].items = [];
    }
  }
  return monkeys
    .map((monkey) => monkey.inspections)
    .sort((monkeyA, monkeyB) => monkeyB - monkeyA)
    .slice(0, 2)
    .reduce((a, b) => a * b);
};
