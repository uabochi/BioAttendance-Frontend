adminId = localStorage.getItem("adminId");
console.log(adminId);

document.getElementById("addStaffForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("staffName").value;
  const email = document.getElementById("staffEmail").value;
  const created_by = adminId;
  const messageElement = document.getElementById("addStaffMessage");

  messageElement.textContent = ""; // Clear any previous message

  try {
    const response = await addStaff({ name, email, created_by }); // Call addStaff function

    console.log("API Response:", response); // Log response for debugging

    if (response.success) { // Check `success` field, not `response.ok`
        const id = response.result.insertId;
        console.log("id: " + id);

        messageElement.textContent = "Student added successfully!";
        messageElement.style.color = "green";
        document.getElementById("addStaffForm").reset(); // Clear form inputs

        // Send email with details
        sendMail({ name, email, id });
    } else {
        throw new Error(response.message || "Failed to add student."); // Use `response.message`
    }
} catch (error) {
    console.error("Caught Error:", error); // Log error for debugging
    messageElement.textContent = error.message || "An unexpected error occurred.";
    messageElement.style.color = "red";
}
});
