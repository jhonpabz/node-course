const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("Removing note");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "list a note",
  handler: function () {
    console.log("Listing note");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("Reading note");
  },
});

// add, remove, read, list

console.log(yargs.argv);
