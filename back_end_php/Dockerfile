FROM php:8.1.4-fpm-alpine3.14
RUN  php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('sha384', 'composer-setup.php') === '906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN docker-php-ext-install pdo pdo_mysql
RUN mv composer.phar /usr/local/bin/composer 
WORKDIR /var/www/html/
RUN apk add unzip && apk add bash && apk add wget
RUN wget https://get.symfony.com/cli/installer -O - | bash && mv /root/.symfony/bin/symfony /usr/local/bin/symfony
# RUN composer require annotations && composer require webapp && composer require symfony/serializer
# CMD symfony server:start
