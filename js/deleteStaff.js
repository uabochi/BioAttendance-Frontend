document.getElementById("deleteStaffForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const staffId = document.getElementById("staffId").value;
    const messageElement = document.getElementById("deleteStaffMessage");
  
    messageElement.textContent = ""; // Clear any previous message
  
    try {
      const response = await deleteStaff(staffId); // Use the function from apiUtil.js
  
      console.log("API Response:", response); // Debugging log
  
      // Handle success
      messageElement.textContent = "Student deleted successfully!";
      messageElement.style.color = "green";
      document.getElementById("deleteStaffForm").reset(); // Clear the form
  } catch (error) {
      console.error("Caught Error:", error); // Debugging log
  
      // Handle errors
      messageElement.textContent = error.error || "Failed to delete student.";
      messageElement.style.color = "red";
  }
  
  });
  