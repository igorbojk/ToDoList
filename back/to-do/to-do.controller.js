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
    res.send(todo);
  })
};

exports.deleteAll = function (req, res) {
  Todos.deleteAll(function (err, result) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.json({status: 'deleted'});
  })
};

exports.deleteItem = function (req, res) {
  Todos.deleteItem(req.params.id, function (err, result) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.json({status: 'deleted'});
  })
};

exports.updateItem = function (req, res) {
  Todos.updateItem(req.body.item._id, {desc: req.body.item.desc, done: req.body.item.done}, function (err, result) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(req.body.item);
  })
};
