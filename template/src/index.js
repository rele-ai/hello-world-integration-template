require("dotenv").config()

const { RBS } = require("@releai/rb-node-sdk")
const handlers = require("./handlers")

// initiate the bot server
const rbs = new RBS({
    appId: process.env.APP_ID,
    appHash: process.env.APP_HASH,
})

// register handlers
rbs.use(handlers)

// start the server listener
rbs.listen(3000)
