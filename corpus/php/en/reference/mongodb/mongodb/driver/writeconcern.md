---
id: "en-php-guide-class-mongodb-driver-writeconcern"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-writeconcern"
title: "The MongoDB\\Driver\\WriteConcern class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-writeconcern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\WriteConcern class

MongoDB\Driver\WriteConcern

   Introduction  `MongoDB\Driver\WriteConcern` describes the level of acknowledgement requested from MongoDB for write operations to a standalone `mongod` or to replica sets or to sharded clusters. In sharded clusters, `mongos` instances will pass the write concern on to the shards.      Class Synopsis   `MongoDB\Driver\WriteConcern`   `final`  `MongoDB\Driver\WriteConcern`   MongoDB\BSON\Serializable   Serializable      `const` `string` `MongoDB\Driver\WriteConcern::MAJORITY` "majority"    `public` `readonly` `string|int|null` `w`   `public` `readonly` `bool|null` `j`   `public` `readonly` `int` `wtimeout`         Properties 
- **`w`** — The write concern value (integer number of nodes, the string `"majority"`, or a custom write concern tag name), or `null` if not set.
- **`j`** — Whether write operations must be committed to the journal before acknowledged, or `null` if not specified.
- **`wtimeout`** — The timeout in milliseconds to wait for write concern acknowledgement. A value of `0` means to wait indefinitely.

     Predefined Constants 
- **`MongoDB\Driver\WriteConcern::MAJORITY`** — Majority of all the members in the set; arbiters, non-voting members, passive members, hidden members and delayed members are all included in the definition of majority write concern.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
| PECL mongodb 1.7.0 | Implements Serializable. |
| PECL mongodb 1.2.0 | Implements MongoDB\BSON\Serializable. |
