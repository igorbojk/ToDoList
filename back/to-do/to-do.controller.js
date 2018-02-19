const Todos = require('./to-do.model');

exports.getAll = function (req, res) {
  Todos.getAll(function (err, docs) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(docs);
  })
};

exports.create = function (req, res) {
  const todo = {
    desc: req.body.desc,
    done: false
  };
  Todos.create(todo, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  })
};

