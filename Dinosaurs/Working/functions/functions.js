// a separate js file to compartmentalize declared/constructor functions

// pulling from dino.json, constructs individual dino with metric or
// imperial depending on the choice
// Create Dino Constructor
function DinoCon(dinoObj, units) {
  this.species = dinoObj.species;
  this.diet = dinoObj.diet;
  this.where = dinoObj.where;
  this.when = dinoObj.when;
  this.fact = dinoObj.fact;
  // programming metric and imperial options (default is imperial per dino.json)
  if (units === "metric") {
    this.weight = Math.round(dinoObj.weight / 2.21);
    this.height = Math.round(dinoObj.height * 2.54);
  } else {
    this.weight = dinoObj.weight;
    this.height = dinoObj.height;
  }
}

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
}
