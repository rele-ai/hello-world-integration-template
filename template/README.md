# Hello World Example
Leverage WhatsApp as a gateway to your enterprise.

Bring your enterprise software to WhatsApp, build your own workflows, and share information with your teams and partners in a secure and intuitive way without leaving your chats. RELE.AI enables your organization to centralize and automate processes through WhatsApp.

- [RELE.AI](https://rele.ai)
- [Documentations](https://docs.rele.ai)
- [Console](https://console.rele.ai)
- [Support Email](mailto:support@rele.ai)

## Initiate tokens
```shell
# set up tokens
npm run tokens
```

### Verify tokens setup
From the project root directory print the .env file and check if the APP_ID and APP_HASH are listed.
```shell
echo .env
```

## Dev Setup
```shell
# to start the development server
npm run dev

# to run the tests (no need for a running server)
npm run test
```

## Build Setup
```shell
# install dependenices
npm install

# update build & deploy script
# for the integrations
echo "{BUILD_SCRIPT}" >> ./scripts/deploy.sh

# push version
rb push
```
