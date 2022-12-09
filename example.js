const { ipToASN } = require('./src/ip_to_asn');

(async () => {
  console.log(await ipToASN('144.168.164.55'));
})();