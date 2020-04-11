var fs = require('fs');

fs.mkdir('folder', function() {    
fs.readFile('index.html', 'utf8', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data.toString());
fs.writeFile('./folder/home.html', data, (err) => {
    if (err) {
        throw err
    }
    console.log('Sucesso!');
        });
    });
});
