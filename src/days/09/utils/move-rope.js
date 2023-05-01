import { moveKnot } from "./move-knot.js";
import { matrixAreTouching } from "../../../utils/matrix/matrix-are-touching.js"
import { DIRECTIONS } from "../constants/directions.js"

export const moveRope = (instructions, length) => {
  const visited = new Set(["0,0"]);
  let rope = Array.from({ length }, () => ({ y: 0, x: 0 }));
  for (let [direction, steps] of instructions) {
    while (steps--) {
      for (let i = 0; i < rope.length - 1; i++) {
        if (i === 0) {
          rope[i].y += DIRECTIONS[direction][0];
          rope[i].x += DIRECTIONS[direction][1];
        }

        if (!matrixAreTouching(rope[i], rope[i + 1])) {
          rope[i + 1] = moveKnot(rope[i], rope[i + 1]);
        }
      }
      const tail = rope.at(-1);
      visited.add(`${tail.y},${tail.x}`);
    }
  }
  return visited.size;
};
