# IP to ASN

[![Npm package version](https://badgen.net/npm/v/asn-from-ip)](https://www.npmjs.com/package/asn-from-ip)
[![Npm package yearly downloads](https://badgen.net/npm/dy/asn-from-ip)](https://npmjs.com/package/asn-from-ip)

This tiny package allows you to obtain ASN meta information for any IP address. Some IP addresses are of course not assigned to an ASN.

## Installation

```bash
npm install asn-from-ip
```

If you want to clone the repository directly from GitHub instead:

```bash
git clone git@github.com:ipapi-is/ip_to_asn.git
```

## Usage from Node.js

Lookup the IP address `144.168.164.55`:

```JavaScript
const { ipToASN } = require('asn-from-ip');

(async () => {
  let result = await ipToASN('144.168.164.55');
  console.log(result);
})();
```

which outputs (at the time of writing):

```JavaScript
{
  asn: 55286,
  route: '144.168.160.0/21',
  descr: 'SERVER-MANIA, CA',
  country: 'ca',
  active: true,
  org: 'B2 Net Solutions Inc.',
  domain: 'www.servermania.com',
  abuse: 'support@servermania.com',
  type: 'hosting',
  created: '2013-05-16',
  updated: '2013-05-16',
  rir: 'arin',
  whois: 'https://ipapi.is/json/?whois=AS55286'
}
```

Most IP addresses can be associated with an Autonomeous System (AS). The return value of `ipToASN()` is an object with the following attributes:

- `asn` - `int` - The AS number
- `route` - `string` - The IP route as CIDR in this AS
- `descr` - `string` - An informational description of the AS
- `country` - `string` - The country where the AS is situated in (administratively)
- `active` - `string` - Whether the AS is active (active = at least one route administred by the AS)
- `domain` - `string` - The domain of the organization to which this AS belongs
- `org` - `string` - The organization responisible for this AS
- `type` - `string` - The type for this ASN, this is either `hosting`, `education`, `goverment`, `banking`, `business` or `isp`
- `created` - `string` - When the ASN was established
- `updated` - `string` - The last time the ASN was updated
- `rir` - `string` - To which Regional Internet Registry the ASN belongs
- `whois` - `string` - An url to the whois information for this ASN

For inactive autonomeous systems, most of the above information is not available.

## Usage from the Browser

Copy the browser JavaScript bundle to your preferred location. After installing the module with

```bash
npm install asn-from-ip
```

you can find the minified JavaScript here: `node_modules/asn-from-ip/dist/ipToASN.min.js`

```html
<!doctype html>

<html lang="en">

<head>
  <meta charset="utf-8">
  <title>IP to ASN Example Browser</title>
  <meta name="description" content="IP to ASN Example">
  <meta name="author" content="ipapi.is">
</head>

<body>
  <script type="text/javascript" src="dist/ipToASN.min.js"></script>
  <script type="text/javascript">
    ipToASN('144.168.164.55').then((res) => {
      alert(`ipToASN: ${JSON.stringify(res)}`);
    });
  </script>
</body>

</html>
```

## Use the Database Directly

This package uses the [ipapi.is API](https://ipapi.is/developers.html) in order to avoid shipping a huge database in the npm module. If you have a large volume of IP addresses to lookup, you can download the full & free [ASN Database](https://ipapi.is/asn.html).

GitHub mirror of the database: [ASN Database Mirror](https://github.com/ipapi-is/ipapi/tree/main/databases)
