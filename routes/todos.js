var express = require('express');
var router = express.Router();

var Todo = require("../models/Todo");

//listele
router.get("/", (req, res, next) => {
  Todo.find().then((todos) => {
    res.json(todos);
  }).catch((err) => {
    res.json(err);
  });
});

//ekle
router.post("/", (req, res, next) => {
  const data = {
    title: req.body.title,
    date: req.body.date,
    complated: req.body.complated
  }

  new Todo(data).save().then(() => {
    res.json({
      data: [data],
      status: "saved"
    });
  }).catch((err) => {
    res.json({
      data: [data],
      status: "not saved"
    });
  });
});

//güncelle
router.put("/:id", (req, res, next) => {
  const id = req.params.id;

  const data = {
    title: req.body.title,
    date: req.body.date,
    complated: req.body.complated
  }
  Todo.findByIdAndUpdate({ _id: id }, data).then((newTodo) => {
    res.json({
      id: id,
      data: data,
      status: "updated"
    }).catch((err) => {
      res.json({
        id: id,
        data: [data],
        status: "not updated"
      });
    })
  });
});

//sil
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  Todo.findByIdAndDelete({ _id: id }).then(() => {
    res.json({
      id: id,
      status: "deleted"
    });
  }).catch((err) => {
    res.json({
      id: id,
      status: "deleted"
    });
  });
});

module.exports = router;