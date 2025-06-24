#!/bin/bash

# Pull latest code
git pull origin main

# Install backend dependencies
cd backend
npm install
pm2 restart server.js --update-env

# Build frontend
cd ../frontend
npm install
npm run build
sudo cp -r build/* /var/www/taxdigie/

# Restart Nginx
sudo systemctl restart nginx