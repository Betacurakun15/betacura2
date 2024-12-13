// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.querySelector('.login_form');
  const usernameInput = document.getElementById('uname');
  const passwordInput = document.getElementById('psw');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent form from submitting

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if username or password fields are empty
    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Check if the entered username and password are correct
    if (username === 'betacura@' && password === '12345') {
      // If correct, redirect to another page
      window.location.href = 'website1.html';  // Redirect to your destination page
    } else {
      // If credentials are incorrect, show an error message
      alert('Invalid username or password.');
    }
  });
});
