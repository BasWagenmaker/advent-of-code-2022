import { getInputData } from "../../utils/get-input-data.js";
import { stringGetNumbers } from "../../utils/string/string-get-numbers.js";

const parseSensors = (input) => {
  const sensors = input.map((sensor) => stringGetNumbers(sensor));
  return sensors;
};

export const part1 = (inputFile) => {
  const input = getInputData(inputFile);
  const sensors = parseSensors(input);
  const pairs = new Set();
  for (let sensorA of sensors) {
    const [sensorAX, sensorAY, beaconAX, beaconAY] = sensorA;
    const radiusA =
      Math.abs(sensorAX - beaconAX) + Math.abs(sensorAY - beaconAY);
    for (let sensorB of sensors) {
      const [sensorBX, sensorBY, beaconBX, beaconBY] = sensorB;
      const radiusB =
        Math.abs(sensorBX - beaconBX) + Math.abs(sensorBY - beaconBY);
      const distanceSensors =
        Math.abs(sensorAX - sensorBX) + Math.abs(sensorAY - sensorBY);
      const requiredDistance = radiusA + radiusB + 2;

      if (distanceSensors === requiredDistance) {
        pairs.add([sensorA, sensorB]);
        console.log("PAIR");
        console.log(sensorA);
        console.log(sensorB);
        console.log("Sensor A lines");
        console.log(sensorAX, sensorAY + radiusA);
        console.log(sensorAX, sensorAY - radiusA);
        console.log(sensorAX + radiusA, sensorAY);
        console.log(sensorAX - radiusA, sensorAY);
        console.log("Sensor B lines");
        console.log(sensorBX, sensorBY + radiusB);
        console.log(sensorBX, sensorBY - radiusB);
        console.log(sensorBX + radiusB, sensorBY);
        console.log(sensorBX - radiusB, sensorBY);
        // const intersection = intersect(
        //   // 3673956,
        //   // 3148826,
        //   // 3195567,
        //   // 2670437, //red
        //   // 3150886,
        //   // 3190986,
        //   // 3861926,
        //   // 2479946, //blue
        //   // 3220350,
        //   // 3121524,
        //   // 3635583,
        //   // 2706291, //orange
        //   // 3817496,
        //   // 3292368,
        //   // 3009537,
        //   // 2484409 // green
        // );
        // const intersection = intersect(
        //   2,
        //   5,
        //   5,
        //   2,
        //   5,
        //   5,
        //   2,
        //   2
        // );
        // console.log(intersection.x * 4000000 + intersection.y);
        // console.log(intersection);

        // 13734006908371 = red/blue // { x: 3433501, y: 2908371 }
        // 13734006908372 = answer
        // 13734006908373 = orange/green // { x: 3433501, y: 2908373 }
      }
    }
  }
  console.log(pairs)
  // console.log(sensors);
};

function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
  console.log("line 1: ", x1, y1, x2, y2);
  console.log("line 2: ", x3, y3, x4, y4);
  // Check if none of the lines are of length 0
  if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
    console.log("length 0");
    return false;
  }

  let denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

  // Lines are parallel
  if (denominator === 0) {
    console.log("parallel");
    return false;
  }

  let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
  let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;

  // is the intersection along the segments
  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
    console.log("not along segements or w/e");
    return false;
  }

  // Return a object with the x and y coordinates of the intersection
  let x = x1 + ua * (x2 - x1);
  let y = y1 + ua * (y2 - y1);

  return { x, y };
}

part1("./input.txt");
