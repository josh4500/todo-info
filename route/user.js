const express = require("express");
const router = express.Router();
const User = require("../models/user");
const hash = require("pbkdf2-password")();
const shash = require("shorthash");
const verifyKey = require("./verifyKey");
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res.json({ message: "No saved log", success: false });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.json({ message: err, success: false });
    req.userid = user.userid;
    next();
  });
}
//Adding a user
router.post("/addUser", [verifyKey, getOneUser], (req, res) => {
  var password = {};
  try {
    if (res.verified.success == false) throw res.verified;
    if (res.user.length > 0)
      throw { message: "User already exist", success: false };
    if (req.body.password !== null && req.body.email !== null) {
      hash(
        { password: req.body.password },
        async function (err, pass, salt, hash) {
          if (err) throw err;

          password.salt = salt;
          password.hash = hash;

          const newUser = new User({
            userid:
              req.body.userid == null
                ? shash.unique(req.body.email)
                : req.body.userid,
            username: req.body.username,
            email: req.body.email,
            password: password,
          });
          const addNewUser = await newUser.save();
          res.status(201).json({ addNewUser, success: true });
        }
      );
    } else {
      throw {
        message: "Password or email field is incorrectly filled!!",
        success: false,
      };
    }
  } catch (err) {
    res.status(400).json({
      message: `Unable to save data: ${err.message}`,
      success: false,
      objectSent: req.body,
    });
  }
});

//Get user by email with authentication
router.post("/getUser", [verifyKey, getOneUser], async (req, res) => {
  try {
    if (res.verified.success == false) throw res.verified;
    if (req.body.password !== undefined) {
      hash(
        { password: req.body.password, salt: res.user[0].password.salt },
        function (err, pass, salt, hash) {
          if (err) throw err;

          if (hash === res.user[0].password.hash) {
            const token = req.body.keepSignedIn
              ? jwt.sign(
                  { userid: res.user[0].userid },
                  process.env.TOKEN_SECRET,
                  {
                    expiresIn: "1h",
                  }
                )
              : null;
            res.json({
              data: res.user[0],
              token,
              success: true,
            });
          } else {
            res.json({ message: "User authentication failed", success: false });
          }
        }
      );
    } else {
      throw { message: "Unable to process request", success: false };
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get user by userid without authentication
router.get("/getUser/", [verifyKey, authenticateToken], async (req, res) => {
  try {
    if (res.verified.success == false) throw res.verified;
    const user = await User.find({ userid: req.userid });

    res.json({ data: user[0], success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//updating user
router.patch(
  "/updateUser/:userid",
  [verifyKey, getOneUser],
  async (req, res) => {
    try {
      if (res.verified.success == false) throw res.verified;
      if (req.body.password.salt || req.body.password.hash) {
        const updatedUSer = await User.updateOne(
          { userid: req.params.userid },
          { username: req.body.username }
        );
        res.json({
          message: `User details updated successfully`,
          data: req.body,
          change: updatedUSer,
          success: true,
        });
      } else {
        hash(
          { password: req.body.password },
          async function (err, pass, salt, hash) {
            if (err) throw err;

            let password = {};
            password.salt = salt;
            password.hash = hash;

            if (req.body.password == null && req.body.password == null) {
              throw {
                message: "Password or username filed is incorrectly field",
              };
            }

            password.salt = salt;
            password.hash = hash;

            const updatedUSer = await User.updateOne(
              { userid: req.params.userid },
              { username: req.body.username, password }
            );
            res.json({
              message: `User details updated successfully`,
              data: req.body,
              change: updatedUSer,
              success: true,
            });
          }
        );
      }
    } catch (err) {
      res.json({ message: err.message, success: false });
    }
  }
);

//Delete a user
router.delete(
  "/deleteUser/:userid",
  [verifyKey, getOneUser],
  async (req, res) => {
    try {
      if (res.verified.success == false) throw res.verified;
      const deletedUser = await User.deleteOne({ userid: req.params.userid });
      res.json(`User deleted successfully`);
    } catch (err) {
      res.status(500).json({ message: err.message, success: false });
    }
  }
);

async function getUsers(req, res, next) {
  let allUser;
  try {
    allUserTodo = await User.find();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  res.allUser = allUser;
  next();
}

async function getOneUser(req, res, next) {
  let user;
  try {
    user = await User.find({ email: req.body.email });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}
module.exports = router;
