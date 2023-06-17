//shows how dom manipulation is more verbose than jquery 
document.addEventListener('DOMContentLoaded', function() {
  //load the navbar 
  var navbarPlaceholder = document.getElementById('navbar-placeholder');

  //use fetch to retrieve the component html file
  fetch('components/navbar.html')
    .then(function(response) {
      return response.text();
    })
    .then(function(html) {
      //set the component
      navbarPlaceholder.innerHTML = html;

      // Update the href values for ui components
      var logoLink = navbarPlaceholder.querySelector('.logo');
      var angryLink = navbarPlaceholder.querySelector('.angry-btn');
      var formLink = navbarPlaceholder.querySelector('.form-btn');
      var hoverLink = navbarPlaceholder.querySelector('.hover-btn');
      //assign the html pages
      logoLink.href = 'index.html';
      angryLink.href = 'buttons.html';
      formLink.href = 'form.html';
      hoverLink.href = 'hovering.html';
    })
    //catch error if issue retrieving the navbar component
    .catch(function(error) {
      console.log('Error loading navbar component:', error);
    });
    
});