

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCgUa9irOw7k5j22mbqAl1k8DmxVQCSQaU",
    authDomain: "train-scheduler-be30c.firebaseapp.com",
    databaseURL: "https://train-scheduler-be30c.firebaseio.com",
    projectId: "train-scheduler-be30c",
    storageBucket: "",
    messagingSenderId: "569393288839"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //Button for adding trains
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();

//Grab user input
var trainName = $("#train-name-input").val().trim();
var destination = $("#destination-input").val().trim();
var firstTrainTime = $("#first-train-time-input").val().trim();
var frequency = $("#frequency-input").val().trim();

// Creates local "temporary" object for holding train data
var newTrain = {
  name: trainName,
  destLocation: destination,
  timeFirst: firstTrainTime,
  howOften: frequency
};

// Uploads train data to the database
database.ref().push(newTrain);

 // Logs everything to console
 console.log(newTrain.name);
 console.log(newTrain.destLocation);
 console.log(newTrain.timeFirst);
 console.log(newTrain.howOften);

 //Alert
 alert("Train successfully added");

 //Clears all of the text boxes
 $("#train-name-input").val("");
 $("#destination-input").val("");
 $("#first-train-time-input").val("");
 $("#frequency-input").val("");
});

// 3. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
// Child added loops the data for each entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().destLocation;
  var firstTrainTime = childSnapshot.val().timeFirst;
  var frequency = childSnapshot.val().howOften;

  // Employee Info
  console.log(trainName);
  console.log(destination);
  console.log(firstTrainTime);
  // console.log(frequency);

  var tableRowData = $("<tr>");
  var tableData = $("<td>" + trainName + "</td><td>" + destination + "</td><td>" + firstTrainTime + "</td><td>" + frequency + "</td>");

// Append means attach.  Attaching tableData to tableRowData
  tableRowData.append(tableData);
  $("tbody").append(tableRowData);

});

// Prettify the employee start
//   var empStartPretty = moment.unix(empStart).format("MM/DD/YY");

//   // Calculate the months worked using hardcore math
//   // To calculate the months worked
//   var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
//   console.log(empMonths);

//   // Calculate the total billed rate
//   var empBilled = empMonths * empRate;
//   console.log(empBilled);

//   // Add each train's data into the table
//   $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
//   empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
// });










  
