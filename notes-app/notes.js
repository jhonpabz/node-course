const chalk = require('chalk');
const fs = require('fs');
const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.bgGreen('New note added!'));
  } else {
    console.log(chalk.bgRed('Duplicate title!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const filteredNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > filteredNotes.length) {
    console.log(chalk.bgGreen('Note removed!'));
    saveNotes(filteredNotes);
  } else {
    console.log(chalk.bgRed('No note found!'));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.bgGreen('Your Notes:'));
  // Print all notes title
  notes.forEach((notes) => console.log(notes.title));
};

const readNote = (title) => {
  const notes = loadNotes();

  const findNote = notes.find((note) => note.title === title);

  if (findNote) {
    console.log(findNote);
    console.log(chalk.bgGreen(findNote.title));
    console.log(findNote.body);
  } else {
    console.log(chalk.bgRed('No note found!'));
  }
};

const loadNotes = () => {
  try {
    const data = fs.readFileSync('notes.json');
    const dataJSON = data.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};
