---
id: "en-php-function-mongodb-bson-dbpointer-jsonserialize"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\DBPointer::jsonSerialize"
title: "Returns a representation that can be converted to JSON"
signature: "final public mixed MongoDB\\BSON\\DBPointer::jsonSerialize()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-dbpointer.jsonserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a representation that can be converted to JSON

## Description

```php
final public mixed MongoDB\BSON\DBPointer::jsonSerialize()
```

## Parameters

This function has no parameters.

## Return Values

Returns data which can be serialized by `json_encode()` to produce an extended JSON representation of the `MongoDB\BSON\DBPointer`.

> The output is consistent with the `MongoDB\BSON\toJSON()` function, which uses the driver-specific legacy extended JSON format. This does not necessarily match the [relaxed](#relaxed-extended-json-example) or [canonical](#canonical-extended-json-example) extended JSON representations used by `MongoDB\BSON\toRelaxedExtendedJSON()` and `MongoDB\BSON\toCanonicalExtendedJSON()`, respectively.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `JsonSerializable::jsonSerialize()` `json_encode()` `MongoDB\BSON\toCanonicalExtendedJSON()` `MongoDB\BSON\toRelaxedExtendedJSON()` [MongoDB Extended JSON]()
