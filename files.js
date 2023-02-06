// Import the file system module
const fs = require('fs');

// Read from the blog1.txt file
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  } // if (error)
  // Log the buffer string
  console.log(data);
  // Log the text
  console.log(data.toString());
});

// Update the blog1.txt file
fs.writeFile('./docs/blog1.txt', "Hello, world.", () => {
  console.log("File writing complete")
});

// Write to a new blog2.txt file
fs.writeFile('./docs/blog2.txt', "Goodbye, world.", () => {
  console.log("File writing complete")
});

// Create a new folder or delete it
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    } // if (error)
    console.log("Folder creation complete")
  });
} // if (assets folder doesn't exist)
else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    } // if (error)
    console.log("Folder deleted");
  });
}

// Delete the blog2.txt file
if (fs.existsSync('./docs/blog2.txt')) {
  fs.unlink('./docs/blog2.txt', (err) => {
    if (err) {
      console.log(err);
    } // if (error)
    console.log("File deleted"); // Gone too soon
  })
} // if (blog2.txt exists)