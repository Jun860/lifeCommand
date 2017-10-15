var express = require('express');
var router = express.Router();
var mode_model = require('../model/mode.js').mode;

router.get('/set_mode', function(req, res, next) {
  var mode = new mode_model();
  mode.set_mode(req.query);

  res.json(true);
});

router.get('/get_mode', function(req, res, next) {
  var mode = new mode_model();

  res.json(mode.get_mode());
});

module.exports = router;
