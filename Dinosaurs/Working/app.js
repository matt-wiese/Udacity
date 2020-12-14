// Create Dino Objects

// Create Human Object

// Use IIFE to get human data from form

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic

// $.getJSON("https://matt-wiese.github.io/Dinosaurs/assets/json/dino.json", function(json) {
//     console.log(json);
// let objectJSON = JSON.parse(dataJSON);
// let listaDino = objectJSON.Dinos;
// });

// global variables

let dinos;

// Create dino object with weight, hieght, and diet prototypes set up for
// inheritance - Object Oriented JavaScript L3:E5
const protoDino = {
  // Create Dino Compare Method 1
  // NOTE: Weight in JSON file is in lbs, height in inches.
  compareWeight: function (hmnWgt) {
    const weightRatio = (this.weight / hmnWgt).toFixed(1);
    // Check for human less than, greater than, or same weight as dino
    if (wgtRatio > 1) {
      return `${this.species} weighed ${(this.weight / hmnWgt).toFixed(
        1
      )} times more than you!`;
    }
    if (wgtRatio < 1) {
      return `You weigh ${(hmnWgt / this.weight).toFixed(1)} times more than ${
        this.species
      }!`;
    }
    return `You weigh the same as ${this.species}!`;
  },
  // Create Dino Compare Method 2
  // NOTE: Weight in JSON file is in lbs, height in inches.
  compareHeight: function (hmnWgt) {
    const heightRatio = (this.height / hmnWgt).toFixed(1);
    // Check for human less than, greater than, or same weight as dino
    if (heightRatio > 1) {
      return `${this.species} was ${(this.height / hmnWgt).toFixed(
        1
      )} times taller than you!`;
    }
    if (heightRatio < 1) {
      return `You are ${(hmnWgt / this.height).toFixed(1)} times taller than ${
        this.species
      }!`;
    }
    return `You are the same height as ${this.species}!`;
  },
  // Create Dino Compare Method 3
  // NOTE: Weight in JSON file is in lbs, height in inches.
  compareDiet: function (humanDiet) {
    //'An' omnivore or 'a' herbivore/carnivore
    const article = humanDiet === "omnivore" ? "an" : "a";

    if (humanDiet === this.diet) {
      return `You are ${article} ${humanDiet} and ${this.species} was too!`;
    } else {
      return `You are ${article} ${humanDiet}, but ${this.species} was a ${this.diet}.`;
    }
  },
};

// an object with desired prototypes was created and each object
// created with the DinoCon constructor will inherit these prototypes
DinoCon.prototype = protoDino;

/**
 * @description Creates the dinosaur object array by calling constructor, inserts a human placeholder for proper iteration later
 * @param {string} units 'metric' or 'imperial' for height and weight
 * @returns {Array} Array of dinosaur objects from constructor
 */
function createDinoArray(units) {
  readDinosJSON();
  const dinoArray = [];

  dinos.forEach(function (dino) {
    dinoArray.push(new DinoCon(dino, units));
  });

  // Insert the human placeholder here so that iteration works properly
  // in the grid element construction.  Human should be in the centre square.
  // MAY NEED TO REVERT 'createHumanElement()' back to "human placeholder"
  dinoArray.splice(4, 0, createHumanElement());

  return dinoArray;
}

/**
 * @description Creates a grid element for a dinosaur object
 * @param {Object} dinoData An object representing a single dinosaur
 * @param {Object} humanData Data grabbed from the user's input form
 * @returns {Element} An element to be added to the grid in the UI
 */
function createDinoElement(dinoData, humanData) {
  let fact;
  // Project requirement is that pigeon should always return the same fact,
  // so we rig the random number for pigeon
  // Dinosaurs each return one of 6 facts randomly chosen here
  const randomNumber =
    dinoData.species === "Pigeon" ? 2 : Math.round(Math.random() * 5);

  switch (randomNumber) {
    case 0:
      fact = `The ${dinoData.species} lived in ${dinoData.where}.`;
      break;
    case 1:
      fact = `The ${dinoData.species} lived in the ${dinoData.when} period.`;
      break;
    case 2:
      fact = dinoData.fact;
      break;
    case 3:
      fact = dinoData.compareWeight(humanData.weight);
      break;
    case 4:
      fact = dinoData.compareHeight(humanData.height);
      break;
    case 5:
      fact = dinoData.compareDiet(humanData.diet);
      break;
    default:
      fact = "Dinosaurs are cool!";
  }

  // Create the new grid item with title, image, and chosen fact
  const newDiv = document.createElement("div");
  newDiv.className = "grid-item";
  newDiv.innerHTML = `<h3>${
    dinoData.species
  }</h3><img src="images/${dinoData.species.toLowerCase()}.png" alt="image of ${
    dinoData.species
  }"><p>${fact}</p>`;

  return newDiv;
}

/**
 * @description Get the user's data from the contact form
 * @returns An object containing the user's data
 */
function getHumanData() {
  let height, weight, units;

  if (document.getElementById("metric").checked) {
    height = document.getElementById("height-metric").value;
    weight = document.getElementById("weight-metric").value;
    units = "metric";
  } else {
    height =
      document.getElementById("imperial").value * 12 +
      Number(document.getElementById("height-imperial").value);
    weight = document.getElementById("weight-imperial").value;
    units = "imperial";
  }

  const humanData = {
    name: document.getElementById("name").value,
    height: height,
    weight: weight,
    diet: document.getElementById("diet").value,
    units: units,
  };

  return humanData;
}

/**
 * @description Creates a grid element for the human object
 * @param {Object} humanData Data grabbed from the user's input form
 * @returns {Element} An element to be added to the grid in the UI
 */
// REFACTOR TO SPLICE THIS DIRECTLY INTO DinoArray
function createHumanElement(humanData) {
  // Create the human element for the grid, with user's name and an image
  const newDiv = document.createElement("div");
  newDiv.className = "grid-item";
  newDiv.innerHTML = `<h3>${humanData.name}</h3><img src="images/human.png" alt="image of human">`;

  return newDiv;
}

/**
 * @description Resets the UI elements if the user wants to try again
 */
function repeat() {
  document.getElementById("error").innerHTML = "";
  document.getElementById("grid").innerHTML = "";
  document.getElementById("repeat-btn").style.display = "none";
  document.querySelector("form").style.display = "block";
}

/**
 * @description Creates the grid for the UI result
 * @param {Array} dinoArray Array of dinosaur objects
 * @param {Object} humanData The user's data object
 */
function updateUI(dinoArray, humanData) {
  document.querySelector("form").style.display = "none";

  // Create fragment to attach div elements to
  const fragment = document.createDocumentFragment();

  // Call to create the dino and human div elements
  for (let i = 0; i < 9; i++) {
    // Center space (5th element, index 4) is always the human
    let gridSquare =
      i === 4
        ? createHumanElement(humanData)
        : createDinoElement(dinoArray[i], humanData);

    fragment.appendChild(gridSquare);
  }
  // Attach fragment with grid elements to the DOM
  document.getElementById("grid").appendChild(fragment);
  // Show the 'Go Again' button
  document.getElementById("repeat-btn").style.display = "block";
}

/**
 * @description Called when the user clicks the submit button, main function of the program which calls the other parts of the sequence
 * @param {event} e The click event on the form's submit button
 */
function clicked(e) {
  // Prevent default page reloading on submit
  e.preventDefault();

  const humanData = getHumanData();

  const errorMessage = document.getElementById("error");
  if (humanData.name === "") {
    errorMessage.innerHTML = "<p>Please enter a name</p>";
    return;
  } else if (humanData.height < 1) {
    errorMessage.innerHTML = "<p>Please enter a height more than 0</p>";
    return;
  } else if (humanData.weight < 1) {
    errorMessage.innerHTML = "<p>Please enter a weight more than 0</p>";
    return;
  }

  const dinoArray = createDinoArray(humanData.units);

  updateUI(dinoArray, humanData);
}

/**
 * @description Called when the user changes units in the form, sets or hides the metric and imperial height and weight input elements
 */
function unitsChange() {
  if (document.getElementById("metric").checked) {
    document.getElementById("metric-form").style.display = "block";
    document.getElementById("imperial-form").style.display = "none";
  } else {
    document.getElementById("metric-form").style.display = "none";
    document.getElementById("imperial-form").style.display = "block";
  }
}

/**
 * @description IIFE to attach the event listeners on the buttons
 */
(function () {
  document.getElementById("btn").addEventListener("click", clicked);
  document.getElementById("repeat-btn").addEventListener("click", repeat);
})();
