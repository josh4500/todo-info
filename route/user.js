const express = require('express')
const router = express.Router()
const User = require('../models/user')
const hash = require('pbkdf2-password')()
const shash = require('shorthash')


//Adding a user
router.post('/addUser', getOneUser, (req, res) => {
    var password = {}
    try {
        if(res.user.length > 0 ) throw ({message: "User already exist", success: false})
        if (req.body.password !== null && req.body.email !== null) {
            hash({ password: req.body.password }, async function (err, pass, salt, hash) {
                if (err) throw err;

                password.salt = salt;
                password.hash = hash;

                const newUser = new User({
                    userid: req.body.userid == null ? shash.unique(req.body.email): req.body.userid,
                    username: req.body.username,
                    email: req.body.email,
                    password: password
                })
                const addNewUser = await newUser.save()
                res.status(201).json({addNewUser, success: true})
            });
        }
        else {
            throw ({message: "Password or email field is incorrectly filled!!", success: false})
        }
    } catch (err) {
        res.status(400).json({message: `Unable to save data: ${err.message}`, success: false, objectSent: req.body})
   }
})

//Get user by email
router.post('/getUser', getOneUser, async (req, res) => {
    res.json(res.user)
})

//Get user by userid
router.get('/getUser/:userid', getOneUser, async (req, res) => {
    try{
        const user = await User.find({ userid: req.params.userid })
        res.json(user)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

//updating user
router.patch('/updateUser/:userid',  (req, res) => {
    try {
        hash({ password: password }, async function (err, pass, salt, hash) {
            if (err) throw err;
            
            let password
            if(req.body.password == null && req.body.password == null){
                throw ({message: "Password or username filed is incorrectly field"})
            }
            
            password.salt = salt;
            password.hash = hash;

            const updatedUSer = await User.updateOne({userid: req.params.userid}, {username, password})
            res.json({message: `User details updated successfully ${updatedUSer}`, data: req.body, success: true})
        });
    }catch(err){
        res.json({message: err.message, success: false})
    }
})

//Delete a user
router.delete('/deleteUser/:userid', getOneUser, async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({userid: req.params.userid});
        res.json(`User deleted successfully`)
    } catch (err) {
        res.status(500).json({message: err.message, success: false})
    }
})

async function getUsers(req, res, next) {
    let allUser
    try{
        allUserTodo = await User.find()
    }catch(err){
        res.status(500).json({message: err.message})
    }

    res.allUser = allUser
    next()
}

async function getOneUser(req, res, next) {
    let user
    try{
        user = await User.find({ email: req.body.email })
    }catch(err){
        res.status(500).json({message: err.message})
    }

    res.user = user
    next()
}
module.exports = router