

const bakeTimeCalc = () => {
  var bakeTime = new Date();
  bakeTime.setHours(bakeTime.getHours() + 8);
  return bakeTime.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
}

module.exports = bakeTimeCalc;