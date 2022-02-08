const fs = require('fs').promises;

fs.copyFile('readme.txt', 'writeme')
    .then(() => {
        console.log('복사 완료');
    })
    .catch((error) => {
        console.error(error);
    })