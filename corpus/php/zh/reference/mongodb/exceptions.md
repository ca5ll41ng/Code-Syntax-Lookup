---
id: "zh-php-guide-mongodb-exceptions"
language: "php"
lang: "zh"
category: "guide"
name: "mongodb.exceptions"
title: "Exception 类"
module: "mongodb"
source_url: "https://www.php.net/manual/zh/mongodb.exceptions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Exception 类

MongoDB\Driver\Exception

                 

 Class Tree MongoDB Exception Class Tree  The class hierarchy for MongoDB exceptions is modeled after that of the SPL Exceptions. Base classes extend their SPL counterpart and all exception classes in the extension implement the `MongoDB\Driver\Exception\Exception` interface.   
- `MongoDB\Driver\Exception\LogicException` (extends `LogicException`)
- `MongoDB\Driver\Exception\InvalidArgumentException` (extends `InvalidArgumentException`)
- `MongoDB\Driver\Exception\UnexpectedValueException` (extends `UnexpectedValueException`)
- `MongoDB\Driver\Exception\RuntimeException` (extends `RuntimeException`) - `MongoDB\Driver\Exception\ConnectionException` - `MongoDB\Driver\Exception\AuthenticationException` - `MongoDB\Driver\Exception\ConnectionTimeoutException` - `MongoDB\Driver\Exception\SSLConnectionException` (deprecated) - `MongoDB\Driver\Exception\EncryptionException` - `MongoDB\Driver\Exception\ServerException` - `MongoDB\Driver\Exception\BulkWriteCommandException` - `MongoDB\Driver\Exception\CommandException` - `MongoDB\Driver\Exception\ExecutionTimeoutException` - `MongoDB\Driver\Exception\WriteException` (deprecated) - `MongoDB\Driver\Exception\BulkWriteException`
