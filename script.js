function login() {
    // Get the username and password from the login form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform login validation (you can implement your own logic here)
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      // Redirect to another page after successful login
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid username or password');
    }
  
    // Prevent form submission
    event.preventDefault();
  }
  
  function createAccount() {
    // Get the new username and password from the create account form
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
  
    // Perform account creation (you can implement your own logic here)
    // ...
  
    alert('Account created successfully!');
    // Redirect back to the login page after account creation
    window.location.href = 'login.html';
  
    // Prevent form submission
    event.preventDefault();
  }
  