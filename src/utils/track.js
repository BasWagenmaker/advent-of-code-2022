export const track = (functionToRun, input) => {
  var startTime = performance.now();
  const result = functionToRun(input);
  var endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log(`Execution time: ${executionTime.toFixed(3)} milliseconds`);
  return result;
};
