// const { logger } = require("@releai/rb-node-sdk")

/**
 * Pull the message from the request and reply
 * with `Hello ${name}`
 *
 * @param {Request} req - RB's request object.
 * @param {Response} res - RB's response object.
 */
module.exports.hello_world = (req, res) => {
    // log.debug the request payload
    // logger.debug({
    //     message: "recieved request to hello_world endpoint",
    //     payload: req.payload
    // })

    // reply to the user with the custom message
    res.send(200, {
        message: `Hello ${req.payload.name}`
    })
}