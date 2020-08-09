//Instantiate App
const express = require("express");
const app = express();

//Setting Port
const port = 5000;

//Sample endpoint
app.get("/", (req, res) => {
  res.send("Response from API");
});

// Started Server to Listen Port
app.listen(port, () => console.log("Server started on Port:" + port));
