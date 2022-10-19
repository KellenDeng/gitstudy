
const fs = require('fs');


const p = new Promise((resolve, reject) => {
    fs.readFile('./resources/为学.md', (err, data) => {
        resolve(data);
    });
});
p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/插秧诗.md', (err, data) => {
            resolve([value, data]);
        });
    });
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/观书有感.md', (err, data) => {
            value.push(data);
            resolve(value);
        });
    });
}).then(value => {
    console.log(value.join('\r\n'));
})
