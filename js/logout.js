document.getElementById('redirectToLogin').addEventListener('click', () => {
    // Clear session (if applicable)
    localStorage.clear(); // Example: remove tokens or stored session data
    sessionStorage.clear();
  
    // Redirect to login page
    window.location.href = '/html/login.html';
  });
  