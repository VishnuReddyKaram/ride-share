# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY . /app

# Install dependencies
RUN npm install


# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
