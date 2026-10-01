---
id: "en-php-guide-class-mongodb-driver-exception-runtimeexception"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-exception-runtimeexception"
title: "The MongoDB\\Driver\\Exception\\RuntimeException class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-exception-runtimeexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Exception\RuntimeException class

MongoDB\Driver\Exception\RuntimeException

   Introduction  Thrown when the driver encounters a runtime error (e.g. internal error from [libmongoc]()).      Class Synopsis   `MongoDB\Driver\Exception\RuntimeException`    `MongoDB\Driver\Exception\RuntimeException`   `extends` `RuntimeException`   MongoDB\Driver\Exception\Exception      `protected` `array|null` `errorLabels`               Properties 
- **`errorLabels`** — Contains an array of error labels to go with an exception. For example, error labels can be used to detect whether a transaction can be retried safely if the `TransientTransactionError` label is present. The existence of a specific error label should be tested for with the `MongoDB\Driver\Exception\RuntimeException::hasErrorLabel()`, instead of interpreting this `errorLabels` property manually.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 1.6.0 | The `MongoDB\Driver\Exception\RuntimeException::hasErrorLabel()` method and MongoDB\Driver\Exception\RuntimeException::errorLabels property have been added. |
