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

app.get("/students",(req,res)=>{
    res.send("gvtech")
});

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

});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});