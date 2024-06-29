# Use a base MySQL image from Docker Hub
FROM mysql:8

# Environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=ecommerce_db
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypassword

COPY ./enable-mysql-native-password.cnf /etc/mysql/conf.d/

# Expose the MySQL port
EXPOSE 3306

# Command to run when the container starts
CMD ["mysqld"]