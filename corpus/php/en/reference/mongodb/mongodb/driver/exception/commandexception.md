---
id: "en-php-guide-class-mongodb-driver-exception-commandexception"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-exception-commandexception"
title: "The MongoDB\\Driver\\Exception\\CommandException class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-exception-commandexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Exception\CommandException class

MongoDB\Driver\Exception\CommandException

   Introduction  Thrown when a command fails.      Class Synopsis   `MongoDB\Driver\Exception\CommandException`    `MongoDB\Driver\Exception\CommandException`   `extends` `MongoDB\Driver\Exception\ServerException`   MongoDB\Driver\Exception\Exception      `public` `readonly` `object` `resultDocument`                   Properties 
- **`resultDocument`** — The result document associated with the failed command.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | The `resultDocument` property is now `public` `readonly`. |
