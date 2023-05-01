export const moveCrates = (instructions, stacks, reverse) => {
  for (let i = 0; i < instructions.length; i++) {
    const from = stacks[instructions[i][1] - 1];
    const to = stacks[instructions[i][2] - 1];
    const crates = from.slice(0, instructions[i][0]);
    if (reverse) crates.reverse();
    stacks[instructions[i][2] - 1] = crates.concat(to);
    from.splice(0, instructions[i][0]);
  }
  let result = "";
  for (let s = 0; s < stacks.length; s++) result += stacks[s][0];
  return result;
};
