export const moveKnot = (head, tail) => {
  const dx = head.x - tail.x;
  const dy = head.y - tail.y;
  const y = tail.y + dy / (Math.abs(dy) || 1);
  const x = tail.x + dx / (Math.abs(dx) || 1);

  return { y, x };
};
