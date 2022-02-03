const dns = require('dns');
const goo = dns.lookup('google.com', function(err, address, family) {
    console.log(address);
});