FROM node:24.11.0-slim

WORKDIR /app

# Instal dependencies
COPY package*.json ./

# Copy source code
COPY . .

# TODO: shouldn't dev/prod be automated depending on env ? or should I use multiple dockerfiles ??
CMD ["npm", "run", "dev"]