const express = require("express");
const UserRouter = express.Router()

const path = require("path");
const fs = require("fs");

const RootDir = path.resolve(process.cwd(), '.');
let UsersPath = RootDir + "/Data/users.json"

//! GET ALL USERS
UserRouter.get("/", (req, res) => {
    try {
        let Users = fs.readFileSync(UsersPath, "utf-8")
        Users = JSON.parse(Users)

        res.status(200).json({ Message: "Get All Users", Users });
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: err })
    }
});


//! POST A NEW USER
UserRouter.post("/", (req, res) => {
    let NewUser = req.body

    if (!NewUser.name || !NewUser.email || !NewUser.age || !NewUser.gender) {
        return res.status(400).json({ Message: "Please give all the details" });
    }

    try {
        let Users = fs.readFileSync(UsersPath, "utf-8")
        Users = JSON.parse(Users)
        Users.push(NewUser)

        fs.writeFileSync(UsersPath, JSON.stringify(Users), (err) => {
            if (err) {
                return res.status(501).json({ Message: "Error in creating a new user", err });
            }
        })

        return res.status(201).json({ Message: "User Successfully Posted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: err })
    }
});

module.exports = UserRouter;

