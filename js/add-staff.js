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
    const response = await fetch(`${BASE_URL}/student/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, created_by }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      const id = data.result.insertId;
      console.log("id: " + id);
      
      messageElement.textContent = "Student added successfully!";
      messageElement.style.color = "green";
      document.getElementById("addStaffForm").reset(); // Clear form inputs
      sendMail({name, email, id})
    } else {
      throw new Error(data.error || "Failed to add student.");
    }
  } catch (error) {
    messageElement.textContent = error.message;
    messageElement.style.color = "red";
  }
});

// Send Mail
async function sendMail(studentData) {
  const response = await fetch(`${BASE_URL}/mail/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(studentData),
  });
  return response.ok ? await response.json() : Promise.reject(await response.json());
}