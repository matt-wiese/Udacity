const button = document.getElementById("btn");
const humanVals = document.getElementById("dino-compare");
const gridContentContainer = document.getElementById("grid");
// creating a class to separate out valueas to be compared -> humans
// share those dimension, although measurements differ greatly lol
// this will be extended
class Being {
  constructor(height, weight, diet) {
    this.height = height;
    this.weight = weight;
    this.diet = diet;
  }
  // adding methods to class
}

// Create Dino Constructor
class Dinos extends Being {
  constructor(dinoObj) {
    // using super() to access Being's functions/methods
    super(); //Being's methods yet to be built)
    this.species = dinoObj.species;
    this.where = dinoObj.where;
    this.when = dinoObj.when;
    this.fact = dinoObj.fact;
  }
  compareWeight(humanWeight) {
    const ratioW = (this.weight / humanWeight).toFixed(1);
    // Check for human less than, greater than, or same weight as dino
    if (ratioW > 1) {
      return `${this.species} weighed ${(this.weight / humanWeight).toFixed(
        1
      )} times more than you!`;
    }
    if (ratioW < 1) {
      return `You weigh ${(humanWeight / this.weight).toFixed(
        1
      )} times more than ${this.species}!`;
    }
    return `You weigh the same as ${this.species}!`;
  }
  compareHeight(humanHeight) {
    const heightRatio = (this.height / humanHeight).toFixed(1);
    // Check for human less than, greater than, or same weight as dino
    if (heightRatio > 1) {
      return `${this.species} was ${(this.height / humanHeight).toFixed(
        1
      )} times taller than you!`;
    }
    if (heightRatio < 1) {
      return `You are ${(humanHeight / this.height).toFixed(
        1
      )} times taller than ${this.species}!`;
    }
    return `You are the same height as ${this.species}!`;
  }
  compareDiet(humanDiet) {
    //'An' omnivore or 'a' herbivore/carnivore
    const article = humanDiet === "omnivore" ? "an" : "a";

    if (humanDiet === this.diet) {
      return `You are ${article} ${humanDiet} and ${this.species} was too!`;
    } else {
      return `You are ${article} ${humanDiet}, but ${this.species} was a ${this.diet}.`;
    }
  }
}

class Human extends Being {
  constructor(humanObj) {
    super();
    this.name;
  }
}

function getRandomFact() {
  // Returns an integer random number between min (included) and max (included):
  // reference: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  let randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  //TODO: return random fact here
  let fact = "";
  if (this.getSpecies() === "Pigeon") {
    return this.getFact();
  }
  switch (randomNumber) {
    case 1:
      fact = this.getWeightComparisonResult();
      break;
    case 2:
      fact = this.getHeightComparisonResult();
      break;
    case 3:
      fact = this.getDietComparisonResult();
      break;
    case 4:
      fact = this.getOrigin();
      break;
    case 5:
      fact = this.getPeriod();
      break;
    case 6:
      fact = this.getFact();
      break;
  }
  return fact;
}
function getHTMLContent() {
  return `<div class="grid-item"> <h3>${
    this.species
  }</h3> <img src="./images/${this.species.toLowerCase()}.png" alt="dino image"> <p>${this.getRandomFact()}</p> </div>`;
}

// let compHeight = (function (humHgt) {
//   const ratioH = (this.height / humHgt).toFixed(1);
//   if (ratioH > 1) {
//     return;
//   }

// Create Dino Objects

// Create Human Object

// Use IIFE to get human data from form
let HumanData = (function () {
  let name = document.getElementById("name");
  let feet = document.getElementById("feet");
  let inches = document.getElementById("inches");
  let weight = document.getElementById("weight");
  let diet = document.getElementById("diet");

  function getName() {
    if (!name || !name.value || name.value === "") {
      throw new Error("Please enter your name");
    }
    return name.value;
  }

  function getHeight() {
    if (
      !feet ||
      !inches ||
      !feet.value ||
      !inches.value ||
      !feet.value === "" ||
      !inches.value === ""
    ) {
      throw new Error("Pelase enter your height");
    }
    // converts to total inches
    return feet.value * 12 + inches.value;
  }

  function getWeight() {
    if (!weight || !weight.value || weight.value === "") {
      throw new Error("Please enter your weight");
    }
    return weight.value;
  }

  function getDiet() {
    return diet.value;
  }

  return {
    getName: getName,
    getHeight: getHeight,
    getWeight: getWeight,
    getDiet: getDiet,
  };
})();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

button.addEventListener("click", () => {
  document.querySelector("form").style.display = "none";
  readDinosJSON();

  // get human data from fields and include error messages
  // create the dino elements from array
  //
});
