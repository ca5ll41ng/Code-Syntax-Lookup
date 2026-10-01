---
id: "en-php-guide-class-mongodb-driver-writeconcernerror"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-writeconcernerror"
title: "The MongoDB\\Driver\\WriteConcernError class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-writeconcernerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\WriteConcernError class

MongoDB\Driver\WriteConcernError

   Introduction  The `MongoDB\Driver\WriteConcernError` class encapsulates information about a write concern error and may be returned by `MongoDB\Driver\WriteResult::getWriteConcernError()`.      Class Synopsis   `MongoDB\Driver\WriteConcernError`   `final`  `MongoDB\Driver\WriteConcernError`      `public` `readonly` `string` `message`   `public` `readonly` `int` `code`   `public` `readonly` `object|null` `info`         Properties 
- **`message`** — The error message.
- **`code`** — The error code.
- **`info`** — Additional information for the error, or `null` if not available.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
