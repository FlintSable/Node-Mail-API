# Node Mail API

Here's a quick node mail api specifically for setting up a contact form. Modify `src/api/mailer.js` for custom functionality.

## Start Up

### Local/Server
1. Create file: `src/config/local.js`
2. Export the following and add gmail credentials
```
exports.gmail = {
    email: 'myemail@gmail.com',
    password: "password'"
};
```

3. Run `npm start`

### Heroku
1. Create two environment variables:
    - email: {your gmail}
    - password: {your password}

2. Run `npm start`

### Command Line
1. Run: `export EMAIL={your gmail}; export PASSWORD={your passowrd}; npm start`

## Sending a Message
1. POST `http://localhost:8080/api/sendEmail`
2. Form Fields
    - subject
    - message

## Credit
The API folder structure is based on the following repo:
https://github.com/developit/express-es6-rest-api


