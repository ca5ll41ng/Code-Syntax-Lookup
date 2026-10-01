---
id: "en-php-guide-class-mongodb-bson-packedarray"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-packedarray"
title: "The MongoDB\\BSON\\PackedArray class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-packedarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\PackedArray class

MongoDB\BSON\PackedArray

   Introduction  Represents a BSON array. This class is used when reading data as raw BSON and cannot be modified.      Class Synopsis   `MongoDB\BSON\PackedArray`   `final`  `MongoDB\BSON\PackedArray`   MongoDB\BSON\Type   ArrayAccess   IteratorAggregate          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This class no longer implements the Serializable interface. |
| PECL mongodb 1.17.0 | Implements MongoDB\BSON\Type. |
| PECL mongodb 1.17.0 | `MongoDB\BSON\PackedArray` cannot be serialized in contexts where a BSON document is expected. In earlier versions, the BSON array would have been converted to a document. |
