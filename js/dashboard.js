adminName = localStorage.getItem("adminName");

document.getElementById('adminName').textContent = adminName;




// document.getElementById('attendanceForm').addEventListener('submit', async function (e) 
//     e.preventDefault(); // Prevent the form from submitting normally
  
//     const staffId = document.getElementById('staffId').value;
//     const attendanceStatus = document.getElementById('attendanceStatus').value;
//     const attendanceMessageElement = document.getElementById('attendanceMessage');
  
//     // Basic client-side validation
//     if (!staffId || !attendanceStatus) {
//       attendanceMessageElement.textContent = 'Please fill in all fields.';
//       attendanceMessageElement.classList.add('error');
//       return;
//     }
  
//     // Make a POST request to the backend to mark attendance
//     try {
//       const response = await fetch('http://localhost:5000/attendance/mark', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ user_id: staffId, status: attendanceStatus }),
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         attendanceMessageElement.textContent = 'Attendance marked successfully!';
//         attendanceMessageElement.classList.remove('error');
//         attendanceMessageElement.classList.add('success');
//       } else {
//         attendanceMessageElement.textContent = data.error || 'An error occurred. Please try again.';
//         attendanceMessageElement.classList.add('error');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       attendanceMessageElement.textContent = 'An error occurred. Please try again later.';
//       attendanceMessageElement.classList.add('error');
//     }
//   });
  