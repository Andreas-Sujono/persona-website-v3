# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
# COPY ../package.json ./
# COPY ../yarn.lock .

# add app
COPY ./ ./
RUN npm install

EXPOSE 3000

# start app
CMD ["npm", "start"]