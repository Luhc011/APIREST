const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Google");
});

const PORT = 3333;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
