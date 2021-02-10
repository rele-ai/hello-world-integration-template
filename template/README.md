# {{ PROJECT_NAME }}
{{ DESCRIPTION }}

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
