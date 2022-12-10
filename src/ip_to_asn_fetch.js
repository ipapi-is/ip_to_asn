function ipToASN(ip) {
  return new Promise(function (resolve) {
    fetch(`https://ipapi.is/json/?q=${ip}`)
      .then(res => res.json())
      .then(function (parsed) {
        try {
          if (parsed && parsed.asn) {
            resolve(parsed.asn);
          }
        } catch (err) { }
        resolve(null);
      });
  });
}