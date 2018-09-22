var english = require('./english');// To require english.js file
var spanish = require('./spanish');// To require spanish.js file

module.exports = { // whatever you pass to exports will be available for you to use in the parent file
    english: english, // here we are passing two functions to require in the parent file
    spanish: spanish 
};
// Also, notice that all the files in the current directory will be linked to index.js which will be automatically 
// treated as the entry point for the compiler while execution.

// NOTE - 
// Do correct any part of the code you feel to be corrected.
// Also, go ahead and do your own modifications and show your creativity