---
id: "en-php-function-mongodb-bson-int64-jsonserialize"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Int64::jsonSerialize"
title: "Returns a representation that can be converted to JSON"
signature: "final public mixed MongoDB\\BSON\\Int64::jsonSerialize()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-int64.jsonserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a representation that can be converted to JSON

## Description

```php
final public mixed MongoDB\BSON\Int64::jsonSerialize()
```

## Parameters

This function has no parameters.

## Return Values

Returns data which can be serialized by `json_encode()` to produce an extended JSON representation of the `MongoDB\BSON\Int64`.

> The output is consistent with the `MongoDB\BSON\toCanonicalExtendedJSON()` function, which uses the [canonical](#canonical-extended-json-example) extended JSON format. This differs from other BSON classes, which use the driver-specific legacy extended JSON format (`MongoDB\BSON\toJSON()`), in order to ensure that the 64-bit integer value is correctly represented on 32-bit platforms.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `JsonSerializable::jsonSerialize()` `json_encode()` `MongoDB\BSON\toCanonicalExtendedJSON()` `MongoDB\BSON\toRelaxedExtendedJSON()` [MongoDB Extended JSON]()
