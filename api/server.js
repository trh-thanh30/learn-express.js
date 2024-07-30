const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/api/test", (req, res) => {
  res.send("API is working properly");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
