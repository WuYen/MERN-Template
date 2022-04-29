const router = require('express').Router();

router.get('/', async function (req, res, next) {
  try {
    res.send({ success: true, data: 'Hello World!' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
