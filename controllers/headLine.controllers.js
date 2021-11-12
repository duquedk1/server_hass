import db from "../db.js";
import { headLine } from "../models/index.js";

export const getAll = (req, res) => {
  db.connect();

  console.log("conectado");

  headLine.find((err, data) => {
    if (err) res.status(500).send();
    if (data.length === 0) res.status(204).send();
    res.status(200).send(data);
  });
};

export const getOne = (req, res) => {
  db.connect();

  const { id } = req.params;

  headLine.findById(id, (err, data) => {
    if (err) res.sendStatus(404);
    res.status(200).json(data);
  });
};

export const create = (req, res) => {
  db.connect();

  if (req.body) {
    headLine.create(req.body, (err, data) => {
      if (err) res.sendStatus(500);
      res.status(201).json(data);
    });
  }
};

export const update = (req, res) => {
  const { id } = req.params;
  const newHeadLine = req.body;

  db.connect();
  headLine.findById(id, (err, data) => {
    if (err) res.status(500).send(err);
    headLine.updateOne(data, newHeadLine, (err, value) => {
      if (err) res.status(500).send(err);
      res.status(200).send(value);
    });
  });
};

export const deleteOne = (req, res) => {
  const { id } = req.params;

  db.connect();
  headLine.findById(id, (err, data) => {
    if (err) res.status(404).send(err);
    data.remove((err, value) => {
      if (err) res.status(500).send(err);
      res.send(value);
    });
  });
};