---
id: "en-php-guide-class-mongodb-bson-int64"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-int64"
title: "The MongoDB\\BSON\\Int64 class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-int64.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\Int64 class

MongoDB\BSON\Int64

   Introduction  BSON type for a 64-bit integer. When decoding BSON to PHP data, this class is used when a 64-bit integer cannot be represented as a PHP integer on 32-bit platforms. These objects support overloaded arithmetic, bitwise, and comparison operators.    When working with raw BSON data through the `MongoDB\BSON\Document`, `MongoDB\BSON\PackedArray`, and `MongoDB\BSON\Iterator` classes, any 64-bit integer will be returned as an instance of this class, regardless of platform and whether the value can be represented as a PHP integer. This ensures that values can be roundtripped without changing the type.    During BSON encoding, objects of this class will convert back to a 64-bit integer type, even when the value would fit in a 32-bit integer. This allows explicitly storing values as 64-bit integers in BSON.      Class Synopsis   `MongoDB\BSON\Int64`   `final`  `MongoDB\BSON\Int64`   MongoDB\BSON\Type   JsonSerializable   Stringable          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This class no longer implements the Serializable interface. |
| PECL mongodb 1.16.0 | The class can now be instantiated on all platforms. Added support for overloaded arithmetic, bitwise, and comparison operators. |
| PECL mongodb 1.12.0 | Implements Stringable for PHP 8.0+. |
