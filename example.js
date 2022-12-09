const { ipToASN } = require('./ip_to_asn');

(async () => {
  console.log(await ipToASN('144.168.164.58'));
})();