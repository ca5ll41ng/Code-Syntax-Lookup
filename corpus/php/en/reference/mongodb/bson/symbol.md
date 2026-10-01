---
id: "en-php-guide-class-mongodb-bson-symbol"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-symbol"
title: "The MongoDB\\BSON\\Symbol class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-symbol.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\Symbol class

MongoDB\BSON\Symbol

   Introduction  BSON type for the "Symbol" type. This BSON type is deprecated, and this class can not be instantiated. It will be created from a BSON symbol type while converting BSON to PHP, and can also be converted back into BSON while storing documents in the database.      Class Synopsis   `MongoDB\BSON\Symbol`   `final`  `MongoDB\BSON\Symbol`   MongoDB\BSON\Type   JsonSerializable   Stringable          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This class no longer implements the Serializable interface. |
| PECL mongodb 1.12.0 | Implements Stringable for PHP 8.0+. |
