# Gobarber 2020

Typescript fullstack application with Node.js | React | React Native

- run postgres: `docker run --name gobarber_2020 -e POSTGRES_PASSWORD=<password> -p 5432:5432 -d postgres`
- run migrations: `yarn typeorm migration:run`
- run mongodb; `docker run --name mongodb -p 27017:27017 -d -t mongo`
