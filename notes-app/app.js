const validator = require("validator");
const getNotes = require("./notes");
const msg = getNotes();
console.log(msg);

console.log(validator.isEmail("jhon@yahoo.com"));
console.log(validator.isURL("jhon@yahoo"));
