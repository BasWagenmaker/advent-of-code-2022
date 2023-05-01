import { matrixFindPosition } from "../../../utils/matrix/matrix-find-position.js";
import { getPossibleNodes } from "./get-possible-nodes.js";

export const bfs = (graph, start, end) => {
  const result = [];
  const queue = [];
  const startNode = matrixFindPosition(graph, start);
  const visited = new Set([`${startNode.r}:${startNode.c}`]);
  queue.push(startNode);
  let previous = [];
  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    if (graph[node.r][node.c] === end) {
      return previous[`${node.r}:${node.c}`].length;
    }
    const possibleSquares = getPossibleNodes(node, graph);
    const neighbors = possibleSquares.filter(
      (neighbor) =>
        !visited.has(`${neighbor.r}:${neighbor.c}`) &&
        visited.add(`${neighbor.r}:${neighbor.c}`)
    );

    queue.push(...neighbors);
    neighbors.forEach((neighbor) => {
      previous[`${neighbor.r}:${neighbor.c}`] = previous[`${node.r}:${node.c}`]
        ? [...previous[`${node.r}:${node.c}`]]
        : [];
      previous[`${neighbor.r}:${neighbor.c}`].push(`${node.r}:${node.c}`);
    });
  }
};
