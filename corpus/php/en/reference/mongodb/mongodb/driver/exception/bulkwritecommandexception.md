---
id: "en-php-guide-class-mongodb-driver-exception-bulkwritecommandexception"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-exception-bulkwritecommandexception"
title: "The MongoDB\\Driver\\Exception\\BulkWriteCommandException class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-exception-bulkwritecommandexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Exception\BulkWriteCommandException class

MongoDB\Driver\Exception\BulkWriteCommandException

   Introduction  Exception thrown due to failed execution of a `MongoDB\Driver\BulkWriteCommand`. The methods of this class provide more details of the error that occurred, including the error reply and partial results from the bulk write.      Class Synopsis   `MongoDB\Driver\Exception\BulkWriteCommandException`    `MongoDB\Driver\Exception\BulkWriteCommandException`   `extends` `MongoDB\Driver\Exception\ServerException`   MongoDB\Driver\Exception\Exception      `private` `MongoDB\BSON\Document|null` `errorReply`   `private` `MongoDB\Driver\BulkWriteCommandResult|null` `partialResult`   `private` `array` `writeConcernErrors`   `private` `array` `writeErrors`                   Properties 
- **`errorReply`** — Any top-level error that occurred when attempting to communicate with the server or execute the bulk write. This value may be `null` if the exception was thrown due to errors occurring on individual writes.
- **`partialResult`** — A `MongoDB\Driver\BulkWriteCommandResult` reporting the result of any successful operations that were performed before the error was encountered. This value may be `null` if it cannot be determined that at least one write was successfully performed (and acknowledged).
- **`writeConcernErrors`** — An array of any `MongoDB\Driver\WriteConcernError`s that occurred while executing the bulk write. This list may have multiple items if more than one server command was required to execute the bulk write.
- **`writeErrors`** — An array of any `MongoDB\Driver\WriteError`s that occurred during the execution of individual write operations. Array keys will correspond to the index of the write operation from `MongoDB\Driver\BulkWriteCommand`. This map will contain at most one entry if the bulk write was ordered.
