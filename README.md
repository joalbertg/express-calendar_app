# Back Calendar App

- [MongoDB][mongodb]
- [Mongoose][mongoosejs]
- [JSON Web Tokens][jwt_io]

[mongodb]: https://account.mongodb.com/account/login
[mongoosejs]: https://mongoosejs.com/
[jwt_io]: https://jwt.io/

### Frontend repository

[Calendar APP][calendar_app]

[calendar_app]: https://github.com/joalbertg/react-calendar_app

### Installs

Without packages
```shell
docker-compose run app yarn add express express-validator mongoose mongoose-unique-validator
docker-compose run app yarn add bcryptjs jsonwebtoken cors moment
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
│   │   ├── events.js
│   │   └── index.js
│   ├── helpers
│   │   ├── database.js
│   │   ├── http-errors.js
│   │   ├── isDate.js
│   │   └── jwt.js
│   ├── middlewares
│   │   ├── validate-fields.js
│   │   └── validate-jwt.js
│   ├── models
│   │   ├── Event.js
│   │   └── User.js
│   ├── public
│   │   ├── index.html
│   │   └── styles.css
│   ├── routes
│   │   ├── auth.js
│   │   └── events.js
│   └── server.js
└── yarn.lock

8 directories, 22 files
```

### Start project

> run `docker-compose up`

