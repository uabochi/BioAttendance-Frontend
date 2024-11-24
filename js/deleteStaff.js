document.getElementById("deleteStaffForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const staffId = document.getElementById("staffId").value;
    const messageElement = document.getElementById("deleteStaffMessage");
  
    messageElement.textContent = ""; // Clear any previous message
  
    try {
      const response = await fetch(`${BASE_URL}/staff/delete/${staffId}`, {
        method: "DELETE",
      });
  
      const data = await response.json();
  
      if (response.ok) {
        messageElement.textContent = "Student deleted successfully!";
        messageElement.style.color = "green";
        document.getElementById("deleteStaffForm").reset();
      } else {
        throw new Error(data.error || "Failed to delete student.");
      }
    } catch (error) {
      messageElement.textContent = error.message;
      messageElement.style.color = "red";
    }
  });
  