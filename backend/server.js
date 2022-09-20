const cors = require("cors");
const express = require("express");
const app = express();
const connection = require("./db");
const tasks = require("./routes/tasks");
const Task = require("./models/task");
const socket = require("socket.io");

connection()
  .then(res => console.log(res));

app.use(cors());
app.use(express.json());
app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;

const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

const io = new socket.Server(server, {
  cors: {
    origin: "localhost:3000",
    methods: ["GET", "POST"],
  }
});

Task.watch().
  on('change', data => {
    console.log(data);
    io.emit("db change", data, data.fullDocument, data.documentKey);
  }
);