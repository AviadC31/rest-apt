Welcome to restApi app!

This app reveals information about resturant emlopyees, using "REST API".

App allows data manage using some API client tool such as "Postman".

Using CRUD operations, you can manage your employees data easily by sending HTTP requests to the server.

*** available commands ***

1. GET http://localhost:8080/employees : READ all employees info

2. GET http://localhost:8080/employee/{firstName} : READ employee info by first name
        ** please deliver employee's first name in params

3. POST http://localhost:8080/employees : CREATE new employee

4. PUT http://localhost:8080/employees/{firstName} : UPDATE employee's info
        ** please deliver employee's first name in params,
                    deliver employee's field to change in body as json object : { "field": "age", "value": 22}

5. DELETE http://localhost:8080/employees/{firstName} : DELETE employee
        ** please deliver employee's first name in params


*** installing instructions ***

1. In the project directory (nevigation path: $ cd ./server ) , run: 

### `npm i`

for server side dependencies installition

2. in "client" directory: (nevigation path: $ cd ./client )

### `npm i`

for client side dependencies installition
    

*** app starting ***

3. starting the server on port 8080 in "server" directory: (nevigation path: $ cd ./server ): 

### `node server`

4. running react app on port 3000:  in "client" directory: (nevigation path: $ cd ./client )

### `npm start`

Runs the app in the development mode

Open [http://localhost:3000] to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.


Enjoy!


