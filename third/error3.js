const fs = require('fs').promises;

setInterval(() => {
    fs.unlink('./afdsad.js')
}, 1000);