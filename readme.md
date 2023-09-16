# todo app
## My App Name
Todo app build with Express, Typescript and Postgresql

## Client
Client still on progress

## Server
### To get started with server, `change directory to server folder`, then run
- ### `npm install` or `yarn` (if you are using yarn)
- ### setup your database and create `.env` file (reference: .env.example) or if you want to use docker compose run `docker compose up` then adjust the .env file (reference: .env.example)
- ### run the server using command `npm run start` or `yarn start` (if you are using yarn)

### Server tech stacks
- express
- sequelize
- typescript
- zod

### List of basic routes:

| Route  | HTTP | Headers(s) | Body | Description         |
| ------ | ---- | ---------- | ---- | ------------------- |
| http://localhost:3000/api/v1/users/   | POST  | None    | {name:string, password:string} | create user
| http://localhost:3000/api/v1/users/   | GET  | None     | none | find all user
| http://localhost:3000/api/v1/users/:id   | GET  | None  | none | find user by id
| http://localhost:3000/api/v1/users/:id   | PUT  | None     | {name:string, password:string} | update user by id
| http://localhost:3000/api/v1/users/:id   | DELETE  | None  | none | delete user by id
