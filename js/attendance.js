document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('attendanceForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent normal form submission

    const staffId = document.getElementById('staffId').value;
    const attendanceMessage = document.getElementById('attendanceMessage');

    // Clear any previous messages
    attendanceMessage.textContent = '';

    if (!staffId) {
      attendanceMessage.style.color = 'red';
      attendanceMessage.textContent = 'Staff ID is required!';
      return;
    }

    try {
      // Call API function to mark attendance
      const response = await markAttendance(staffId, 'Present'); 
      
      attendanceMessage.style.color = 'green';
      attendanceMessage.textContent = 'Attendance marked successfully!';
    } catch (error) {
      attendanceMessage.style.color = 'red';
      attendanceMessage.textContent = error.message || 'Failed to mark attendance.';
    }
  });
});
