import { getInputData } from "../../utils/get-input-data.js"
import { POINTS_PER_RESULT } from "./constants/points-per-result.js";
import { POINTS_PER_SHAPE } from "./constants/points-per-shape.js";
import { RESULTS_MAP } from "./constants/results-map.js";

const LETTER_MAP = {
    'X': 'lose',
    'Y': 'draw',
    'Z': 'win'
}

const getPointsByRound = (round) => {
    const requiredResult = LETTER_MAP[round[1]]
    const pointsForResult = POINTS_PER_RESULT[requiredResult]

    const options = RESULTS_MAP[round[0]]
    const shape = Object.keys(options).find(result => options[result] === requiredResult)
    const pointsForShape = POINTS_PER_SHAPE[shape]

    return pointsForResult + pointsForShape
}


export const part2 = (inputFile) => {
  const input = getInputData(inputFile);

  let sumOfPoints = 0
  for (let i = 0; i < input.length; i++) {
    let round = input[i].split(" ")
    let points = getPointsByRound(round)
    sumOfPoints+= points
  }

  return sumOfPoints
}
