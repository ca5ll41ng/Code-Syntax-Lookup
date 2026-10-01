---
id: "en-php-guide-class-mongodb-bson-utcdatetime"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-utcdatetime"
title: "The MongoDB\\BSON\\UTCDateTime class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-utcdatetime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\UTCDateTime class

MongoDB\BSON\UTCDateTime

   Introduction  Represents a [BSON date](#date). The value is a 64-bit integer that represents the number of milliseconds since the Unix epoch (Jan 1, 1970). Negative values represent dates before 1970.      Class Synopsis   `MongoDB\BSON\UTCDateTime`   `final`  `MongoDB\BSON\UTCDateTime`   MongoDB\BSON\UTCDateTimeInterface   MongoDB\BSON\Type   JsonSerializable   Stringable          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This class no longer implements the Serializable interface. |
| PECL mongodb 1.12.0 | Implements Stringable for PHP 8.0+. |
| PECL mongodb 1.3.0 | Implements MongoDB\BSON\UTCDateTimeInterface. |
| PECL mongodb 1.2.0 | Implements Serializable and JsonSerializable. |
