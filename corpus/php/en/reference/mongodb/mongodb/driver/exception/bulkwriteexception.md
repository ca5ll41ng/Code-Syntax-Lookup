---
id: "en-php-guide-class-mongodb-driver-exception-bulkwriteexception"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-exception-bulkwriteexception"
title: "The MongoDB\\Driver\\Exception\\BulkWriteException class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-exception-bulkwriteexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Exception\BulkWriteException class

MongoDB\Driver\Exception\BulkWriteException

   Introduction  Thrown when a bulk write operation fails.      Class Synopsis   `MongoDB\Driver\Exception\BulkWriteException`    `MongoDB\Driver\Exception\BulkWriteException`   `extends` `MongoDB\Driver\Exception\ServerException`   MongoDB\Driver\Exception\Exception      `public` `readonly` `MongoDB\Driver\WriteResult` `writeResult`                   Properties 
- **`writeResult`** — The `MongoDB\Driver\WriteResult` associated with the failed write operation.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | The `writeResult` property is now `public` `readonly`. |
| PECL mongodb 2.0.0 | This class now extends `MongoDB\Driver\Exception\ServerException` instead of `MongoDB\Driver\Exception\WriteException`. |
