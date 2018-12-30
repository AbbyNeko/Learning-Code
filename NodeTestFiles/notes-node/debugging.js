var person = {
  name: 'Andy'
};

person.age = 25;
person.status = 'Single';

debugger; //stop at specific place in debugger mode

person.name = 'Mike';

console.log(person);

//COMMAND: node inspect debugging.js (can use w/ nodemon)

// COMMAND IN Debug: n (next) and c (continue till complete)
// list(numOfLinesToShow)
// type repl to change to console mode.

// Can also use chrome tool by entering command node --inspect-brk file.js
