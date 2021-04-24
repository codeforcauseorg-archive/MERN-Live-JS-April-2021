let express = require("express");

let app = express();

app.use(express.urlencoded())

app.post("/action/submit", function(req, res){
    console.log(req.query);
    console.log(req.body);
    res.redirect("/submit.html")
});

app.use('/', express.static('static'));

app.listen(3000);

//disconnt.nike.com

//nike.discount.com
