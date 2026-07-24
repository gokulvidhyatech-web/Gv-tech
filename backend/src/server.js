const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const PORT = process.env.PORT || 5000;

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
app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});