var Papa = require("papaparse");
var fs = require("fs");
var path = require('path');

var csv = fs.readFileSync(path.join(__dirname, './rawdata.csv'),'utf8');

var data = Papa.parse(csv,{
    header: true,
    complete: function (results) {
    createString(results);
    }
});


function createString(result){
    var data = JSON.stringify(result.data)
    writeFile(data);
}

function writeFile(data){
    console.log(data);
    fs.writeFileSync(path.join(__dirname, './server/rawdata.json'), data);
}
