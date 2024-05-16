import cors from 'cors';
import mysql from 'mysql2';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "abc123",
    database: "signup",
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Database connected");
});

const createLoginTable = `CREATE TABLE IF NOT EXISTS login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') NOT NULL DEFAULT 'user'
)`;

db.query(createLoginTable, (err, data) => {
    if (err) {
        console.error("Error creating login table:", err.message);
    } else {
        console.log("Login table created or already exists");
    }
});


app.post('/signup', (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const sql = "INSERT INTO login (name, email, password, role) VALUES (?, ?, ?, ?)";
    const values = [name, email, password, role || 'user']; // Default role to 'user' if not provided

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error inserting user:", err);
            return res.json({ error: "Error inserting user" });
        }
        console.log("User inserted successfully");
        return res.status(200).json({ message: "User inserted successfully" });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const sql = "SELECT name FROM login WHERE `email` = ? AND `password` = ?";
    
    db.query(sql, [email, password], (err, data) => {
        if (err) {
            console.error("Error executing login query:", err);
            return res.status(500).json({ error: "Error executing login query" });
        }
        if (data.length > 0) {
            console.log("Login successful");
            return res.json("Success");
        } else {
            console.log("Login failed");
            return res.json("Fail");
        }
    });
});

// const bcrypt = require('bcrypt');

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ error: "Missing required fields" });
//     }

//     const sql = "SELECT id, name, email, password FROM login WHERE email = ?";
    
//     db.query(sql, [email], (err, results) => {
//         if (err) {
//             console.error("Error executing login query:", err);
//             return res.status(500).json({ error: "Error executing login query" });
//         }
        
//         if (results.length === 0) {
//             console.log("Login failed: User not found");
//             return res.status(401).json({ error: "Invalid email or password" });
//         }

//         const user = results[0];

//         // Compare hashed password
//         bcrypt.compare(password, user.password, (err, result) => {
//             if (err) {
//                 console.error("Error comparing passwords:", err);
//                 return res.status(500).json({ error: "Error comparing passwords" });
//             }

//             if (result) {
//                 console.log("Login successful");
//                 return res.json({ id: user.id, name: user.name, email: user.email });
//             } else {
//                 console.log("Login failed: Invalid password");
//                 return res.status(401).json({ error: "Invalid email or password" });
//             }
//         });
//     });
// });



const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
