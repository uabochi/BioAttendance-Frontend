
document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    const email = document.getElementById('email').value;
    const pin = document.getElementById('pin').value;
    const errorMessageElement = document.getElementById('error-message');
  
    // Clear any previous error message
    errorMessageElement.textContent = '';
  
    // Basic client-side validation
    if (!email || !pin) {
      errorMessageElement.textContent = 'Please fill in both fields.';
      return;
    }
  
    // Call login function from apiUtils.js
    try {
      const data = await loginAdmin(email, pin);
      console.log("almost there");

      console.log('Login successful:', data);
      window.location.href = '/html/dashboard.html'; // Redirect to dashboard
    } catch (error) {
      errorMessageElement.textContent = error.message || 'Login failed. Please try again.';
    }
});

