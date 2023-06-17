document.addEventListener("DOMContentLoaded", function() {
  var submitBtn = document.querySelector('button[name="submit-btn"]');
  var form = document.getElementById('cute-form');
  var passwordInput = document.getElementById('password');
  var heading = document.getElementsByTagName('h1')[0];
  form.addEventListener("submit", function(e) {
    submitBtn.style.backgroundColor = 'rgba(28, 243, 243, 0.767)'
    e.preventDefault();
    const password = passwordInput.value;
    setTimeout(function(){
if (password === '12345678'){
        heading.textContent = "Welcome to Vacation Mode !";
    } else {
        alert('Password Incorrect');
    }
    setTimeout(function() {
        submitBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    }, 200);
    })
  });
});