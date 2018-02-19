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
