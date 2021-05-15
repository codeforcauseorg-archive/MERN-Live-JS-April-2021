let http = require("http");
let socketio = require("socket.io");
let express = require("express");

let app = express();

let httpServer = http.createServer(app);

app.get("/", function (req, res) {
  res.send("Okay ji");
});

let io = socketio(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", function (socket) {
  console.log("You are now connected");

  socket.on("message", function (payload) {
    console.log(payload);
    io.sockets.emit("broadcast", payload);
  });
});

httpServer.listen(5000);
