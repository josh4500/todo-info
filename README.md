# Todo-info app Express JS and Mongodb Backend

## Usage

Connect to app with REST API

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
    "userid": "davinci4500",
    "isTodo": "false",
    "title": "Mubarack",
    "description": "Hey our unknown todo",
    "todoList": [{"todo": "Going back to church", "checked": false}]
}
```

## Contributing

## License

ISC
