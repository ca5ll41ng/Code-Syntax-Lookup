---
id: "en-php-guide-class-mongodb-bson-undefined"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-undefined"
title: "The MongoDB\\BSON\\Undefined class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-undefined.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\Undefined class

MongoDB\BSON\Undefined

   Introduction  BSON type for the "Undefined" type. This BSON type is deprecated, and this class can not be instantiated. It will be created from a BSON undefined type while converting BSON to PHP, and can also be converted back into BSON while storing documents in the database.      Class Synopsis   `MongoDB\BSON\Undefined`   `final`  `MongoDB\BSON\Undefined`   MongoDB\BSON\Type   JsonSerializable   Stringable          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This class no longer implements the Serializable interface. |
| PECL mongodb 1.12.0 | Implements Stringable for PHP 8.0+. |
