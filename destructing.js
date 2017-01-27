let userArray = process.argv.slice(2);
let [ ,username, email] = userArray;
let extractedData = { 'username': username, 'email': email };
console.log(extractedData);