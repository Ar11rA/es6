var inputName = process.argv[2];
var lowerCasedName = inputName.toLowerCase();
var helloString = `Hello, ${inputName}!\nYour name lowercased is \"${lowerCasedName}\".`;
console.log(helloString);