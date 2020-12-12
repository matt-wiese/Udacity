// a separate js file to compartmentalize declared/constructor functions

// pulling from dino.json, constructs individual dino with metric or
// imperial depending on the choice
// Create Dino Constructor

// Function that reads an external text file
// https://stackoverflow.com/questions/39989756/how-do-i-make-a-function-that-returns-the-value-of-a-local-text-file-in-javascri

// function readDinosJSON() {
//   let rawFile = new XMLHttpRequest();
//   let allText = "";
//   rawFile.open(
//     "GET",
//     "https://matt-wiese.github.io/Dinosaurs/assets/json/dino.json",
//     false
//   );
//   rawFile.onreadystatechange = function () {
//     if (rawFile.readyState === 4) {
//       if (rawFile.status === 200 || rawFile.status == 0) {
//         allText = rawFile.responseText;
//       }
//     }
//   };
//   rawFile.send(null);
//   let objectJSON = JSON.parse(allText);
//   dinos = objectJSON.Dinos;
// }
