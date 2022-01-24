const dep2 = require('./dep2');
console.log('require dep2', dep2);
moudle.exports = () => {
    console.log('dep2', dep2);
};