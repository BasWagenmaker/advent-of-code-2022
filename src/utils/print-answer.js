import { ANSWERS } from "../constants/answers.js";
import chalk from "chalk";

export const printAnswer = async (functionToRun, input, day, part) => {
  gc();
  const heapBaseline = process.memoryUsage().heapUsed;
  const startTime = performance.now();
  const answer = functionToRun(input);
  const endTime = performance.now();
  const heapExecuted = process.memoryUsage().heapUsed;
  const heapUsed = heapExecuted - heapBaseline;
  const executionTime = endTime - startTime;
  const result = ANSWERS[day][part];
  console.log(`Part: ${chalk.bold(part)}`);
  console.log(`Answer: ${chalk.bold(answer)}`);
  console.log(
    `Result: ${chalk.bold(
      answer === result
        ? chalk.green("CORRECT")
        : chalk.red(`INCORRECT: ${result}`)
    )}`
  );
  console.log(
    `Execution time: ${chalk.bold(executionTime.toFixed(3))} milliseconds`
  );
  console.log(
    `Memory usage: ${chalk.bold(
      Math.round((heapUsed / 1024 / 1024) * 100) / 100
    )} MB`
  );
  return executionTime;
};
