const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3000;
const app = express();

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://gamsung:gamsung123@gamsung.pxh6h.mongodb.net/record?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('connected!');
});

const recordRouter = require('./routes/recordRouter');
const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../client')));
// Awww thank you <3 <3
// You're welcome :)

/**
 * define route handlers
 */
app.use('/api/record', recordRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// unknown route ****Since we are using react router, 404 error will be handled on the front end side****
// app.use((req, res) => res.status(404).send('Unknown page, please try again.'));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
