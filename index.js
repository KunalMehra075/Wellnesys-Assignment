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


//* Base Route
app.get("/", (req, res) => {
    try {
        res.status(200).json({ Message: "Welcome to Technical-Assignment Web Application" });
    } catch (err) {
        res.status(503).json({ Error: err })
    }
});


//! Error Handling Route
app.use((req, res) => {
    let Method = req.method
    let URL = req.url
    res.status(404).json({ Message: "Route Not Found", Method, URL })
})


//todo<----------- LISTNING TO SERVER----------->

const PORT = 4500
app.listen(PORT, () => {
    console.log(`Server Running in port ${PORT}`);
})