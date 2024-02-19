const text = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";
//Task 1
const matched = text.match(/spain/ig)
console.log("Task 1: ", matched);
// Task 2
const findPosition = text.matchAll(/rain/ig)
console.log("Task 2: ", ...findPosition);
// Task 3
const countryChange = text.replace(/spain/i, "France")
console.log("Task 3: ", countryChange);
// Task 4
const airChange = text.replaceAll(/rain/gi, 'sun')
console.log("Task 4: ", airChange);
// Task 5
const searchedElement = text.search(/plain/)
console.log("Task 5: ", searchedElement);