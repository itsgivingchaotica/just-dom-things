document.addEventListener('DOMContentLoaded', function() {
  var trumpButton = document.querySelector(".trump-btn");
  var bidenButton = document.querySelector(".biden-btn");
  var trumpImg = document.querySelector('#right-btn img');
  var bidenImg = document.querySelector('#left-btn img');
  var realTrump = "images/trump-yelling.png";
  var mutedTrump = "images/trump-yelling-bw.png";
  var realBiden = "images/biden-yelling.png";
  var mutedBiden = "images/biden-yelling-bw.png";
  var dialogContainer = document.querySelector(".dialog-container");

  function handleTrumpButtonClick() {
    var existingTrumpSection = document.getElementById('trump');

    if (existingTrumpSection) {
      bidenImg.setAttribute('src', mutedBiden);
      trumpButton.style.backgroundColor = 'green';
      bidenButton.style.backgroundColor = 'navy';
    } else {
      var existingBidenSection = document.getElementById("biden");
      bidenImg.setAttribute('src', mutedBiden);
      if (existingBidenSection) {
        dialogContainer.removeChild(existingBidenSection);
        bidenImg.setAttribute('src', mutedBiden);
        bidenButton.style.backgroundColor = 'navy';
      }

      var trumpSection = document.createElement('section');
      trumpSection.id = 'trump';
      trumpSection.textContent = `"I'm right!"`;
      trumpSection.style.fontFamily = "Rock Salt, cursive";
      trumpSection.style.color = 'white';
      trumpSection.style.marginRight = '50px';
      trumpSection.style.marginBottom = '100px';
      trumpSection.style.fontSize = '2rem';
      trumpImg.setAttribute('src', realTrump);
      dialogContainer.appendChild(trumpSection);
      trumpButton.style.backgroundColor = 'green';
    }
  }

  function handleBidenButtonClick() {
    var existingBidenSection = document.getElementById('biden');

    if (existingBidenSection) {
      trumpImg.setAttribute('src', mutedTrump);
      trumpButton.style.backgroundColor = 'maroon';
      bidenButton.style.backgroundColor = 'green';
    } else {
      var existingTrumpSection = document.getElementById("trump");
      trumpImg.setAttribute('src', mutedTrump);
      if (existingTrumpSection) {
        dialogContainer.removeChild(existingTrumpSection);
        trumpImg.setAttribute('src', mutedTrump);
        trumpButton.style.backgroundColor = 'maroon';
      }

      var bidenSection = document.createElement('section');
      bidenSection.id = 'biden';
      bidenSection.textContent = `"No, I'm right!"`;
      bidenSection.style.color = 'white';
      bidenSection.style.fontFamily = "Caveat, cursive";
      bidenSection.style.marginLeft = '50px';
      bidenSection.style.marginBottom = '100px';
      bidenSection.style.fontSize = '2.5rem';
      bidenImg.setAttribute('src', realBiden);
      dialogContainer.appendChild(bidenSection);
      bidenButton.style.backgroundColor = 'green';
    }
  }

  trumpButton.addEventListener('click', handleTrumpButtonClick);
  bidenButton.addEventListener('click', handleBidenButtonClick);
});
    // $(document).ready(function() {
    //     var myImg = $(".myImg");
    //     var newImg = "hackanm.gif";
    //     myImg.attr('src', newImg);
    // });