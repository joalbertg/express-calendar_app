# Back Calendar App

- [MongoDB][mongodb]
- [Mongoose][mongoosejs]

[mongodb]: https://account.mongodb.com/account/login
[mongoosejs]: https://mongoosejs.com/

### Installs

Without packages
```shell
docker-compose run app yarn add express express-validator mongoose mongoose-unique-validator
docker-compose run app yarn add nodemon dotenv --dev
```

With `package.json`
```shell
docker-compose run app yarn
```

### Project structure

> run `tree -I "node_modules"`
```shell
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── package.json
├── src
│   ├── config
│   │   └── index.js
│   └── server.js
└── yarn.lock

2 directories, 7 files
```

### Start project

> run `docker-compose up`

