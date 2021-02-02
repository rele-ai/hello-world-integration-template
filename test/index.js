// initiate the server for the testing
require("../")

// check that process env exists with APP_ID and APP_HASH
if (!process.env.APP_ID || !process.env.APP_HASH) {
    throw Error("missing required env variables APP_ID and APP_HASH")
}

// import the client
const { RBC } = require("@releai/rb-node-sdk")

// initiate the client
const rbc = new RBC({
    appId: process.env.APP_ID,
    appHash: process.env.APP_HASH,
    host: "0.0.0.0",
    port: 3000
})

// Describe the hello world service
describe("Hello World Service", () => {
    // Verify that the hello_world handler reply with the proper message
    it("Should return 200 and Hello RELE.AI", async () => {
        try {
            // make a request to the hello_world endpoint
            // with the custom name
            const response = await rbc.notify("hello_world", { name: "RELE.AI" })

            // check the response payload
            if (response.payload.message) {
                return true
            }
        } catch (e) {
            console.error("unable to make request to backend", e)
        }

        // fail test
        return false
    })
})
