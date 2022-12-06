const fs = require("fs");

fs.writeFileSync("notes.txt", "Jhon pabz gaming.");
fs.appendFileSync("notes.txt", " Second sentence here.");
fs.appendFileSync("notes.txt", " Third sentence here.");
