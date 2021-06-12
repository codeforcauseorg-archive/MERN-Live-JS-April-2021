let axios = require("axios");
let fs = require("fs");

let name = "alexa.png";
let content = fs.readFileSync("./alexa.png", { encoding: "base64" });

axios.post("http://localhost:3000/images/", {
  name,
  content,
});
