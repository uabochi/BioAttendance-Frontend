document.getElementById('recordsForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent normal form submission
  
    const staffId = document.getElementById('staffId').value;
    const recordsMessage = document.getElementById('recordsMessage');
    const recordsTable = document.getElementById('recordsTable');
    const tableBody = recordsTable.querySelector('tbody');
  
    recordsMessage.textContent = ''; // Clear any previous messages
    tableBody.innerHTML = ''; // Clear any previous table data
    recordsTable.classList.add('hidden'); // Hide table initially
  
    try {
      const records = await getAttendanceRecords(staffId); // Call API function
  
      if (records.length === 0) {
        recordsMessage.textContent = 'No attendance records found for this Student ID.';
        return;
      }
  
      // Populate the table with attendance data
      records.forEach(record => {
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        const statusCell = document.createElement('td');
  
        dateCell.textContent = new Date(record.timestamp).toLocaleDateString();
        statusCell.textContent = record.status;
  
        row.appendChild(dateCell);
        row.appendChild(statusCell);
        tableBody.appendChild(row);
      });
  
      recordsTable.classList.remove('hidden'); // Show the table
    } catch (error) {
      recordsMessage.textContent = error.message || 'Failed to fetch attendance records.';
    }
  });
  