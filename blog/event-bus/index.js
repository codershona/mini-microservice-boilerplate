const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://posts-cluster-srv:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://comments-srv:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://query-srv:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://moderation-srv:4003/events", event).catch((err) => {
    console.log(err.message);
  });

  // axios.post("http://<Put Your IP Address here>:4008/events", event).catch((err) => {
  //   console.log(err.message);
  // });

  // if (it is not 1am) {
  //   axios.post("http://<IP Address>:4006/events", event).catch((err) => {
  //   console.log(err.message);
  // });
  // axios.post("http://<IP Address>:4007/events", event).catch((err) => {
  //   console.log(err.message);
  // });
  // }
  
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});