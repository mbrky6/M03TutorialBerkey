const fs = require('fs');

// Create a buffer stream to read the blog3.txt file and another stream to write a new blog4.txt file
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: "utf8" });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// Perform the function for every chunk of data read
/**
readStream.on('data', (chunk) => {
  console.log("New chunk received");
  console.log(chunk);
  writeStream.write('\nNext Chunk\n');
  writeStream.write(chunk);
}); // Chunks are way larger than I thought. This story I found on Reddit isn't actually that good of an example.
*/

// Move data directly from a read stream to a write stream
readStream.pipe(writeStream);