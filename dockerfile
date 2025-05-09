# Use Nginx alpine image
FROM nginx:alpine

# Copy the static content to the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# The default command starts Nginx
CMD ["nginx", "-g", "daemon off;"]