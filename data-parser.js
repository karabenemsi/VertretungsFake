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
    var i  = 1;
    var data = '';
    result.data.forEach(row => {
        row.id = i;
        //To String
        var rowString = JSON.stringify(row);
        rowString = rowString.replace(new RegExp('"', 'g'),'\\"');
        data += '\"' + i +  '\":\"' + rowString + '\",\n';
        i++;
    });
    data = data.slice(0,data.length - 2)
    writeFile(data);
}

function writeFile(data){
     var data = 
     "{ \n"+
     "  \"ids\": { \n"+
     "    \"Substitute\": 2,\n"+
     "    \"rolltext\": 2\n"+
     "  },\n" +
     "  \"models\": {\n"+
     "    \"Substitute\": {\n"+
          data +
     "      },\n" +
     "    \"rolltext\": {\n"+
     "      \"1\": \"{\\\"startDate\\\":\\\"2018-06-15T12:00:00.000Z\\\",\\\"endDate\\\":\\\"2018-07-03T12:00:00.000Z\\\",\\\"text\\\":\\\"YOURTEXTHERE\\\",\\\"id\\\":1}\",\n"+
     "      \"2\": \"{\\\"startDate\\\":\\\"2018-06-19T12:00:00.000Z\\\",\\\"endDate\\\":\\\"2018-07-03T12:00:00.000Z\\\",\\\"text\\\":\\\"SECONDTEXTHERE\\\",\\\"id\\\":2}\"\n"+
     "    }\n" +
     "  }\n" +
     "}\n";
    console.log(data);
    // fs.writeFileSync(path.join(__dirname, './server/rawdata.json'), data);
}
