var express = require('express');

var app = express();


app.get('/api/whoami', function(req, res) {
  res.status(200)
     .json({
       "ipaddress": parseIpAddress(req.connection.remoteAddress),
       "language": parseLanguage(req.headers["accept-language"]),
       "software": parseSoftware(req.headers["user-agent"])
     });
});

app.listen(3000, function (){
  console.log('Server listening on port ', 3000);
});

function parseIpAddress(ipAddress) {
  var ip = ipAddress.split(':');
  return ip[ip.length-1];
}

function parseLanguage(language) {
  return language.split(',')[0];
}

function parseSoftware(userAgent) {
  console.log(userAgent);
  return userAgent.split(/[\(\)]/)[1];
}

module.exports.parseIpAddress = parseIpAddress;
module.exports.parseLanguage = parseLanguage;
module.exports.parseSoftware = parseSoftware;
