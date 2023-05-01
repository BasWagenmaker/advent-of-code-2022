export const matrixFindPosition = (graph, node) => {
  for (let r = 0; r < graph.length; r++) {
    for (let c = 0; c < graph[r].length; c++) {
      if (graph[r][c] === node) {
        return { r, c };
      }
    }
  }
};
