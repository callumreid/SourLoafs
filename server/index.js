const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json())

app.post("/test", (req, res) => {
  console.log(req.body)
  res.json({ message: "Mooooo from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});