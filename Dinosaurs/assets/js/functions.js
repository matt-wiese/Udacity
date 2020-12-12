// Function that reads an external text file
// https://stackoverflow.com/questions/39989756/how-do-i-make-a-function-that-returns-the-value-of-a-local-text-file-in-javascri

function readTextFile(file) {
  let rawFile = new XMLHttpRequest();
  let allText = "";
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        allText = rawFile.responseText;
      }
    }
  };

  rawFile.send(null);

  return allText;
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
function valueMiddleArray(arr, human) {
  arr.splice(arr.length / 2, 0, human);
  return arr;
}
