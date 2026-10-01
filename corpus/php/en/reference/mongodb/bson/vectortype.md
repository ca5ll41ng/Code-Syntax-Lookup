---
id: "en-php-guide-enum-mongodb-bson-vectortype"
language: "php"
lang: "en"
category: "guide"
name: "enum.mongodb-bson-vectortype"
title: "The MongoDB\\BSON\\VectorType enum"
module: "mongodb"
source_url: "https://www.php.net/manual/en/enum.mongodb-bson-vectortype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\VectorType enum

MongoDB\BSON\VectorType

  Introduction  The `MongoDB\BSON\VectorType` enum is used to specify the type of vector data stored in a `MongoDB\BSON\Binary` with subtype `MongoDB\BSON\Binary::TYPE_VECTOR`.       `MongoDB\BSON\VectorType`  Float32  Each element in the vector is a 32-bit floating point value.    Int8  Each element in the vector is an 8-bit integer value.    PackedBit  Each element in the vector is a 1-bit value. When creating vectors of this type, you may pass either `bool` or 1-bit `int` values, i.e. `0` or `1`.
