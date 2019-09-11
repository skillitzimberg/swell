# Use an official Python runtime as a parent image
FROM node:10

RUN mkdir /swell

# Set the working directory to /app
WORKDIR /swell

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]