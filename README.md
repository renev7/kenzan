# Prerequisites
1. Install [MySQL](https://www.mysql.com/downloads/)
2. Install [Node.js](https://nodejs.org/en/download/)
3. Install [Postman](https://www.getpostman.com/apps) (optional)
4. Install [cURL](https://curl.haxx.se/download.html) (optional)

# Setup sample DB
1. Run mysql scripts to create and populate a sample DB (see `mysql.sql`)

# Run API
1. Clone this repo
2. Run `npm i`
3. Run `node start`

By default this API runs in port 3000.

# Use API
1. If you have Postman installed, import `postman_collection.json`.
2. If you have cURL installed, open `curl-examples.txt` and execute API calls examples in your terminal.

# Notes
- API comes pre-configured to connect to a specific DB. If you wish to connect to a different DB, update `config/db.json` as needed.
