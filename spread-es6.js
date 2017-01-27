let numberArray = process.argv.slice(2);
console.log('The minimum of ['+ numberArray +'] is '+Math.min(...numberArray));