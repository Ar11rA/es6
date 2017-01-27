var inputs = process.argv.slice(2);
var result = inputs.map((element) => element.substring(0, 1))
  .reduce((acc, curr, index, result) => (acc = acc + curr), '');
console.log(`[${inputs}] becomes \"${result}\"`);