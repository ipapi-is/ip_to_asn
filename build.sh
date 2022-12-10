#!/bin/bash

# Minify JavaScript
uglifyjs --compress --mangle -- src/ip_to_asn_fetch.js > dist/ipToASN.min.js