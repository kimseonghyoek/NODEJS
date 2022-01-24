const dep1 = require('./dep1');
console.log('require dep1', dep1);
moudle.exports = () => {
    console.log('dep1', dep1);
};