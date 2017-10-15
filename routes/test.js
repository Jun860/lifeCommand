var express = require('express');
var router = express.Router();

router.get('/test1', async function(req, res, next) {
  global.test = '123';
  res.json('OK');
});

router.get('/test2', async function(req, res, next) {
  res.json(global.test);
});

module.exports = router;
