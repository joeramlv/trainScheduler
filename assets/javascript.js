// inititalizing firebase
// var config = {
//     apiKey: "AIzaSyA9N0P_ZUJwp0uHHdRxhMNlyyJEPOOWatE",
//     authDomain: "trainscheduler-39e9e.firebaseapp.com",
//     databaseURL: "https://trainscheduler-39e9e.firebaseio.com",
//     projectId: "trainscheduler-39e9e",
//     storageBucket: "trainscheduler-39e9e.appspot.com",
//     messagingSenderId: "757246823885"
//   };
//   firebase.initializeApp(config);

//   var database = firebase.database();
  

//   here is a button to add trains to the schedule
$("#add-train-btn").on("click", function(event) {

// this event will prevent the button from refreshing the page
    event.preventDefault();

// grabbing the value from the input text boxes
var tName = $("#train-name-input").val().trim();
var tdest = $("#destination-input").val().trim();
var ttime = $("#time-input").val().trim();
var tfreq = $("#freq-input").val().trim();

// making a temporary object to store all train info
var train = {
    name: tName,
    destination: tdest,
    time: ttime,
    freq: tfreq
};

// here we will upload the train data to firebase
// database.ref().push(train)

// console logging to double check the work
console.log(train.name);
console.log(train.destination);
console.log(train.time);
console.log(train.freq);

// clearing the text inputs
// $("#train-name-input").val("");
// $("#destination-input").val("");
// $("#time-input").val("");
// $("#time-input").val("");

});
