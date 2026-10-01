---
id: "en-php-guide-book-mysqlnd"
language: "php"
lang: "en"
category: "guide"
name: "book.mysqlnd"
title: "MySQL Native Driver"
module: "mysqlnd"
source_url: "https://www.php.net/manual/en/book.mysqlnd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MySQL Native Driver

Mysqlnd

 {{{ preface 

 Introduction  MySQL Native Driver is a replacement for the MySQL Client Library (libmysqlclient). MySQL Native Driver is part of the official PHP sources as of PHP 5.3.0.    The MySQL database extensions MySQL extension, `mysqli` and PDO MYSQL all communicate with the MySQL server. In the past, this was done by the extension using the services provided by the MySQL Client Library. The extensions were compiled against the MySQL Client Library in order to use its client-server protocol.    With MySQL Native Driver there is now an alternative, as the MySQL database extensions can be compiled to use MySQL Native Driver instead of the MySQL Client Library.    MySQL Native Driver is written in C as a PHP extension.   

 }}}
