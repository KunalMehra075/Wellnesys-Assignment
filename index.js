const logger = require("./Middlewares/Logger.middleware");
const UserRouter = require("./Routes/Users.route");
const express = require("express");
const cors = require("cors")
const app = express();



// ? MIDDLEWARES
app.use(cors())
app.use(express.json());
app.use(logger)
app.use("/users", UserRouter)


app.get("/", (req, res) => {
    try {
        res.status(200).json({ Message: "Welcome to Technical-Assignment Web Application" });
    } catch (err) {
        res.status(503).json({ Error: err })
    }
});


// ? LISTNING TO SERVER
app.listen(4500, () => {
    console.log("Server Running in port 4500");
})