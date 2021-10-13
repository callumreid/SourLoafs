const axios = require('axios');

const bakeTimeCalc = () => {
  var bakeTime = new Date();
  bakeTime.setHours(bakeTime.getHours() + 8);
  return bakeTime.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
};

const getPastLoafData = (cb) => {
  axios.get('http://localhost:3001/pastLoafData')
  .then(loafs => {
    cb(loafs);
    }
  );
};

module.exports = {bakeTimeCalc, getPastLoafData};