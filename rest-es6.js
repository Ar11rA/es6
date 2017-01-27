module.exports = function average(...args) {
  var sumOfNumbers = 0;
  args.forEach(function (element) {
    sumOfNumbers = sumOfNumbers + element;
  });
  return (sumOfNumbers / (args.length));
};