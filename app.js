const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const api = require('./src/routes/api')

//middleware
app.use('/api', api)

//testeando

app.get('/', (req, res) => {
  res.send('Hello team');
})

//error 404
app.use((request, response) => {
  const ERROR = {
    message: '404. Not Found'
  }
  response
    .status(404)
    .json(ERROR);
});

//error 500
app.use((err, request, response, next) => {
  const ERROR = {
    message: '500. Server Error'
  }
  response
    .status(500)
    .json(ERROR);
});


app.listen(PORT, () => {
  const msg = (`Node Server is running on PORT: ${PORT}`);

  console.log(msg);
});
