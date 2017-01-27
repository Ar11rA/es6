function makeImportant(inputWord, numberOfTimes = inputWord.length){
  return(`${inputWord}${'!'.repeat(numberOfTimes)}`);
}

module.exports = makeImportant;