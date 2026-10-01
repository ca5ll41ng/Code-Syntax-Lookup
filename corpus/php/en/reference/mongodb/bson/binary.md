---
id: "en-php-guide-class-mongodb-bson-binary"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-binary"
title: "The MongoDB\\BSON\\Binary class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-binary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\Binary class

MongoDB\BSON\Binary

   Introduction  BSON type for binary data (i.e. array of bytes). Binary values also have a subtype, which is used to indicate what kind of data is in the byte array. Subtypes from zero to 127 are predefined or reserved. Subtypes from 128-255 are user-defined.      Class Synopsis   `MongoDB\BSON\Binary`   `final`  `MongoDB\BSON\Binary`   MongoDB\BSON\BinaryInterface   MongoDB\BSON\Type   JsonSerializable   Stringable      `const` `int` `MongoDB\BSON\Binary::TYPE_GENERIC` 0   `const` `int` `MongoDB\BSON\Binary::TYPE_FUNCTION` 1   `const` `int` `MongoDB\BSON\Binary::TYPE_OLD_BINARY` 2   `const` `int` `MongoDB\BSON\Binary::TYPE_OLD_UUID` 3   `const` `int` `MongoDB\BSON\Binary::TYPE_UUID` 4   `const` `int` `MongoDB\BSON\Binary::TYPE_MD5` 5   `const` `int` `MongoDB\BSON\Binary::TYPE_ENCRYPTED` 6   `const` `int` `MongoDB\BSON\Binary::TYPE_COLUMN` 7   `const` `int` `MongoDB\BSON\Binary::TYPE_SENSITIVE` 8   `const` `int` `MongoDB\BSON\Binary::TYPE_VECTOR` 9   `const` `int` `MongoDB\BSON\Binary::TYPE_USER_DEFINED` 128         Predefined Constants 
- **`MongoDB\BSON\Binary::TYPE_GENERIC`** — Generic binary data.
- **`MongoDB\BSON\Binary::TYPE_FUNCTION`** — Function.
- **`MongoDB\BSON\Binary::TYPE_OLD_BINARY`** — Generic binary data (deprecated in favor of `MongoDB\BSON\Binary::TYPE_GENERIC`).
- **`MongoDB\BSON\Binary::TYPE_OLD_UUID`** — Universally unique identifier (deprecated in favor of `MongoDB\BSON\Binary::TYPE_UUID`). When using this type, the Binary's data should be 16 bytes in length. — Historically, other drivers encoded values with this type based on their language conventions (e.g. varying endianness), which makes it non-portable. The PHP extension applies no special handling for encoding or decoding data with this type.
- **`MongoDB\BSON\Binary::TYPE_UUID`** — Universally unique identifier. When using this type, the Binary's data should be 16 bytes in length and encoded according to [RFC 4122](4122).
- **`MongoDB\BSON\Binary::TYPE_MD5`** — MD5 hash. When using this type, the Binary's data should be 16 bytes in length.
- **`MongoDB\BSON\Binary::TYPE_ENCRYPTED`** — Encrypted value. This subtype is used for client-side encryption.
- **`MongoDB\BSON\Binary::TYPE_COLUMN`** — Column data. This subtype is used for time-series collections.
- **`MongoDB\BSON\Binary::TYPE_SENSITIVE`** — Sensitive data. This subtype is used for sensitive data that should be excluded from server-side logging when possible.
- **`MongoDB\BSON\Binary::TYPE_VECTOR`** — Vector data. This subtype is used to efficiently store vector data for use with MongoDB's vector search.
- **`MongoDB\BSON\Binary::TYPE_USER_DEFINED`** — User-defined type. While types between 0 and 127 are predefined or reserved, types between 128 and 255 are user-defined and may be used for anything.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.2.0 | Added `MongoDB\BSON\Binary::TYPE_VECTOR`, as well as the `MongoDB\BSON\Binary::fromVector()`, `MongoDB\BSON\Binary::getVectorType()`, and `MongoDB\BSON\Binary::toArray()` functions. |
| PECL mongodb 2.0.0 | This class no longer implements the Serializable interface. |
| PECL mongodb 1.17.0 | Added `MongoDB\BSON\Binary::TYPE_SENSITIVE`. |
| PECL mongodb 1.12.0 | Implements Stringable for PHP 8.0+.    Added `MongoDB\BSON\Binary::TYPE_COLUMN`. |
| PECL mongodb 1.7.0 | Added `MongoDB\BSON\Binary::TYPE_ENCRYPTED`. |
| PECL mongodb 1.3.0 | Implements MongoDB\BSON\BinaryInterface. |
| PECL mongodb 1.2.0 | Implements Serializable and JsonSerializable. |
