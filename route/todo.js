const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')
const verifyKey = require('./verifyKey')

//To get all users entry data

// router.get('/', async (req, res) => {
//     const {userid} = req.params
//     try{
//         const todos = await Todo.find()
//         if (todos.length < 1) throw (userid)
//         res.json(todos)
//     }
//     catch(err){
//         res.status(500).json({message: `Cannot find any todo`})
//     }
// })

//Getting all todo
router.get('/:userid', [getAllUserTodo, verifyKey], async (req, res) => {
    if (res.verified.success == true) res.json(res.allUserTodo)
    else res.json(res.verified)
})

//Getting single todo
router.get('/:userid/:id', [verifyKey, getUserTodo], async (req, res) => {
    if (res.verified.success == true) res.json(res.userTodo)
    else res.json(res.verified)
})

//Creating one todo
router.post('/addTodo', verifyKey, async (req, res) => {
    const newTodo = new Todo({
        userid: req.body.userid,
        description: req.body.description,
        title: req.body.title,
        isTodo: req.body.isTodo,
        todoList: req.body.todoList
    })
    try {
        if (res.verified.success == false) throw (res.verified)
        const sendNewTodo = await newTodo.save()
        res.status(201).json(sendNewTodo)
    } catch (err){
        res.status(400).json({message: `Unable to save data`, error: err, objectSent: req.body})
    }
})

//updating one todo
router.post('/update/:userid/:id', verifyKey, async (req, res) => {
    let title, isTodo, description, todoList
    if(req.body.title !== null){
        title = req.body.title
    }
    if(req.body.isTodo !== null){
        isTodo = req.body.isTodo
    }
    if(req.body.description !== null){
        description = req.body.description
    }
    if(req.body.todoList !== []){
        todoList = req.body.todoList
    }
    try {
        if (res.verified.success == false) throw (res.verified)
        const updatedTodo = await Todo.updateOne({userid: req.params.userid, _id: req.params.id}, {title, isTodo, description, todoList})
        res.json({message: `Todo has been updated successfully ${updatedTodo}`, data: req.body, success: true})
    }catch(err){
        res.json({message: err.message, success: false})
    }
})

//deleting one todo
router.delete('/delete/:userid/:id', verifyKey, async (req, res) => {
    try {
        if (res.verified.success == false) throw (res.verified)
        const deleteTodo = await Todo.remove({userid: req.params.userid, _id: req.params.id})
        res.json({message: "Deleted successfully", success: true})
    }catch(err){
        res.status(500).json({message: err.message, success: false})
    }
})

//deleting All user todo
router.delete('/delete/:userid', verifyKey, async (req, res) => {
    try {
        if (res.verified.success == false) throw (res.verified)
        const deleteAllUserTodo = await Todo.remove({userid: req.params.userid})
        res.json({message: "Deleted all user TODO successfully", success: true})
    }catch(err){
        res.status(400).json({message: err.message, success: false})
    }
})

async function getAllUserTodo(req, res, next){
    let allUserTodo
    try{
        allUserTodo = await Todo.find({userid: req.params.userid})
        if(allUserTodo == null){
            return res.status(404).json({messages: "User does not have any todo"})
        }
    }catch(err){
        res.status(500).json({message: err.message})
    }

    res.allUserTodo = allUserTodo
    next()
}

async function getUserTodo(req, res, next){
    let userTodo
    try{
        userTodo = await Todo.find({userid: req.params.userid, _id: req.params.id})
        if(userTodo == null || userTodo.length < 1 )
            return res.status(404).json({message: `User: ${req.params.userid} does not have any todo of id: ${req.params.id}`, data: {userid:req.params.userid, id: req.params.id}})
    }catch(err){
        res.status(500).json({message: err.message})
    }

    res.userTodo = userTodo
    next()
}
module.exports = router