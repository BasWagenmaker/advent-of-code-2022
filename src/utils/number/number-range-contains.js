export const numberRangeContains = (start1, end1, start2, end2) => {
  return (
    (Number(start2) <= Number(start1) && Number(end2) >= Number(end1)) ||
    (Number(start1) <= Number(start2) && Number(end1) >= Number(end2))
  );
};
