// console.log(global);

// Run something once after a set amount of time
setTimeout(() => {
  console.log("In the timeout");

  // Stop running a method on an interval
  clearInterval(int);
}, 3000);

// Run a method once every set interval
const int = setInterval(() => {
  console.log("In the interval")
}, 1000);

// Display the directory and file names
console.log(__dirname);
console.log(__filename);