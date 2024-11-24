document.getElementById("addStaffForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("staffName").value;
  const email = document.getElementById("staffEmail").value;
  const messageElement = document.getElementById("addStaffMessage");

  messageElement.textContent = ""; // Clear any previous message

  try {
    const response = await fetch(`${BASE_URL}/staff/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();

    if (response.ok) {
      messageElement.textContent = "Student added successfully!";
      messageElement.style.color = "green";
      document.getElementById("addStaffForm").reset(); // Clear form inputs
    } else {
      throw new Error(data.error || "Failed to add student.");
    }
  } catch (error) {
    messageElement.textContent = error.message;
    messageElement.style.color = "red";
  }
});
