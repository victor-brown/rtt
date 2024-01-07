FROM php:7.4
MAINTAINER Barna Viktor
WORKDIR /var/www/html
ADD index.php .
ADD form.php .
ADD images.php .
EXPOSE 80:80
CMD ["php", "-S", "0.0.0.0:80"]