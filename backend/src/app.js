const express = require("express");
const app = express();
require("./database/connect");
const path = require("path");
const port = process.env.PORT || 3000;

const Static_path = path.join(__dirname, "../public");

app.use(express.static(Static_path));

app.get("/", (req,res, next ) => {

    res.send({
        message:"Welcome to Home page"
    })
})

app.listen(port, () =>{
    console.log('server is running on', port);
}) 