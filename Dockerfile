# Use an official PHP runtime as a parent image
FROM php:8.0-apache

# Install any needed extensions
RUN docker-php-ext-install pdo pdo_mysql

# Set the working directory
WORKDIR /var/www/html

# Copy the current directory contents into the container
COPY . /var/www/html

# Make port 80 available to the world outside this container
EXPOSE 80
