# Modified Brett Fisher's node-docker-good-defaults https://github.com/BretFisher/node-docker-good-defaults/blob/master/Dockerfile
FROM node:10

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 8000 for node, and 9229 and 9230 (tests) for debug
ARG PORT=8000
ENV PORT $PORT
EXPOSE $PORT 9229 9230

RUN npm i npm@latest -g

# install dependencies first, in a different location for easier app bind mounting for local development
WORKDIR /opt
COPY package.json package-lock.json* ./
RUN npm install && \
    npm install --only=dev && \
    npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . /opt/app
RUN echo "node_modules" > .eslintignore

# the official node image provides an unprivileged user as a security best practice
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
RUN chown -R node /opt/app
USER node

RUN npm run build

# use `docker run --init in production`
# so that signals are passed properly.
CMD [ "ws" ]