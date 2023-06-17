document.addEventListener("DOMContentLoaded", function() {
  //get the submit button
  var submitBtn = document.querySelector('button[name="submit-btn"]');
  //get the form component 
  var form = document.getElementById('cute-form');
  //get password input
  var passwordInput = document.getElementById('password');
  //get the heading to be manipulated based on submission criteria
  var heading = document.getElementsByTagName('h1')[0];
  //add submit event listener
  form.addEventListener("submit", function(e) {
    //change the background
    submitBtn.style.backgroundColor = 'rgba(28, 243, 243, 0.767)'
    e.preventDefault();
    const password = passwordInput.value;
    //add small timeout handler to carry out password verification and change the heading if successful
    setTimeout(function(){
        if (password === '12345678'){
            heading.textContent = "Welcome to Vacation Mode !";
        } else {
          //password was not 12345678?
            alert('Password Incorrect');
        }
        //add additional timeout to change the button color
          setTimeout(function() {
          submitBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        }, 200);
      },200);
    });
});