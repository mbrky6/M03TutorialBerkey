const people = ["Q", "Sal", "Murr", "Joe"];
const ages = [46, 46, 46, 46]; // Didn't think this one through

console.log(people);

// Export the values to make them available from other places
module.exports = {
  people,
  ages
};