const csv = require('csvtojson');

const csvFilePath='./static/somedata.csv';

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})