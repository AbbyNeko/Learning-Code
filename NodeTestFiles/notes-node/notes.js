
/*module.exports.age = 24;
module.exports.addNote = (title, body) => {
  console.log('adding note', title, body);
};*/

/***************************************
Add the values of a and b
***************************************/
/*module.exports.addSum = (a, b) => {
  return a + b;
}*/

const fs = require('fs');

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    // do not do variable unless it is used more than once
    return JSON.parse(notesString);
  }catch(e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//command: node app.js add --title=secret --body="this is my secret"
var addNote = (title, body) => {
  console.log('Adding note', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  //gets duplicate notes with updated ES6 way
  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () => {
  console.log('Getting all notes');
  return fetchNotes();
};

var getNote = (title) => {
  var allNotes = fetchNotes();
  var foundNote = allNotes.filter((note) => note.title === title);
    //console.log('Getting note', title);
    return foundNote[0];
};

var removeNote = (title) => {
  //fetch notes
  var allNotes = fetchNotes();
  //filter notes, removing one with title of argument
  var filteredNotes = allNotes.filter((note) => note.title !== title);
  //save new notes array
  saveNotes(filteredNotes);
  console.log('Removing note', title);
  console.log('Notes now: ', fetchNotes());

};

var logNote = (note) => {
  debugger;
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,  //same as getAll : getAll
  getNote,
  logNote,
  removeNote
};
