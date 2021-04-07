const chalk = require('chalk');
const yargs = require('yargs');
const note = require('./notes.js');


// Create add command
yargs.command({
	command: 'add',
	description: 'Add a new note',
	builder: {
		title: {
			description: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			description: 'Note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv){
		note.addNote(argv.title, argv.body);
	}
});

// Remove command
yargs.command({
	command: 'remove',
	description: 'Remove a new note',
	builder: {
		title: {
			description: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv){
		note.removeNote(argv.title);
	}
});


// List command
yargs.command({
	command: 'list',
	description: 'Listing all notes',
	handler(){
		note.listNotes();
	}
});

// Read command
yargs.command({
	command: 'read',
	description: 'Reading a note',
	title: {
		description: 'Note title',
		demandOption: true,
		type: 'string'
	},
	handler(argv){
		note.readNote(argv.title);
	}
});

yargs.parse()

// const command = process.argv[2];

// if(command == 'add'){
// 	console.log('Adding note!');
// }else if(command == 'remove'){
// 	console.log('Removing note!');
// }

