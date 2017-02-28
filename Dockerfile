# Use latest version of Node as the base image
FROM node:7.6.0

# Set work directory for run/cmd 
WORKDIR /app

# Copy everything else to work directory
COPY ./ /app

# Expose server port
EXPOSE 3001

# Run node app with env variable
CMD ["node", "/app/index.js"]
