
const fs = require('fs'); //File System
const os = require('os'); //OS
const _ = require('lodash'); //lodash package
const yargs = require('yargs'); //yargs

const notes = require('./notes.js'); //notes.js

var user = os.userInfo();
const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe:'Body of note',
  demand: true,
  alias: 'e'  //sets it as -e="body"
};

const argv = yargs
// add --help to list all commands
.command('add', 'Add a new note', {
  //requires title
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Reading note', {
  title: titleOptions
})
.command('remove', 'Remove a note', {
  title: titleOptions
})
.help()
.argv;
//Command Run parameter passed
var command = argv._[0];
//console.log('Command: ', command);
//console.log('Process: ', process.argv);
//console.log('Yargs: ', argv);


if(command === 'add') {
  var note = notes.addNote(argv.title, argv.body);

  if(note) {
    console.log(`Note Created. Title is ${note.title}`);
  } else {
    console.log(`Error: Note Title is Taken`);
  }

} else if(command === 'list') {
  console.log('Listing all notes');
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read') {
  var foundNote = notes.getNote(argv.title);
  if(foundNote) {
    notes.logNote(foundNote);
  }else {
    console.log('No note with that title was found.');
  }
} else if(command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}

/*******************************************
Runs lodash functions
*******************************************/
/*console.log(_.isString(true));
console.log(_.isString('Andrew'));
*/
//Filters out Duplicates********************/
/*var filteredArr = ['Mike','Abby','cat', 'cat', 'dog', 1, 2];
console.log(_.uniq(filteredArr));
*/
/*******************************************
Runs addNote function from notes.js
*******************************************/
//var res = notes.addNote();

/*******************************************
Adds up a and b values
*******************************************/
/*var res = notes.addSum(1,-4);
console.log(res);
*/

/*******************************************
Writes to a text file called greetings.txt
with text from second parameter
*******************************************/

/*fs.appendFile('greetings.txt', 'Hello '+user.username+'! You are '+notes.age+'!', function(err) {
  if(err) {
    console.log('Unable to write File');
  }
});*/
