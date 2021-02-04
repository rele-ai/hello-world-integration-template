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
            label: "Project name"
        },
        BASE_URL: {
            type: "string",
            required: true,
            label: "Application's base url `${domain}:${port}`"
        },
        IS_TLS: {
            type: "boolean",
            required: true,
            label: "Is the application protected by SSL?"
        }
    },
    completeMessage: "{{#inPlace}}To get started:\n\n  npm install\n  rb push{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  rb push{{/inPlace}}"
}
