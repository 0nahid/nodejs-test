var fs = require('fs');

// //create a file named mynewfile1.txt:
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

const redo = () => {
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}
setInterval(() => {
    redo();
}, 1000);