import { getInputData } from "../../utils/get-input-data.js";
import { stringGetNumbers } from "../../utils/string/string-get-numbers.js";

const parseSensors = (input) => {
  const sensors = input.map((sensor) => stringGetNumbers(sensor));
  return sensors;
};

export const part1 = (inputFile) => {
  const input = getInputData(inputFile);
  const sensors = parseSensors(input);
  const positions = new Set();
  const row = 2000000;
  const beaconsAndSensors = new Set();

  for (let sensor of sensors) {
    const [sensorX, sensorY, beaconX, beaconY] = sensor;
    const distance = Math.abs(sensorX - beaconX) + Math.abs(sensorY - beaconY);
    if (sensorY === row) beaconsAndSensors.add(sensorY);
    if (beaconY === row) beaconsAndSensors.add(beaconY);
    if (sensorY - distance <= row && row <= sensorY + distance) {
      let distanceY = Math.abs(row - sensorY);
      let distanceSubtraction = distanceY * 2;
      let spread = distance * 2 + 1 - distanceSubtraction;
      let startingX = sensorX - distance + distanceY - 1;
      while (spread) {
        positions.add(startingX + spread);
        spread--;
      }
    }
  }
  return positions.size - beaconsAndSensors.size;
};
