let express = require("express");

let app = express();

let users = [];

let middle = function(req, res, next){
    console.log("yeeee");
    setTimeout(()=> next(), 10000);
}

app.use(middle);

app.use(express.json());

let handle = function (req, res) {
  console.log("Chitthi aayi hai");
  res.send("Welcome to my server");
  
};

let handleCreateUser = function(req, res){
    // console.log(req.body);
    users.push(req.body);
    res.send("Recieved");
}

let handleFetchUsers = function(req, res){
    res.send(users);
}

app.get("/okay", handle);

app.post("/users/", handleCreateUser);
app.get("/users/", handleFetchUsers);

app.listen(5000);
