---
id: "en-php-guide-class-mongodb-driver-exception-writeexception"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-exception-writeexception"
title: "The MongoDB\\Driver\\Exception\\WriteException class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-exception-writeexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Exception\WriteException class

MongoDB\Driver\Exception\WriteException

 
> This exception class is *DEPRECATED* as of extension version 1.20.0 and was removed in 2.0. This exception was never directly thrown by the extension. Applications should use `MongoDB\Driver\Exception\BulkWriteException` instead.

   Introduction  Base class for exceptions thrown by a failed write operation. The exception encapsulates a `MongoDB\Driver\WriteResult` object.      Class Synopsis   `MongoDB\Driver\Exception\WriteException`    `abstract` `MongoDB\Driver\Exception\WriteException`   `extends` `MongoDB\Driver\Exception\ServerException`   MongoDB\Driver\Exception\Exception      `protected` `MongoDB\Driver\WriteResult` `writeResult`                   Properties 
- **`writeResult`** — The `MongoDB\Driver\WriteResult` associated with the failed write operation.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This class was removed. |
| PECL mongodb 1.20.0 | This class has been deprecated and will be removed in version 2.0. |
| PECL mongodb 1.5.0 | This class now extends `MongoDB\Driver\Exception\ServerException` instead of `MongoDB\Driver\Exception\RuntimeException`. |
