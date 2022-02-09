const fs = require('fs');

setInterval(() => {
    fs.unlink('./adadf.js', (err) => {
        if (err) {
            console.log(err);
        }
    })
}, 1000);