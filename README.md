# aipo_ical_proxy
Node.js script for AWS Lambda that login to Aipo and get iCal data

# Installation
Get latest release zip file from [release page](https://github.com/tamano/aipo_ical_proxy/releases) and upload to AWS Lambda.

## Environment variables
Following environment variables should be defined.

- AIPO_URL
    - URL for your Aipo server (ex: `https://aipo.sample.jp/aipo`. `portal` should be omitted).
- AIPO_USERNAME
    - Login username for your Aipo.
- AIPO_PASSWORD
    - Login password for your Aipo.

## Configuration for AWS Lambda
- Handler
    - `index.handler`
- Timeout
    - This parameter should be larger than 5 sec (This depends on your server spec).

# Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/tamano/aipo_ical_proxy
