const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href= "/98">take it down, pass it around </a>`)
  });

app.get("/98", (req, res) => {
      res.send(`<h1>98 Bottles of beer on the wall</h1> 
      <a href= "/${98-1}">take one down, pass it around </a>`)
});

app.get("/0", (req, res) => {
      res.send(`<h1>No more Bottles of beer on the wall</h1>
      <a href= "/">start over </a>`)
});

app.get("/:number_of_bottles", (req, res) => {
    res.send(`<h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1>
    <a href= "/${req.params.number_of_bottles-1}">take one down, pass it around </a>`)
});

app.get("/:0", (req, res) => {
    res.send(`<h1>No more Bottles of beer on the wall</h1>
    <a href= "/"> Start Over> </a>`)
});

  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });