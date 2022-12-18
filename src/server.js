const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();

const uri = "mongodb://localhost:27017/database";

MongoClient.connect(uri, (error, client) => {
  if (error) throw error;

  const db = client.db("database");

  app.get("/items", (req, res) => {
    db.collection("items")
      .find()
      .toArray((error, results) => {
        if (error) throw error;
        res.send(results);
      });
  });

  app.post("/items", (req, res) => {
    const item = req.body;
    db.collection("items").insertOne(item, (error, result) => {
      if (error) throw error;
      res.send(result);
    });
  });

  app.put("/items/:id", (req, res) => {
    const id = req.params.id;
    const item = req.body;
    db.collection("items").updateOne(
      { _id: id },
      { $set: item },
      (error, result) => {
        if (error) throw error;
        res.send(result);
      }
    );
  });

  app.delete("/items/:id", (req, res) => {
    const id = req.params.id;
    db.collection("items").deleteOne({ _id: id }, (error, result) => {
      if (error) throw error;
      res.send(result);
    });
  });

  app.listen(3000, () => {
    console.log("API listening on port 3000");
  });
});
