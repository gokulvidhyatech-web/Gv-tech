require("dotenv").config();

const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const app =express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Running");
});
/*
app.get("/staffs", (req, res) => {

    console.log("Route Hit");

    pool.query("SELECT * FROM staffs", (err, result) => {

        console.log("Query Completed");

        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        console.log(result);

        res.json(result);

    });

});*/
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    const sql = "SELECT * FROM users WHERE username = ?";

    pool.query(sql, [username], (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        if (result.length === 0) {
            return res.json({
                success: false,
                message: "Invalid Username or Password"
            });
        }

        const user = result[0];

        if (user.password !== password) {
            return res.json({
                success: false,
                message: "Invalid Username or Password"
            });
        }

        return res.json({
            success: true,
            message: "Login Successful"
        });

    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});