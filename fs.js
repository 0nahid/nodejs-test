const fs = require('fs');
fs.readFile('demofile.txt', (err, data) => {
    console.log(data.toString());
});