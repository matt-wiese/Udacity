const button = document.getElementById("btn");

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
  let heightInFeet = document.getElementById("feet");
  let heightInInches = document.getElementById("inches");
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
      !heightInFeet ||
      !heightInInches ||
      !heightInFeet.value ||
      !heightInInches.value ||
      heightInFeet.value === "" ||
      !heightInInches.value === ""
    ) {
      throw new Error("Pelase enter your height");
    }
    // converts to total inches
    return heightInFeet.value * 12 + heightInInches.value;
  }

  function getWeight() {
    if (!weight || !weight.value || weight.value === "") {
      throw new Error("Please enter your weight");
    }
    return weight.value;
  }

  return {
    getName: getName,
    getHeight: getHeight,
    getWeight: getWeight,
    getDiet: diet.value,
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
