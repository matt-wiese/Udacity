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
