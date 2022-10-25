# Todo-info app (Express JS and Mongodb Backend)

## Usage


Connect to app with REST API

###

Request and Response Data Schema

```js
//This is the user schema. All fields are returned on getUser POST http://<host-url>/user/getUser
const userSchema = {
  userid: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: {
      hash: String,
      salt: String,
    },
    required: true,
  },
};
```

## At the end of request string add your API KEY to request string

Example

```rest
GET http://example.com/todo/userid?key=API_KEY

```

## Get all User todo

```rest
GET http://<host-url>/todo/<userid>

```

## Post new Todo

```rest
POST http://<host-url>/todo/addTodo
Content-Type: application/json

{
    "userid": <userid>,
    "isTodo": "true",
    "title": "A test data",
    "description": "Hey our first todo",
    "todoList": [{"todo": "Write essay", "checked": false}]
}

```

## Get single todo

```rest
GET http://<host-url>/todo/<userid>/<todo-id>

```

## Update a todo/info

```rest
POST  http://<host-url>/todo/update/<userid>/<todo-id>
Content-Type: application/json

{
    "userid": <userid>,
    "isTodo": "false",
    "title": "Hey our second test",
    "description": "Hey our unknown todo",
    "todoList": []
}
```

## Delete an entry from the todo

```rest
DELETE  http://<host-url>/todo/delete/<userid>/<todo-id>
```

## Add new user

```rest
POST http://<host-url>/user/addUser
Content-Type: application/json

{
    "userid": "user321",
    "username": "Joshua",
    "password": "davinci4500",
    "email": "user321@gmail.com"
}

```

## Authenticate user

```rest
POST http://<host-url>/user/getUser
Content-Type: application/json

{
    "email": "user3210@gmail.com",
    "password": "user123Password"
}
```
## Get user data

```rest
GET http://<host-url>/user/getUser/<userid>

```

## Contributing

## License

ISC
