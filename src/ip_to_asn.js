const https = require('https');

function ipToASN(ip) {
  return new Promise(function (resolve) {
    const options = {
      hostname: 'ipapi.is',
      port: 443,
      path: '/json/?q=' + ip,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const req = https.request(options, function (res) {
      res.on('data', function (response) {
        try {
          let parsed = JSON.parse(response);
          if (parsed && parsed.asn) {
            resolve(parsed.asn);
          }
        } catch (err) { }
        resolve(null);
      });
    });

    req.on('error', function (error) {
      reject(null);
    });

    req.end();
  });
}

exports.ipToASN = ipToASN;