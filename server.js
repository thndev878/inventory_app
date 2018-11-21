const express = require("express");
const router = require("./server/routes"); 
const path = require('path');
const bodyParser = require('body-parser');

console.log('* ** *** server.js');

const app = express();
app.use(express.static(__dirname + "/public/dist/public")) 
app.use(bodyParser.json()); 

router(app);
app.all("**", (req, res) => res.sendFile(path.join(__dirname, "/public/dist/public/index.html")));

app.listen(8000, function () {
    console.log("on port 8000!");
});
