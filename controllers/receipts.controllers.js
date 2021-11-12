import db from "../db.js";
import { Receipts } from "../models/index.js";

export const getAll = (req, res) => {
  db.connect();

  console.log("conectado");

  Receipts.find((err, data) => {
    if (err) res.status(500).send();
    if (data.length === 0) res.status(204).send();
    res.status(200).send(data);
  });
};

export const getOne = (req, res) => {
  db.connect();

  const { id } = req.params;

  Receipts.findById(id, (err, data) => {
    if (err) res.sendStatus(404);
    res.status(200).json(data);
  });
};

export const create = (req, res) => {
  db.connect();

  if (req.body) {
    Receipts.create(req.body, (err, data) => {
      if (err) res.sendStatus(500);
      res.status(201).json(data);
    });
  }
};

export const update = (req, res) => {
  const { id } = req.params;
  const newReceipts = req.body;

  db.connect();
  Receipts.findById(id, (err, data) => {
    if (err) res.status(500).send(err);
    Receipts.updateOne(data, newReceipts, (err, value) => {
      if (err) res.status(500).send(err);
      res.status(200).send(value);
    });
  });
};

export const deleteOne = (req, res) => {
  const { id } = req.params;

  db.connect();
  Receipts.findById(id, (err, data) => {
    if (err) res.status(404).send(err);
    data.remove((err, value) => {
      if (err) res.status(500).send(err);
      res.send(value);
    });
  });
};