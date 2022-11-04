const express = require('express');
const { timmerProcess, sequentialProcess } = require('./helper');
const totalCpus = require('os').cpus().length;
const app = express();

console.log('totalCpus -------->', totalCpus);
/*
 Hadled by libuv worker thread
*/
app.get('/non-blocking', async (req, res) => {
  const startTime = new Date();
  const result = await timmerProcess(req.query.ms);
  res.json(reqResTime(startTime, result));
});

/*
 Sequential /  blocking request
 Async await not used here
*/
app.get('/blocking', async (req, res) => {
  const startTime = new Date();
  const result = await sequentialProcess(req.query.ms);
  // res.send(`<h1>${result}</h1>`);
  res.json(reqResTime(startTime, result));
});

const reqResTime = (startTime, result) => {
  var timeTakenMs = (new Date() - startTime) / 1000;
  return { timeTakenMs, result };
};
app.listen(3000, () => console.log('Express server is running on port 3000'));
