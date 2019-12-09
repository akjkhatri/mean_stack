const fs = require('fs');
const service = require('./src/convert');

let file_path = 'sample.csv';

console.log(file_path);
fs.readFile(file_path, 'utf8', (err, data) => {
    if(err){
        return console.error(err);
    }
    console.log(service.convertToJson(data));   
});