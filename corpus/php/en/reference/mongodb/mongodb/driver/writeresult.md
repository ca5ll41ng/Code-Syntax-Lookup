---
id: "en-php-guide-class-mongodb-driver-writeresult"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-writeresult"
title: "The MongoDB\\Driver\\WriteResult class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-writeresult.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\WriteResult class

MongoDB\Driver\WriteResult

   Introduction  The `MongoDB\Driver\WriteResult` class encapsulates information about an executed `MongoDB\Driver\BulkWrite` and may be returned by `MongoDB\Driver\Manager::executeBulkWrite()`.      Class Synopsis   `MongoDB\Driver\WriteResult`   `final`  `MongoDB\Driver\WriteResult`      `public` `readonly` `int|null` `insertedCount`   `public` `readonly` `int|null` `matchedCount`   `public` `readonly` `int|null` `modifiedCount`   `public` `readonly` `int|null` `deletedCount`   `public` `readonly` `int|null` `upsertedCount`   `public` `readonly` `MongoDB\Driver\Server` `server`   `public` `readonly` `array` `upsertedIds`   `public` `readonly` `array` `writeErrors`   `public` `readonly` `MongoDB\Driver\WriteConcernError|null` `writeConcernError`   `public` `readonly` `MongoDB\Driver\WriteConcern|null` `writeConcern`   `public` `readonly` `array` `errorReplies`         Properties 
- **`insertedCount`** — The number of documents inserted (excluding upserts), or `null` if the write concern did not request acknowledgement.
- **`matchedCount`** — The number of documents matched by update and replace operations, or `null` if the write concern did not request acknowledgement.
- **`modifiedCount`** — The number of documents modified by update and replace operations, or `null` if the write concern did not request acknowledgement or if the server did not report this information.
- **`deletedCount`** — The number of documents deleted, or `null` if the write concern did not request acknowledgement.
- **`upsertedCount`** — The number of documents upserted, or `null` if the write concern did not request acknowledgement.
- **`server`** — The server that executed the bulk write.
- **`upsertedIds`** — An array of `_id` values for upserted documents. Array keys will correspond to the index of the write operation from `MongoDB\Driver\BulkWrite`.
- **`writeErrors`** — An array of `MongoDB\Driver\WriteError`s for any write errors that occurred during execution.
- **`writeConcernError`** — The `MongoDB\Driver\WriteConcernError` that occurred, or `null` if no write concern error occurred.
- **`writeConcern`** — The `MongoDB\Driver\WriteConcern` used for the bulk write, or `null` if not available.
- **`errorReplies`** — An array of error reply documents from the server.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
