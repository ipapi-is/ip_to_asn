function ipToASN(ip) {
  return new Promise(function (resolve) {
    fetch(`https://api.ipapi.is/?q=${ip}`)
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