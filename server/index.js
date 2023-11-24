const express = require("express");
const app = express();
const cors = require("cors");
const responseController = require("./apiController/chatGptApi");

app.use(express.json());
app.use(cors());
app.listen(8080,(req,res)=>{
    console.log("Running");
})

app.post("/answers",responseController)