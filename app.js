const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');


const { bookRouter } = require('./routes');

const PORT = process.env.PORT || 3000;
const db = mongoose.connect('mongodb://localhost/SeedRestAPI');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world with a new update');
});

app.use('/api', bookRouter);

app.listen(PORT, () => {
  console.log('Server running on: ' + PORT);
});