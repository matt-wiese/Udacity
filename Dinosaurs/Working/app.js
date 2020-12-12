// constructor function to create objects
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

// Create dino object with weight, hieght, and diet prototypes set up for
// inheritance - Object Oriented JavaScript L3:E5
const protoDino = {
  // Create Dino Compare Method 1
  // NOTE: Weight in JSON file is in lbs, height in inches.
  compareWeight: function (hmnWgt) {
    const wgtRatio = (this.weight / hmnWgt).toFixed(1);
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
  compareHeight: function (hmnHgt) {
    const hgtRatio = (this.height / hmnHgt).toFixed(1);
    // Check for human less than, greater than, or same weight as dino
    if (hgtRatio > 1) {
      return `${this.species} was ${(this.height / hmnHgt).toFixed(
        1
      )} times taller than you!`;
    }
    if (hgtRatio < 1) {
      return `You are ${(hmnHgt / this.height).toFixed(1)} times taller than ${
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

// creates array of DinoCon objects for an array which is then shuffled
function createDinoArray(units) {
  readDinosJSON();
  const dinoArray = [];

  dinos.forEach(function (dino) {
    dinoArray.push(new DinoCon(dino, units));
    shuffleArray(dinoArray);
  });

  // Insert the human placeholder here so that iteration works properly
  // in the grid element construction.  Human should be in the centre square.
  dinoArray.splice(4, 0, "human");

  return dinoArray;
}

// takes in dinoObj from DinoCon and humanData to create a grid element
function createDinoElement(dinoObj, humanData) {
  let fact;

  // checks if pigean so fact will never change
  // this will return a fact at random
  const randomNumber =
    dinoObj.species === "Pigeon" ? 2 : Math.round(Math.random() * 5);

  switch (randomNumber) {
    case 0:
      fact = `The ${dinoObj.species} lived in ${dinoObj.where}.`;
      break;
    case 1:
      fact = `The ${dinoObj.species} lived in the ${dinoObj.when} period.`;
      break;
    case 2:
      fact = dinoObj.fact;
      break;
    case 3:
      fact = dinoObj.compareWeight(humanData.weight);
      break;
    case 4:
      fact = dinoObj.compareHeight(humanData.height);
      break;
    case 5:
      fact = dinoObj.compareDiet(humanData.diet);
      break;
    default:
      fact = "Dinosaurs are cool!";
  }

  // creates div element with object from DinoCon
  const newDiv = document.createElement("div");
  newDiv.className = "grid-item";
  newDiv.innerHTML = `<h3>${
    dinoObj.species
  }</h3><img src="images/${dinoObj.species.toLowerCase()}.png" alt="image of ${
    dinoObj.species
  }"><p>${fact}</p>`;

  return newDiv;
}

// returns human data values provided in form based on metric
//or imperial choices
function getHumanData() {
  let height, weight, units;

  if (document.getElementById("metric").checked) {
    height = document.getElementById("height-metric").value;
    weight = document.getElementById("weight-metric").value;
    units = "metric";
  } else {
    height =
      document.getElementById("feet").value * 12 +
      Number(document.getElementById("inches").value);
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

// REFACTOR TO SPLICE THIS DIRECTLY INTO dinoArray??
function createHumanElement(humanData) {
  const newDiv = document.createElement("div");
  newDiv.className = "grid-item";
  newDiv.innerHTML = `<h3>${humanData.name}</h3><img src="images/human.png" alt="image of human">`;

  return newDiv;
}

// resets the UI to try again
function repeat() {
  document.getElementById("error").innerHTML = "";
  document.getElementById("grid").innerHTML = "";
  document.getElementById("repeat-btn").style.display = "none";
  document.querySelector("form").style.display = "block";
}

// takes in dinoArray and humanData to create the output
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
  // Add tiles to DOM
  // attach fragment with grid elements to the DOM
  document.getElementById("grid").appendChild(fragment);
  // show the 'Go Again' button
  document.getElementById("repeat-btn").style.display = "block";
}

// Main function that runs on event
function clicked(e) {
  // Prevent default page reloading on submit
  // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  e.preventDefault();

  const humanData = getHumanData();

  const errorMessage = document.getElementById("error");
  // ensures value is not empty
  if (humanData.name === "") {
    errorMessage.innerHTML = "<p>Please enter a name</p>";
    return;
    // ensures subject enters an earthly weight
  } else if (humanData.height < 1) {
    errorMessage.innerHTML = "<p>Please enter a height more than 0</p>";
    return;
    // ensures subject has a measurement
  } else if (humanData.weight < 1) {
    errorMessage.innerHTML = "<p>Please enter a weight more than 0</p>";
    return;
  }

  const dinoArray = createDinoArray(humanData.units);

  updateUI(dinoArray, humanData);
}

// Use IIFE to get human data from form -> this IIFE satisfies this as
// it's invoked in clicked(). I could have placed getHumanData() in
// clicked() as IIFE but that would too monolithic.
// On button click, prepare and display infographic
(function () {
  document.getElementById("btn").addEventListener("click", clicked);
  document.getElementById("repeat-btn").addEventListener("click", repeat);
})();
