FROM node:lts-alpine as base

# production stage
FROM base

# set working directory
WORKDIR /usr/src/app

# copy and install node modules
COPY package*.json ./
RUN npm install --only=production

# copy src code
COPY . .

# grpc health check
# RUN GRPC_HEALTH_PROBE_VERSION=v0.3.1 && \
#   wget -qO/bin/grpc_health_probe https://github.com/grpc-ecosystem/grpc-health-probe/releases/download/${GRPC_HEALTH_PROBE_VERSION}/grpc_health_probe-linux-amd64 && \
#   chmod +x /bin/grpc_health_probe

# get access to APP_ID and attach to env
ARG APP_ID
ENV APP_ID=${APP_ID}

# get access to APP_HASH and attach to env
ARG APP_HASH
ENV APP_HASH=${APP_HASH}

# run production service
ENTRYPOINT [ "node", "src/index.js" ]