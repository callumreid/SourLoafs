const bakeTimeCalc = (startTime) => {
  const curTime = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
  const finishedTime = '5:40pm'
  return curTime;
}

module.exports = bakeTimeCalc;