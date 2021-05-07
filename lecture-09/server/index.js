let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let { Parser } = require("json2csv");

mongoose.connect(
  "mongodb+srv://anuj:happy@cluster0.x36ik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

let json2csv = new Parser();

const Application = mongoose.model("Application", {
  name: String,
  email: String,
  address: String,
  phone: String,
});

let app = express();

let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post("/submit", function (req, res) {
  console.log(req.body);
  let application = new Application(req.body);

  application
    .save()
    .then((response) => res.send("Submited"))
    .catch((error) => res.sendStatus(501));
});

app.get("/", function (req, res) {
  res.send("Working");
});

app.get("/applications", function (req, res) {
  Application.find()
    .then((response) => {

      console.log(response);
      const csv = json2csv.parse(response);
      console.log(csv);
      res.header("Content-Type", "text/csv");
      res.attachment("application.csv");
      return res.send(csv);
    })
    .catch((error) => res.sendStatus(501));
});

app.listen(PORT, function () {
  console.log(`App started at port number ${PORT}`);
});
