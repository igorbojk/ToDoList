const express = require('express'),
  bodyParser = require('body-parser'),
  ToDoController = require('./to-do/to-do.controller'),
  cors = require('cors');

const app = express();
const db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: true}));

app.get('/todos', ToDoController.getAll);

app.post('/todos', ToDoController.create);

app.delete('/todos', ToDoController.deleteAll);

app.delete('/todos/:id', ToDoController.deleteItem);

app.put('/todos/:id', ToDoController.updateItem);

db.connect('mongodb://localhost:27017/myapi', function (err) {
  if (err) {
    return console.log(err);
  }
  app.listen(3012, function () {
    console.log('ToDo API started');
  })
});
