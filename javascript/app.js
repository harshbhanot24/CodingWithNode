var greet = require('./greet');// compiler searches for greet.js. Since it isn't found, compiler will fallback for greet directory
greet.english(); // coming from english.js file
greet.spanish(); // coming from spanish.js file