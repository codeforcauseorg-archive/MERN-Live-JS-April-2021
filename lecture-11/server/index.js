let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let expressbearertoken = require("express-bearer-token");
let admin = require("firebase-admin");

var serviceAccount = require("./service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

mongoose.connect(
  "mongodb+srv://anuj:happy@cluster0.x36ik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const Alive = mongoose.model("AliveUpdate", {
  uid: String,
  email: String,
  lastAlive: String,
});

let app = express();

let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(expressbearertoken());

app.get("/admin/alive", async function (req, res) {
  let alives = await Alive.find();
  res.send(alives);
});

app.use(function (req, res, next) {
  if (req.token) {
    admin
      .auth()
      .verifyIdToken(req.token)
      .then(function (user) {
        req.user = user;
        console.log(user);
        next();
      })
      .catch(function (error) {
        res.sendStatus(401);
      });
  } else {
    res.sendStatus(401);
  }
});

app.get("/alive", async function (req, res) {
  Alive.updateOne(
    { uid: req.user.uid },
    { lastAlive: String(new Date()), email: req.user.email },
    { upsert: true }
  )
    .then(function () {
      res.send("You are noted as alive");
    })
    .catch(async function () {
      res.sendStatus(504);
    });
});

app.listen(PORT, function () {
  console.log(`App started at port number ${PORT}`);
});
