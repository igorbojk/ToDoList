var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.getAll = function (cb) {
  db.get().collection('todos').find().toArray(function (err, docs) {
    cb(err, docs);
  })
};

exports.create = function (item, cb) {
  db.get().collection('todos').insert(item, function (err, result) {
    cb(err, result);
  })
};

exports.deleteAll = function (cb) {
  db.get().collection('todos').remove(function (err, result) {
    cb(err, result);
  })
}

exports.deleteItem = function (id, cb) {
  db.get().collection('todos').deleteOne({_id: ObjectID(id)}, function (err, result) {
    cb(err, result);
  })
};

exports.updateItem = function (id, item, cb) {
  db.get().collection('todos').updateOne(
    {_id: ObjectID(id)},
    item,
    function (err, result) {
      cb(err, result);
    }
  )
};
