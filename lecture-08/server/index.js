let express = require('express');
let cors = require('cors');

let app = express();

let PORT = 5000;

app.use(express.json());
app.use(cors());

app.post("/submit", function(req, res){
    console.log(req.body);
    res.send("Submited");
})

app.get("/ok", function(req, res){
    res.send("Submited");
})


app.listen(PORT, function(){
    console.log(`App started at port number ${PORT}`);
})