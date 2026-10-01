---
id: "en-php-function-mongodb-bson-document-fromjson"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Document::fromJSON"
title: "Construct a new document instance from a JSON string"
signature: "final static public MongoDB\\BSON\\Document MongoDB\\BSON\\Document::fromJSON(string $json)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-document.fromjson.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new document instance from a JSON string

## Description

```php
final static public MongoDB\BSON\Document MongoDB\BSON\Document::fromJSON(string $json)
```

Converts an [extended JSON]() string to its BSON representation.

## Parameters

- **`$json` (`string`)** — JSON value to be converted.

## Return Values

Returns a new `MongoDB\BSON\Document` instance.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.  Throws `MongoDB\Driver\Exception\UnexpectedValueException` if the JSON value cannot be converted to a BSON document (e.g. due to a syntax error).  

## See Also

 `MongoDB\BSON\Document::fromPHP()` `MongoDB\BSON\Document::fromBSON()` [MongoDB Extended JSON]() [BSON Types]()
