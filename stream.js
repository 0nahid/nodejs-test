const fs = require('fs');
const ourReadStream = fs.createReadStream(__dirname + '/stream.txt', 'utf8');
ourReadStream.on('data', (data) => {
    console.log(data)
})