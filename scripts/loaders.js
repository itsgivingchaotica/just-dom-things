document.addEventListener('DOMContentLoaded', function() {
  var navbarPlaceholder = document.getElementById('navbar-placeholder');

  fetch('components/navbar.html')
    .then(function(response) {
      return response.text();
    })
    .then(function(html) {
      navbarPlaceholder.innerHTML = html;

      // Update the href values based on the current page
      var logoLink = navbarPlaceholder.querySelector('.logo');
      var angryLink = navbarPlaceholder.querySelector('.angry-btn');
      var formLink = navbarPlaceholder.querySelector('.form-btn');
      var hoverLink = navbarPlaceholder.querySelector('.hover-btn');

      logoLink.href = 'index.html';
      angryLink.href = 'buttons.html';
      formLink.href = 'form.html';
      hoverLink.href = 'hovering.html';

      console.log("loaded navbar");
    })
    .catch(function(error) {
      console.log('Error loading navbar component:', error);
    });
    
});