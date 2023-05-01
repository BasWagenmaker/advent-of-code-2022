import { stringGetNumbers } from "../../../utils/string/string-get-numbers.js";

export const getDirSizes = (input) => {
  const location = [];
  const dirSizes = {};

  for (let i = 0; i < input.length; i++) {
    if (/\d+\s\w+/.test(input[i])) {
      const size = stringGetNumbers(input[i])[0];
      const path = [];
      location.forEach((dir) => {
        path.push(dir);
        const dirSize = dirSizes[path.join("/")] ?? 0;
        dirSizes[path.join("/")] = dirSize + size;
      });
    } 
    else if (/\$ cd/.test(input[i])) {
      const [_, _cd, dir] = input[i].split(" ");
      dir === ".." ? location.pop() : location.push(dir);
    }
  }
  return dirSizes;
};
