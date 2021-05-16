let http = require("http");
let socketio = require("socket.io");
let express = require("express");
let admin = require("firebase-admin");

var serviceAccount = require("./service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let app = express();

let httpServer = http.createServer(app);

let socketsInfo = new Map();
let activeUsers = new Map();

// app.get("/", function (req, res) {
//   res.send("Okay ji");
// });

let io = socketio(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.use(function (socket, next) {
  if (socket.request.headers.authorization) {
    let authorization = socket.request.headers.authorization;
    let token = authorization.slice(7);
    admin
      .auth()
      .verifyIdToken(token)
      .then(function (user) {
        socket.user = user;
        next();
      })
      .catch(function (error) {
        // console.log(error);
        socket.close();
      });
  } else {
    socket.close();
  }
});

io.on("connection", function (socket) {
  console.log(socket.user);

  socketsInfo.set(socket.user.uid, socket);
  activeUsers.set(socket.user.uid, socket.user.name);

  socket.on("message", function (payload) {
    console.log(payload);
    io.sockets.emit("broadcast", payload);
  });

  socket.on("disconnect", function () {
    socketsInfo.delete(socket.user.uid);
    activeUsers.delete(socket.user.uid);
  });
});

setInterval(function () {
  let payload = [];
  activeUsers.forEach((value, key) => {
    payload.push({
      uid: key,
      name: value,
    });
  });
  io.sockets.emit("active", payload);
}, 5000);

httpServer.listen(5000);
