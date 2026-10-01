---
id: "en-php-guide-class-mongodb-driver-exception-executiontimeoutexception"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-exception-executiontimeoutexception"
title: "The MongoDB\\Driver\\Exception\\ExecutionTimeoutException class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-exception-executiontimeoutexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Exception\ExecutionTimeoutException class

MongoDB\Driver\Exception\ExecutionTimeoutException

   Introduction  Thrown when a query or command fails to complete within a specified time limit (e.g. [maxTimeMS]()).      Class Synopsis   `MongoDB\Driver\Exception\ExecutionTimeoutException`   `final`  `MongoDB\Driver\Exception\ExecutionTimeoutException`   `extends` `MongoDB\Driver\Exception\ServerException`   MongoDB\Driver\Exception\Exception                  Changelog 
|  |  |
| --- | --- |
| PECL mongodb 1.5.0 | This class now extends `MongoDB\Driver\Exception\ServerException` instead of `MongoDB\Driver\Exception\RuntimeException`. |
