const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const app =express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Backend-running")

});

app.get("/students",(req,res)=>{
    res.send("gvtech")
});

app.get("/staffs", (req, res) => {

    pool.query("SELECT * FROM staffs", (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});
app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});