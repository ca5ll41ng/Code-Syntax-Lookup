---
id: "en-php-function-mongodb-bson-document-tophp"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Document::toPHP"
title: "Returns the PHP representation of the BSON document"
signature: "final public array|object MongoDB\\BSON\\Document::toPHP(array|null $typeMap = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-document.tophp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the PHP representation of the BSON document

## Description

```php
final public array|object MongoDB\BSON\Document::toPHP(array|null $typeMap = null)
```

Unserializes the BSON document to its PHP representation. The `$typeMap` parameter may be used to control the PHP types used for converting BSON arrays and documents (both root and embedded).

> BSON documents can technically contain duplicate keys because documents are stored as a list of key-value pairs; however, applications should refrain from generating documents with duplicate keys as server and driver behavior may be undefined. Since PHP objects and arrays cannot have duplicate keys, data could also be lost when decoding a BSON document with duplicate keys.

## Parameters

- **`$typeMap` (`array`)** — Type map configuration.

## Return Values

The decoded PHP value.

> When encountering a value encoded as 64-bit integer in the BSON document, the return value of this method will be a `MongoDB\BSON\Int64` instance.

## Errors/Exceptions

  Throws `MongoDB\Driver\Exception\InvalidArgumentException` if a class in the type map cannot be instantiated or does not implement MongoDB\BSON\Unserializable.  

## See Also

 `MongoDB\BSON\toPHP()` [BSON Types]()
