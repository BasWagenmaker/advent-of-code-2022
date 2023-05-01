import { getInputData } from "../../utils/get-input-data.js"
import { RESULTS_MAP } from "./constants/results-map.js"
import { POINTS_PER_SHAPE } from "./constants/points-per-shape.js"
import { POINTS_PER_RESULT } from "./constants/points-per-result.js";

const LETTER_MAP = {
    'X': 'A',
    'Y': 'B',
    'Z': 'C'
}

const getPointsByRound = (round) => {
    const shape = LETTER_MAP[round[1]]
    const result = RESULTS_MAP[round[0]][shape]
    const pointsForResult = POINTS_PER_RESULT[result]
    const pointsForShape = POINTS_PER_SHAPE[shape]

    return pointsForResult + pointsForShape
}

export const part1 = (inputFile) => {
  const input = getInputData(inputFile);

  let sumOfPoints = 0
  for (let i = 0; i < input.length; i++) {
    let round = input[i].split(" ")
    let points = getPointsByRound(round)
    sumOfPoints+= points
  }

  return sumOfPoints
}
