const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var db = firebase.firestore();

console.log(db);
