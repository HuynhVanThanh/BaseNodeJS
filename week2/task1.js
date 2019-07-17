
var readlineSync = require('readline-sync');

var name = readlineSync.question('What\'s your name ? ');
var yob = readlineSync.question('What\'s your year of birth ? ');
var homeTown = readlineSync.question('What\'s your home town ? ');

const moment = require('moment');
const someday = new Date(yob);
age = moment(someday).fromNow();

const chalk = require('chalk');
console.log('Thank you. Hello ' + '\x1b[31m' + name + '\x1b[0m' 
            + ', so you are ' + '\x1b[32m' + age + '\x1b[0m' 
            + ' year old and from ' + '\x1b[33m' + homeTown + '\x1b[0m');