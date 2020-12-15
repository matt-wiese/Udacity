// a separate js file to compartmentalize declared/constructor functions

// pulling from dino.json, constructs individual dino with metric or
// imperial depending on the choice
// Create Dino Constructor

// Function that reads an external text file
// https://stackoverflow.com/questions/39989756/how-do-i-make-a-function-that-returns-the-value-of-a-local-text-file-in-javascri

function readDinosJSON() {
  let rawFile = new XMLHttpRequest();
  let allText = "";
  rawFile.open(
    "GET",
    "https://matt-wiese.github.io/Dinosaurs/assets/json/dino.json",
    false
  );
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        allText = rawFile.responseText;
      }
    }
  };
  rawFile.send(null);
  let objectJSON = JSON.parse(allText);
  dinos = objectJSON.Dinos;
  return dinos;
}

/**
 * @description Called when the user changes units in the form, sets or hides the metric and imperial height and weight input elements
 */
function chMeasureUnits() {
  if (document.getElementById("metric").checked) {
    document.getElementById("metric-form").style.display = "block";
    document.getElementById("imperial-form").style.display = "none";
  } else {
    document.getElementById("metric-form").style.display = "none";
    document.getElementById("imperial-form").style.display = "block";
  }
}

// Shuffles a given array to produce random re-ordering when invoked
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?noredirect=1&lq=1

function shuffleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Places object in middle of array
// from Intro to JavaScript - L6:S13
// trying to use this to place the human object w/o additional code
function valueMiddleArray(arr, human) {
  arr.splice(arr.length / 2, 0, human);
  return arr;
}
