// const BASE_URL = 'https://bioattendance-backend.onrender.com'; // Backend base URL
const BASE_URL = 'http://localhost:5000';


// Function to handle POST requests for admin login
async function loginAdmin(email, pin) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pin }),
    });

    const data = await response.json();

    if (response.ok) {
        return data; // If login is successful, return the data (e.g., token)
    } else {
        throw new Error(data.error || 'Login failed'); // Throw error for failed login
    }
}

// Function to handle POST requests for marking attendance
async function markAttendance(userId) {
    const response = await fetch(`${BASE_URL}/attendance/mark`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId }), // Send the user ID only
    });

    const data = await response.json();

    if (response.ok) {
        return data; // If attendance is successfully marked, return the data
    } else {
        throw new Error(data.error || 'Attendance marking failed'); // Throw error for failed attendance marking
    }
}

// Function to fetch attendance records for a specific user
async function getAttendanceRecords(userId) {
    const response = await fetch(`${BASE_URL}/attendance/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (response.ok) {
        return data; // Return fetched attendance records
    } else {
        throw new Error(data.error || 'Failed to fetch attendance records');
    }
}

// Add new staff
async function addStaff(staffData) {
    const response = await fetch(`${BASE_URL}/student/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(staffData),
    });
    const result = await response.json();
    // if (!response.ok) throw result.Error; // Throw error if not OK

    // Check for HTTP errors
    if (!response.ok) {
        throw new Error(result.error || "Failed to add student.");
    }

    // Check for API-specific success field
    if (!result.success) {
        throw new Error(result.message || "Failed to add student.");
    }

    return result; // Return result for successful operations
    // return response.ok ? await response.json() : Promise.reject(await response.json());
}

// Get all student for a specific admin
async function getAllStaff(adminId) {
    const response = await fetch(`${BASE_URL}/student/${adminId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }, 
    });
    const result = await response.json(); // Parse JSON response

    if (!response.ok) {
        throw new Error(result.error || "Failed to fetch students.");
    }

    return result; // Return successful response
}


// Delete student by ID
async function deleteStaff(id) {
    const response = await fetch(`${BASE_URL}/student/delete/${id}`, {
        method: 'DELETE',
    });

    const result = await response.json(); // Parse JSON response

    if (!response.ok) {
        throw new Error(result.error || "Failed to delete student."); // Throw meaningful error
    }

    return result; // Return successful response
}

// Send Mail
async function sendMail(studentData) {
    const response = await fetch(`${BASE_URL}/mail/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData),
    });
    return response.ok ? await response.json() : Promise.reject(await response.json());
}

// Function to update the biometric template for a staff member
async function updateBiometricTemplate(staffId, biometricData) {
    const response = await fetch(`${BASE_URL}/staff/update/${staffId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ biometric_template: biometricData }),
    });

    const data = await response.json();

    if (response.ok) {
        return data; // If successful, return the update result
    } else {
        throw new Error(data.error || 'Failed to update biometric template');
    }
}
