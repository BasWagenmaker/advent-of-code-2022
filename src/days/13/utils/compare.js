import { numberIsNumber } from "../../../utils/number/number-is-number.js";

export const compare = (left, right) => {
  while (left.length && right.length) {
    const l = left.shift();
    const r = right.shift();

    if (numberIsNumber(l) && numberIsNumber(r)) {
      if (l < r) return true;
      else if (l > r) return false;
    } else if (Array.isArray(l) && Array.isArray(r)) {
      const res = compare(l, r);
      if (typeof res == "boolean") return res;
    } else if (numberIsNumber(l) && Array.isArray(r)) {
      const res = compare([l], r);
      if (typeof res == "boolean") return res;
    } else if (Array.isArray(l) && numberIsNumber(r)) {
      const res = compare(l, [r]);
      if (typeof res == "boolean") return res;
    }
  }

  if (left.length) return false;
  if (right.length) return true;
};
