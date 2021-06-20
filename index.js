const express = require('express');

const app = express();

app.use(express.json());

// test route
app.get('/test', function (req, res) {
  res.send({testKey: 'test value'});
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server started at ' + port));


 