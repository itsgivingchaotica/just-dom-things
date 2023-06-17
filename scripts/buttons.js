document.addEventListener('DOMContentLoaded', function() {
  //buttons to click for each side's dialog
  var trumpButton = document.querySelector(".trump-btn");
  var bidenButton = document.querySelector(".biden-btn");
  //portraits of each president
  var trumpImg = document.querySelector('#right-btn img');
  var bidenImg = document.querySelector('#left-btn img');
  //images, color and black and white
  var realTrump = "images/trump-yelling.png";
  var mutedTrump = "images/trump-yelling-bw.png";
  var realBiden = "images/biden-yelling.png";
  var mutedBiden = "images/biden-yelling-bw.png";
  //get the dialog container which is where button clicks input the respective side's comment
  var dialogContainer = document.querySelector(".dialog-container");

  //If the button corresponding to Trump is clicked
  function handleTrumpButtonClick() {
    //check if there is already Trump dialog
    var existingTrumpSection = document.getElementById('trump');

    //if this exists, mute Biden image and change the background colors of buttons to showcase the button under Trump is clicked by setting green
    if (existingTrumpSection) {
      bidenImg.setAttribute('src', mutedBiden);
      trumpButton.style.backgroundColor = 'green';
      bidenButton.style.backgroundColor = 'navy';
    } else {
      //check to see if Biden has dialog open
      var existingBidenSection = document.getElementById("biden");
      //mute Biden image as initial muting
      bidenImg.setAttribute('src', mutedBiden);
      //if Biden dialog exists, remove it from the dialog container and mute Biden image, reset Biden button from green back to navy
      if (existingBidenSection) {
        dialogContainer.removeChild(existingBidenSection);
        bidenImg.setAttribute('src', mutedBiden);
        bidenButton.style.backgroundColor = 'navy';
      }
      //get the Trump dialog section to input the dialog
      var trumpSection = document.createElement('section');
      //assign the section styling and dialog
      trumpSection.id = 'trump';
      trumpSection.textContent = `"I'm right!"`;
      trumpSection.style.fontFamily = "Rock Salt, cursive";
      trumpSection.style.color = 'white';
      trumpSection.style.marginRight = '50px';
      trumpSection.style.marginBottom = '100px';
      trumpSection.style.fontSize = '2rem';
      //change the Trump photo to color
      trumpImg.setAttribute('src', realTrump);
      //add the section to dialog
      dialogContainer.appendChild(trumpSection);
      //change Trump button to green selection
      trumpButton.style.backgroundColor = 'green';
    }
  }
  //If the button corresponding to Biden is clicked
  function handleBidenButtonClick() {
    //check if there is already Biden dialog
    var existingBidenSection = document.getElementById('biden');
    //if this exists, mute Trump image and change the background colors of buttons to showcase the button under Biden is clicked by setting green
    if (existingBidenSection) {
      trumpImg.setAttribute('src', mutedTrump);
      trumpButton.style.backgroundColor = 'maroon';
      bidenButton.style.backgroundColor = 'green';
    } else {
      //check to see if Trump has dialog open
      var existingTrumpSection = document.getElementById("trump");
      //mute Trump image as initial muting
      trumpImg.setAttribute('src', mutedTrump);
      //if Trump dialog exists, remove it from the dialog container and mute Biden image, reset Biden button from green back to navy
      if (existingTrumpSection) {
        dialogContainer.removeChild(existingTrumpSection);
        trumpImg.setAttribute('src', mutedTrump);
        trumpButton.style.backgroundColor = 'maroon';
      }
    //get the Biden dialog section to input the dialog
      var bidenSection = document.createElement('section');
      //assign the section styling and dialog
      bidenSection.id = 'biden';
      bidenSection.textContent = `"No, I'm right!"`;
      bidenSection.style.color = 'white';
      bidenSection.style.fontFamily = "Caveat, cursive";
      bidenSection.style.marginLeft = '50px';
      bidenSection.style.marginBottom = '100px';
      bidenSection.style.fontSize = '2.5rem';
      //change the Biden photo to color
      bidenImg.setAttribute('src', realBiden);
      //add the section to dialog
      dialogContainer.appendChild(bidenSection);
      //change Biden button to green selection
      bidenButton.style.backgroundColor = 'green';
    }
  }

  //button click handlers to carry out the corresponding functions defined above
  //button under Trump is clicked
  trumpButton.addEventListener('click', handleTrumpButtonClick);
  //button under Biden is clicked
  bidenButton.addEventListener('click', handleBidenButtonClick);
});