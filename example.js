const { ipToASN } = require('./src/ip_to_asn');

(async () => {
  console.log(await ipToASN('95.91.211.148'));
})();