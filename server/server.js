var express = require('express');
var config = require('./utilities/config');

var app = express();
app.use(require('./middleware'));
app.use(require('./routes'));

const port = config.PORT || 3001;
app.listen(port, function () {
  console.log(`Server is starting at ${port}`);
});
