---
id: "en-php-guide-class-mongodb-bson-objectid"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-objectid"
title: "The MongoDB\\BSON\\ObjectId class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-objectid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\ObjectId class

MongoDB\BSON\ObjectId

   Introduction  BSON type for an [ObjectId](#objectid). The value consists of 12 bytes, where the first four bytes are a timestamp that reflect the ObjectId's creation. Specifically, the value consists of:   
- a 4-byte value representing the seconds since the Unix epoch,
- a 5-byte random number unique to a machine and process, and
- a 3-byte counter, starting with a random value.

  In MongoDB, each document stored in a collection requires a unique `_id` field that acts as a primary key. If an inserted document omits the `_id` field, the extension automatically generates an ObjectId for the `_id` field.    Using ObjectIds for the `_id` field provides the following additional benefits:   
- The creation time of the ObjectId may be accessed using the `MongoDB\BSON\ObjectId::getTimestamp()` method.
- Sorting on an `_id` field that stores ObjectId values is roughly equivalent to sorting by creation time.

    Class Synopsis   `MongoDB\BSON\ObjectId`   `final`  `MongoDB\BSON\ObjectId`   MongoDB\BSON\ObjectIdInterface   MongoDB\BSON\Type   JsonSerializable   Stringable          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This class no longer implements the Serializable interface. |
| PECL mongodb 1.12.0 | Implements Stringable for PHP 8.0+. |
| PECL mongodb 1.3.0 | Renamed from `MongoDB\BSON\ObjectID` to `MongoDB\BSON\ObjectId`.    Implements MongoDB\BSON\ObjectIdInterface. |
| PECL mongodb 1.2.0 | Implements Serializable and JsonSerializable. |
