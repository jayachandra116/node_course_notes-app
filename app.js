// const fs=require('fs');
// fs.appendFileSync('file1.txt','This is a data created by the JC\n');

// const util=require('./utils.js');
// const name='JC';
// util(name);

//const notes = require("./notes.js");
// console.log(notes.getNotes());

// const validator=require('validator');
// console.log(validator.isURL('https:/jc.com'));

//const chalk = require("chalk");
// console.log(chalk.green('Success!'));
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// console.log(chalk.blue.bgRed.bold('Hello world!'));
// console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// console.log(chalk.green.inverse('Hello'));

//[
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\mjaya\\Desktop\\nodejsProjects\\courseProjects\\notes-app\\app.js'
//   ]
//console.log(process.argv);
// const command=process.argv[2];
// if(command === 'add'){
//     console.log("adding note");
// }else if(command==='remove'){
//     console.log('removing note');
// }
// else{
//     console.log(command);
// }
const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
      title:{
        describe:'Note title',
        demandOption:true,
        type:'string'
      },
      body:{
        describe:'Note body',
        demandOption:true,
        type:'string'
      }
    },
    handler(argv) {
       // console.log('Adding a new note!',argv)
       console.log('Title: '+argv.title);
       console.log('Body: '+argv.body);
       notes.addNote(argv.title,argv.body);

    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
      title:{
        describe:'Note title',
        demandOption:true,
        type:'string'
      }
    },
    handler(argv){
        //console.log('Removing the note');
        notes.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        //console.log('Listing out all notes');
        notes.listNotes();
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
      title:{
        describe:'Note title',
        demandOption:true,
        type:'string'
      }
    },
    handler(argv){
        //console.log('Reading a note')
        notes.readNote(argv.title);
    }
})

yargs.parse();

//console.log(yargs.argv)