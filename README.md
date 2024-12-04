# TrackDem  

**TrackDem** is a web-based attendance software designed to digitize and validate attendance records efficiently. It empowers admins (teachers, employers, etc.) to manage user attendance securely using unique, auto-generated user IDs. These IDs are private and integral to the system’s functionality. **TrackDem** ensures streamlined attendance management, robust security, and a user-friendly experience.  

## Table of Contents  

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Installation](#installation)  
- [Environment Variables](#environment-variables)  
- [API Endpoints](#api-endpoints)  
- [Usage](#usage)  
- [Testing](#testing)  
- [Security](#security)  
- [Deployment](#deployment)  
- [Contributing](#contributing)
- [Challenges](#challenges)   

---  

## Features  

1. **Admin Functionality**:  
   - Add, update, and delete users.  
   - Mark attendance for users.  
   - View logs of user attendance.  

2. **User Management**:  
   - Auto-generated, private user IDs upon registration.  
   - Secure user details storage.  

3. **Attendance Validation**:  
   - Attendance marking and validation through unique user IDs.  

4. **Responsive UI**:  
   - A modern, intuitive, and user-friendly interface.

5. **Validation with biometrics/faceID** (Not incorporated):
   - Attendance marking and validation through face ID or biometrics.

---

## Tech Stack  

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express  
- **Database**: MySQL  
- **Authentication & Security**: bcrypt.js  
- **Testing**: Insomnia  
- **Deployment**: Vercel (frontend), Render (backend)  

---

## Getting Started  

Follow these instructions to set up **TrackDem** on your local machine.  

### Prerequisites  

- [Node.js](https://nodejs.org/en/) (v14+)  
- [MySQL](https://www.mysql.com/)  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/TrackDem.git  
   cd TrackDem  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Create a `.env` file in the root directory and configure the necessary environment variables (see below).  

### Environment Variables  

Set up the following variables in your `.env` file:  

```plaintext  
PORT=3000  
DB_HOST=<Your Database Host>  
DB_USER=<Your Database Username>  
DB_PASSWORD=<Your Database Password>  
DB_NAME=<Your Database Name>  
JWT_SECRET=<Your JWT Secret Key>  
```  

---

## API Endpoints  

### Admin Login

- **POST** `/auth/login` - Admin login.

### User Management  

- **POST** `/staff/add` - Add a new user.    
- **DEL** `/staff/delete/:id` - Delete a user by ID.  

### Attendance Management  

- **POST** `/attendance/mark` - Mark user attendance using their unique ID.  
- **GET** `/attendance/:id` - Retrieve attendance logs.
- **GET** `/staff` - View all staffs  

---

## Usage  

### Run the Application  

To start the application locally:  

```bash  
npm start  
```  

The server will start on `http://localhost:3000` (or the port set in `.env`).  

---

## Testing  

**TrackDem** has been tested using **Insomnia** to ensure robust functionality. To test API endpoints:  

1. Import the provided Insomnia collection (if available).  
2. Test API requests such as adding users, updating details, marking attendance, and retrieving logs.  

---

## Security  

TrackDem includes various security measures:  

1. **Hashed Credentials**: User pins are hashed using bcrypt.js for secure storage.  
2. **Authentication**: Tokens ensure that only authorized admins can perform actions.  
3. **Input Validation**: Validates user inputs to ensure data integrity.  
4. **Private IDs**: User IDs are unique and confidential.  

---

## Deployment  

### Frontend  

- Deployed on **Vercel**.  

### Backend  

- Deployed on **Render**.  

Deployment steps:  

1. Push your code to a repository (e.g., GitHub).  
2. Configure Vercel for the frontend and Render for the backend.  
3. Set environment variables on both platforms.  

---

## Contributing  

Contributions are welcome! Follow these steps to contribute:  

1. Fork the repository.  
2. Create a new branch (`git checkout -b feature-branch`).  
3. Commit your changes (`git commit -m "Add new feature"`).  
4. Push the branch (`git push origin feature-branch`).  
5. Open a Pull Request.  

---

## Acknowledgments  

- [Express](https://expressjs.com/)  
- [MySQL](https://www.mysql.com/)  
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)  
- [Insomnia](https://insomnia.rest/)  

---

## Challenges 

- **bcrypt** was changed to **bcryptjs** due to difficulty deploying on render. This was a techinal issue that caused little delay and rigorous debugging for us.
- Challenge with admin creation, that we need to always need to run a script each time we're adding new admin.
- Separating each admin and their students so various group can make use of the app (not solved).


Make use of email: 3mtt@rivers.state and pin: 0000 to login into our web app as an admin. 

Happy attendance management with TrackDem!  
