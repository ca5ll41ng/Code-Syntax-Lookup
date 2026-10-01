---
id: "en-php-function-mongodb-bson-persistable-bsonserialize"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Persistable::bsonSerialize"
title: "Provides an array or document to serialize as BSON"
signature: "abstract public array|stdClass|MongoDB\\BSON\\Document MongoDB\\BSON\\Persistable::bsonSerialize()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-persistable.bsonserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Provides an array or document to serialize as BSON

## Description

```php
abstract public array|stdClass|MongoDB\BSON\Document MongoDB\BSON\Persistable::bsonSerialize()
```

Called during serialization of the object to BSON. The method must return an `array`, `stdClass`, or `MongoDB\BSON\Document`.

The return value will always be serialized as a BSON document. The serialized document will include a field containing the class name of the object. For this reason, it is not possible to return a `MongoDB\BSON\PackedArray` instance in this method.

Users are encouraged to include an _id property (e.g. a `MongoDB\BSON\ObjectId` initialized in the constructor) when returning data for a BSON root document. In the absence of an _id property, the extension or server will generate a `MongoDB\BSON\ObjectId` for insert or upsert operations, respectively.

## Parameters

This function has no parameters.

## Return Values

An `array`, `stdClass`, or `MongoDB\BSON\Document` to be serialized as a BSON document.

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | Return types previously declared as tentative are now enforced. |
| PECL mongodb 1.17.0 | This method may now also return `MongoDB\BSON\Document` instances in addition to `array` and `stdClass`. |

## See Also

 `MongoDB\BSON\Serializable::bsonSerialize()` `MongoDB\BSON\Unserializable::bsonUnserialize()` MongoDB\BSON\Persistable `mongodb.persistence`
