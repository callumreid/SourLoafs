const express = require("express");
const PORT = process.env.PORT || 3001;
const db = require('../database/index.js');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json())

app.post("/submitLoaf", (req, res) => {
  const data = req.body;
   const query = `INSERT INTO Loaf_Notes (stepTwoInput, stepFourInput, stepFiveInput, stepEightInput, stepNineInput,
    finalNotesInput) VALUES ('${data['stepTwoInput']}', '${data['stepFourInput']}', '${data['stepFiveInput']}',
    '${data['stepEightInput']}', '${data['stepNineInput']}', '${data['finalNotesInput']}')`;

  db.query(query, (err, results) => {
    if (err) {
      console.log('err in endpoint /submitLoaf ', err);
      res.status(201).json('err in POST /submitLoaf');
    }
  });
  res.json({message: 'Bake deets posted'})
});

app.get('/pastLoafData', (req, res) => {
  const query = `SELECT * FROM Loaf_Notes`;
  db.query(query, (err, results) => {
    if (err) {
      console.log('err in endpoint /pastLoafData', err);
      res.status(201).json('err in GET /pastLoafData');
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});