const express = require('express');
const router = express.Router();

router.use('/api/sample', require('./SampleController'));

//error handling
router.use(function (err, req, res, next) {
  console.error(err);
  return res.status(500).send({
    success: false,
    data: null,
    error: err.name,
    message: err.message,
  });
});

module.exports = router;
