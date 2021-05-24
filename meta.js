// export tempalte meta information
module.exports = {
  prompts: {
    NGROK_TOKEN: {
      type: "string",
      required: true,
      label: "NGROK Authtoken",
    }
  },
  completeMessage: "{{#inPlace}}To get started:\n\n  npm install\n  npm run tokens\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run tokens\n  npm run dev{{/inPlace}}"
}
