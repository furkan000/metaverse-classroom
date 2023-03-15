# Use official node image
FROM node:19.7

# Set working directory
WORKDIR /usr/src/app

# Copy all files from current directory to working directory
COPY . .

# Install dependencies
RUN npm install

# Set environment variable
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start app
CMD ["npm", "run", "dev"]