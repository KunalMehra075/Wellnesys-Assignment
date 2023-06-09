
const fs = require("fs")
const path = require('path');

const logger = (req, res, next) => {
    try {
        const RootDir = path.resolve(process.cwd(), '.');
        let log = { Type: "Info", Method: req.method, Route: req.url, Time: new Date().toISOString(), User_Agent: req.headers["user-agent"], Body: req.body, IP: req.ip }
        fs.appendFileSync(RootDir + "/Data/logs.txt", JSON.stringify(log) + "\n")
        next()
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = logger;