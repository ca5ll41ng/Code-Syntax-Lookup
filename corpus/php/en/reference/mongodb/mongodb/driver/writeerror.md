---
id: "en-php-guide-class-mongodb-driver-writeerror"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-writeerror"
title: "The MongoDB\\Driver\\WriteError class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-writeerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\WriteError class

MongoDB\Driver\WriteError

   Introduction  The `MongoDB\Driver\WriteError` class encapsulates information about a write error and may be returned as an array element from `MongoDB\Driver\WriteResult::getWriteErrors()`.      Class Synopsis   `MongoDB\Driver\WriteError`   `final`  `MongoDB\Driver\WriteError`      `public` `readonly` `string` `message`   `public` `readonly` `int` `code`   `public` `readonly` `int` `index`   `public` `readonly` `object|null` `info`         Properties 
- **`message`** — The error message.
- **`code`** — The error code.
- **`index`** — The index of the write operation within the `MongoDB\Driver\BulkWrite` that caused the error.
- **`info`** — Additional information for the error, or `null` if not available.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
