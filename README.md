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
| Background Color     | ![#684F8C](https://via.placeholder.com/10/F1E4F2?text=+) #F1E4F2 |
| Secondary Color      | ![#A993BF](https://via.placeholder.com/10/A993BF?text=+) #A993BF |
| Link and Input Color | ![#684F8C](https://via.placeholder.com/10/684F8C?text=+) #684F8C |
| Button Color         | ![#6F96A6](https://via.placeholder.com/10/6F96A6?text=+) #6F96A6 |

## Screenshots

#### Web

<details>
  <summary>Sign in</summary>
  
  <img src="https://github.com/doga-ozsoyler/basicWebApp/blob/feature/Add_readme/client/assets/appImage/Signin.png" width="850" title="Sign in">
  
</details>

<details>
  <summary>Enter Code</summary>
  
  <img src="https://github.com/doga-ozsoyler/basicWebApp/blob/feature/Add_readme/client/assets/appImage/EnterCode.png" width="850" title="Enter Code">
  
</details>

<details>
  <summary>Home Page</summary>
  
  <img src="https://github.com/doga-ozsoyler/basicWebApp/blob/feature/Add_readme/client/assets/appImage/HomePage.png" width="850" title="Home Page">
  
</details>

<details>
  <summary>Enter New User</summary>
  
  <img src="https://github.com/doga-ozsoyler/basicWebApp/blob/feature/Add_readme/client/assets/appImage/EnterNewUser.png" width="850" title="Enter New User">
  
</details>

#### Mobile Phone

<details>
  <summary>Sign in</summary>
  
  <img src="https://github.com/doga-ozsoyler/basicWebApp/blob/feature/Add_readme/client/assets/appImage/EnterMailIOS.png" width="350" title="Sign in">
  
</details>

<details>
  <summary>Enter Code</summary>
  
  <img src="https://github.com/doga-ozsoyler/basicWebApp/blob/feature/Add_readme/client/assets/appImage/EnterCodeIOS.png" width="350" title="Enter Code">
  
</details>

<details>
  <summary>Home Page</summary>
  
  <img src="https://github.com/doga-ozsoyler/basicWebApp/blob/feature/Add_readme/client/assets/appImage/HomaPageIOS.png" width="350" title="Home Page">
  
</details>

<details>
  <summary>Enter New User</summary>
  
  <img src="https://github.com/doga-ozsoyler/basicWebApp/blob/feature/Add_readme/client/assets/appImage/EnterNewUserIOS.png" width="350" title="Enter New User">
  
</details>

#### Mail Format

<details>
  <summary>Access Code Mail</summary>
  
  <img src="https://github.com/doga-ozsoyler/basicWebApp/blob/feature/Add_readme/client/assets/appImage/CodeMailFormat.png" width="550" title="Access Code Mail">
  
</details>

<details>
  <summary>Invitation Mail</summary>
  
  <img src="https://github.com/doga-ozsoyler/basicWebApp/blob/feature/Add_readme/client/assets/appImage/InvitationMailFormat.png" width="550" title="Invitation Mail">
  
</details>

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
