# Prerequisites
1. Install [MySQL](https://www.mysql.com/downloads/)
2. Install [Node.js](https://nodejs.org/en/download/)
3. Optional: Install [Docker](https://www.docker.com/get-docker)
3. Optional: Install [Postman](https://www.getpostman.com/apps)
4. Optional: Install [cURL](https://curl.haxx.se/download.html)

# Setup sample DB
1. Run mysql scripts to create and populate a sample DB (see `mysql.sql`)

This API is pre-configured to connect to a localhost DB. If you wish to connect to a different DB, update `config/db.json` as needed.

# Running API locally
1. Clone this repo
2. Install modules `npm i`
3. Run the app `node start`
4. Test api: http://localhost:3000/healthz

By default this API runs in port 3000.

# Running API in Docker
1. Clone this repo
2. Under `config/db.json`, if you DB is running locally change host to your localhost hostname. If it's running somewhere else, change it to the corresponding hostname.
3. Build image `docker build -t kenzan .`
4. Run image `docker run --name kenzan_code_challenge -d -p 3000:3000 kenzan`
5. Test api: http://localhost:3000/healthz

# Use API
1. If you have Postman installed, import `postman_collection.json` (change hostname as needed).
2. If you have cURL installed, open `curl-examples.txt` and execute API calls examples in your terminal (change hostname as needed).

TODO: Add Swagger
