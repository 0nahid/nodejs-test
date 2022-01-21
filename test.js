var whois = require('node-whois');

whois.lookup('103.124.251.38', function(err, data) {
  console.log(err, data);
});