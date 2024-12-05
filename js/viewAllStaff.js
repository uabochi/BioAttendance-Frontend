adminId = localStorage.getItem("adminId");

async function fetchAllStaff() {
    const tableBody = document.getElementById("staffTableBody");
    const messageElement = document.getElementById("viewStaffMessage");
  
    tableBody.innerHTML = ""; // Clear table content
    messageElement.textContent = ""; // Clear message
  
    try {
      // const response = await fetch(`${BASE_URL}/student`);
      const response = await fetch(`${BASE_URL}/student/${adminId}`);
      const data = await response.json();
  
      if (response.ok) {
        if (data.length === 0) {
          messageElement.textContent = "No student found.";
          messageElement.style.color = "orange";
        } else {
          data.forEach((staff) => {
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${staff.id}</td>
              <td>${staff.name}</td>
              <td>${staff.email}</td>
            `;
            tableBody.appendChild(row);
          });
        }
      } else {
        throw new Error(data.error || "Failed to fetch student.");
      }
    } catch (error) {
      messageElement.textContent = error.message;
      messageElement.style.color = "red";
    }
  }
  
  // Fetch staff on page load
  document.addEventListener("DOMContentLoaded", fetchAllStaff);
  