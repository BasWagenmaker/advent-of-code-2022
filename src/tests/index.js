import chalk from "chalk";
import { printAnswer } from "../utils/print-answer.js";
import { DAYS } from "../constants/days.js"
import { part1 as day1part1 } from "../days/01/part1.js";
import { part2 as day1part2 } from "../days/01/part2.js";
import { part1 as day2part1 } from "../days/02/part1.js";
import { part2 as day2part2 } from "../days/02/part2.js";
import { part1 as day3part1 } from "../days/03/part1.js";
import { part2 as day3part2 } from "../days/03/part2.js";
import { part1 as day4part1 } from "../days/04/part1.js";
import { part2 as day4part2 } from "../days/04/part2.js";
import { part1 as day5part1 } from "../days/05/part1.js";
import { part2 as day5part2 } from "../days/05/part2.js";
import { part1 as day6part1 } from "../days/06/part1.js";
import { part2 as day6part2 } from "../days/06/part2.js";
import { part1 as day7part1 } from "../days/07/part1.js";
import { part2 as day7part2 } from "../days/07/part2.js";
import { part1 as day8part1 } from "../days/08/part1.js";
import { part2 as day8part2 } from "../days/08/part2.js";
import { part1 as day9part1 } from "../days/09/part1.js";
import { part2 as day9part2 } from "../days/09/part2.js";
import { part1 as day10part1 } from "../days/10/part1.js";
import { part2 as day10part2 } from "../days/10/part2.js";
import { part1 as day11part1 } from "../days/11/part1.js";
import { part2 as day11part2 } from "../days/11/part2.js";
import { part1 as day12part1 } from "../days/12/part1.js";
import { part2 as day12part2 } from "../days/12/part2.js";
import { part1 as day13part1 } from "../days/13/part1.js";
import { part2 as day13part2 } from "../days/13/part2.js";
import { part1 as day14part1 } from "../days/14/part1.js";
import { part2 as day14part2 } from "../days/14/part2.js";
import { part1 as day15part1 } from "../days/15/part1.js";
// import { part2 as day15part2 } from "../days/15/part2.js";

let totalExecutionTime = 0
console.log(chalk.bold(DAYS[1]))
totalExecutionTime += await printAnswer(day1part1, "./src/days/01/input.txt", 1, 1)
totalExecutionTime += await printAnswer(day1part2, "./src/days/01/input.txt", 1, 2)

console.log(chalk.bold(DAYS[2]))
totalExecutionTime += await printAnswer(day2part1, "./src/days/02/input.txt", 2, 1)
totalExecutionTime += await printAnswer(day2part2, "./src/days/02/input.txt", 2, 2)

console.log(chalk.bold(DAYS[3]))
totalExecutionTime += await printAnswer(day3part1, "./src/days/03/input.txt", 3, 1)
totalExecutionTime += await printAnswer(day3part2, "./src/days/03/input.txt", 3, 2)

console.log(chalk.bold(DAYS[4]))
totalExecutionTime += await printAnswer(day4part1, "./src/days/04/input.txt", 4, 1)
totalExecutionTime += await printAnswer(day4part2, "./src/days/04/input.txt", 4, 2)

console.log(chalk.bold(DAYS[5]))
totalExecutionTime += await printAnswer(day5part1, "./src/days/05/input.txt", 5, 1)
totalExecutionTime += await printAnswer(day5part2, "./src/days/05/input.txt", 5, 2)

console.log(chalk.bold(DAYS[6]))
totalExecutionTime += await printAnswer(day6part1, "./src/days/06/input.txt", 6, 1)
totalExecutionTime += await printAnswer(day6part2, "./src/days/06/input.txt", 6, 2)

console.log(chalk.bold(DAYS[7]))
totalExecutionTime += await printAnswer(day7part1, "./src/days/07/input.txt", 7, 1)
totalExecutionTime += await printAnswer(day7part2, "./src/days/07/input.txt", 7, 2)

console.log(chalk.bold(DAYS[8]))
totalExecutionTime += await printAnswer(day8part1, "./src/days/08/input.txt", 8, 1)
totalExecutionTime += await printAnswer(day8part2, "./src/days/08/input.txt", 8, 2)

console.log(chalk.bold(DAYS[9]))
totalExecutionTime += await printAnswer(day9part1, "./src/days/09/input.txt", 9, 1)
totalExecutionTime += await printAnswer(day9part2, "./src/days/09/input.txt", 9, 2)

console.log(chalk.bold(DAYS[10]))
totalExecutionTime += await printAnswer(day10part1, "./src/days/10/input.txt", 10, 1)
totalExecutionTime += await printAnswer(day10part2, "./src/days/10/input.txt", 10, 2)

console.log(chalk.bold(DAYS[11]))
totalExecutionTime += await printAnswer(day11part1, "./src/days/11/input.txt", 11, 1)
totalExecutionTime += await printAnswer(day11part2, "./src/days/11/input.txt", 11, 2)

console.log(chalk.bold(DAYS[12]))
totalExecutionTime += await printAnswer(day12part1, "./src/days/12/input.txt", 12, 1)
totalExecutionTime += await printAnswer(day12part2, "./src/days/12/input.txt", 12, 2)

console.log(chalk.bold(DAYS[13]))
totalExecutionTime += await printAnswer(day13part1, "./src/days/13/input.txt", 13, 1)
totalExecutionTime += await printAnswer(day13part2, "./src/days/13/input.txt", 13, 2)

console.log(chalk.bold(DAYS[14]))
totalExecutionTime += await printAnswer(day14part1, "./src/days/14/input.txt", 14, 1)
totalExecutionTime += await printAnswer(day14part2, "./src/days/14/input.txt", 14, 2)

console.log(chalk.bold(DAYS[15]))
totalExecutionTime += await printAnswer(day15part1, "./src/days/15/input.txt", 15, 1)
// totalExecutionTime += await printAnswer(day15part2, "./src/days/15/input.txt", 15, 2)


console.log(chalk.bold("----------------"))
console.log(`Total execution time: ${chalk.bold(totalExecutionTime.toFixed(3))} milliseconds`)