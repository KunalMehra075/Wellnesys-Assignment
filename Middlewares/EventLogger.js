
const fs = require("fs")
const path = require('path');

const EventLogger = (type, Message) => {
    try {
        const RootDir = path.resolve(process.cwd(), '.');
        let log = { Type: type, Message, Time: new Date().toISOString() }
        fs.appendFileSync(RootDir + "/Data/logs.txt", JSON.stringify(log) + "\n")
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = EventLogger;