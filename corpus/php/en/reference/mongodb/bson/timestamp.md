---
id: "en-php-guide-class-mongodb-bson-timestamp"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-timestamp"
title: "The MongoDB\\BSON\\Timestamp class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-timestamp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\Timestamp class

MongoDB\BSON\Timestamp

   Introduction  Represents a [BSON timestamp](#timestamps), The value consists of a 4-byte timestamp (i.e. seconds since the epoch) and a 4-byte increment.   
> This is an internal MongoDB type used for replication and sharding. It is not intended for general date storage (`MongoDB\BSON\UTCDateTime` should be used instead).

    Class Synopsis   `MongoDB\BSON\Timestamp`   `final`  `MongoDB\BSON\Timestamp`   MongoDB\BSON\TimestampInterface   MongoDB\BSON\Type   JsonSerializable   Stringable          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This class no longer implements the Serializable interface. |
| PECL mongodb 1.12.0 | Implements Stringable for PHP 8.0+. |
| PECL mongodb 1.3.0 | Implements MongoDB\BSON\TimestampInterface. |
| PECL mongodb 1.2.0 | Implements Serializable and JsonSerializable. |
