adminId = localStorage.getItem("adminId");

async function fetchAllStaff() {
    const tableBody = document.getElementById("staffTableBody");
    const messageElement = document.getElementById("viewStaffMessage");
  
    tableBody.innerHTML = ""; // Clear table content
    messageElement.textContent = ""; // Clear message
  
    try {
      const data = await getAllStaff(adminId); // Fetch data using getAllStaff
  
      console.log("API Response:", data); // Debugging log
  
      if (data.length === 0) {
          messageElement.textContent = "No students found.";
          messageElement.style.color = "orange";
      } else {
          data.forEach((staff) => {
              const row = document.createElement("tr");
              row.innerHTML = `
                  <td>${staff.id}</td>
                  <td>${staff.name}</td>
                  <td>${staff.email}</td>
              `;
              tableBody.appendChild(row); // Append row to the table body
          });
      }
  } catch (error) {
      console.error("Caught Error:", error); // Debugging log
      messageElement.textContent = error.message || "An unexpected error occurred.";
      messageElement.style.color = "red";
  }  
  }
  
  // Fetch staff on page load
  document.addEventListener("DOMContentLoaded", fetchAllStaff);
  