// export tempalte meta information
module.exports = {
    prompts: {
        PROJECT_NAME: {
            type: "string",
            required: true,
            label: "Project name"
        },
        DESCRIPTION: {
            type: "string",
            required: true,
            label: "Project description"
        },
        BASE_URL: {
            type: "string",
            required: true,
            validate: (input) => {
                try {
                    let [domain, port] = input.split(":")
                    port = Number(port)

                    if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain) && port > 0 && port <= 65535) {
                        return true
                    }

                    return false
                } catch (e) {
                    console.error("unable to validate base_url", e)
                    return false
                }
            },
            label: "Application's base url `${domain}:${port}`"
        },
        IS_TLS: {
            type: "boolean",
            required: true,
            label: "Is the application protected by SSL?"
        }
    },
    completeMessage: "{{#inPlace}}To get started:\n\n  npm install\n  rb push{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  rb deploy:user OR rb deploy:org{{/inPlace}}"
}
