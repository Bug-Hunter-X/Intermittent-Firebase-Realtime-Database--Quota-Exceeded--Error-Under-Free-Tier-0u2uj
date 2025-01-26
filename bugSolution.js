// bugSolution.js
const firebase = require('firebase/app');
require('firebase/database');

// ... your Firebase configuration

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function performDatabaseOperation() {
  return database.ref('/your/data/path').once('value')
  .then(snapshot => {
    console.log('Data:', snapshot.val());
  })
  .catch(error => {
    if (error.code === 'quota_exceeded'){
        console.error('Quota exceeded error:', error);
        //Add more robust logging here.  Log the timestamp, the attempted operation (using a try catch block around the problematic database method), and potentially relevant data that might help diagnose the cause (current data usage).  Consider reporting this error in a monitoring platform that might allow you to alert on quota exceeded errors and investigate their underlying cause.
    } else {
      console.error('Database operation failed:', error);
    }
  });
}

performDatabaseOperation();
