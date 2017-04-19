import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

import router from './app/routes/api';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/book-library');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/client/dist'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', router);

app.get('/', (req, res) => {
  res.sendFile('client/dist/index.html', { root: __dirname });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('Server has started on port ' + PORT);
});
