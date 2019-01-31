# Modified Brett Fisher's node-docker-good-defaults https://github.com/BretFisher/node-docker-good-defaults/blob/master/Dockerfile
FROM thegreenhouse/nodejs-dev:0.4.0

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 8000 for prod, 1981 for dev, and 9876 for testing
ARG PORT=8000
ENV PORT $PORT
EXPOSE $PORT 1981 9876

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

RUN npm run build

# use `docker run --init in production`
# so that signals are passed properly.
CMD [ "ws" ]