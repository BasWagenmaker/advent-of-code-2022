export const numberRangeOverlap = (start1, end1, start2, end2) => {
  return Number(start1) <= Number(end2) && Number(end1) >= Number(start2);
};
