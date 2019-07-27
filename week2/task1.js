const moment = require('moment');
// moment.updateLocale('vi', {
//     calendar : Object
//   });

var readlineSync = require('readline-sync');

var name = readlineSync.question('What\'s your name ? ');
var yob = readlineSync.question('What\'s your year of birth ? ');
var homeTown = readlineSync.question('What\'s your home town ? ');


const someday = new Date(yob);
age = moment(someday).fromNow(true);

const chalk = require('chalk');
console.log(`Thank you. Hello ${chalk.green(name)}, 
            so you are ${chalk.blue(age)} old
            and you from ${chalk.red(homeTown)}`);