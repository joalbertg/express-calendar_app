# Back Calendar App

- [MongoDB][mongodb]
- [Mongoose][mongoosejs]
- [JSON Web Tokens][jwt_io]

[mongodb]: https://account.mongodb.com/account/login
[mongoosejs]: https://mongoosejs.com/
[jwt_io]: https://jwt.io/

### Installs

Without packages
```shell
docker-compose run app yarn add express express-validator mongoose mongoose-unique-validator
docker-compose run app yarn add bcryptjs jsonwebtoken
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
│   ├── controllers
│   │   ├── auth.js
│   │   └── index.js
│   ├── helpers
│   │   ├── database.js
│   │   ├── http-errors.js
│   │   └── jwt.js
│   ├── middlewares
│   │   └── validate-fields.js
│   ├── models
│   │   └── User.js
│   ├── public
│   │   ├── index.html
│   │   └── styles.css
│   ├── routes
│   │   └── auth.js
│   └── server.js
└── yarn.lock

8 directories, 17 files
```

### Start project

> run `docker-compose up`

