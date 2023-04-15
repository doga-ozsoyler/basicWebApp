# Basic Web App

Web application.

## Database Collection

#### User

| Key         | Type          |
| :---------- | :------------ |
| `email`     | `string`      |
| `status`    | `string`      |
| `enterCode` | `EnterCodeID` |

#### Enter Code

| Key         | Type     |
| :---------- | :------- |
| `enterCode` | `number` |
| `expireAt`  | `Date`   |

## API Reference

#### Create User

```http
  POST /api/user/create
```

| Headers         | Description                        |
| :-------------- | :--------------------------------- |
| `Authorization` | JWT to get user's all information. |

| Body.   | Type     | Description                                  |
| :------ | :------- | :------------------------------------------- |
| `email` | `string` | **Required**. User's email address to invite |

#### Sign in

```http
  POST /api/user/signin
```

| Body    | Type     | Description                                     |
| :------ | :------- | :---------------------------------------------- |
| `email` | `string` | **Required**. User's email address to send code |

#### Check Enter Code

```http
  POST /api/user/checkEnterCode
```

| Body        | Type     | Description   |
| :---------- | :------- | :------------ |
| `email`     | `string` | **Required**. |
| `enterCode` | `number` | **Required**. |

#### Fetch User Info

```http
  GET /api/user/info
```

| Headers         | Description                        |
| :-------------- | :--------------------------------- |
| `Authorization` | JWT to get user's all information. |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_URI`

`SENDINBLUE_API_KEY`

`JWT_SECRET_KEY`

`NODE_ENV`

## Color Reference

| Color                | Hex                                                              |
| -------------------- | ---------------------------------------------------------------- |
| Background Color     | ![#684F8C](https://via.placeholder.com/10/0a192f?text=+) #684F8C |
| Secondary Color      | ![#A993BF](https://via.placeholder.com/10/f8f8f8?text=+) #A993BF |
| Link and Input Color | ![#684F8C](https://via.placeholder.com/10/00b48a?text=+) #684F8C |
| Button Color         | ![#6F96A6](https://via.placeholder.com/10/00b48a?text=+) #6F96A6 |

## Run Locally

Clone the project

```bash
  git clone https://github.com/doga-ozsoyler/basicWebApp.git
```

Go to the api directory

```bash
  cd api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run api
```

Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the client

```bash
  npm run start
```

## Running Api Tests

Go to the api directory

```bash
  cd api
```

Run test

```bash
  npm run test
```

## Tech Stack

**Api:** Javascript, Express, Jsonwebtoken, Mongoose, Nodemon, Dotenv, Sendinblue

**Api Test:** Jest, Supertest, Mongodb Memory Server

**Client:** React Native, Javascript, Async Storage, Native Base, Expo, Axios, Redux-toolkit
