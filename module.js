// Import from the specified file
const {people, ages} = require('./people');

console.log(people, ages);

// Import the native os module
const os = require("os");

// Print the OS platform and home directory
console.log(os.platform(), os.homedir());