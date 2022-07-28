FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .

ENV NODE_ENV=production
ENV LOG_LEVEL=info
ENV LISTEN_PORT=3333

ENV DB_HOST='#{DB_HOST}#'
ENV DB_PORT='#{DB_PORT}#'
ENV DB_USER='#{DB_USER}#'
ENV DB_PASS='#{DB_PASS}#'
ENV DB_NAME='#{DB_NAME}#'

RUN npm install
# If you are building your code for production
#RUN npm ci --only=production

# Copy all other source code to work directory
ADD . /usr/src/app

# TypeScript compilation
RUN npm run build

# Start
CMD [ "npm", "start" ]
EXPOSE 3333
