---
id: "en-php-function-mongodb-bson-document-frombson"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Document::fromBSON"
title: "Construct a new document instance from a BSON string"
signature: "final static public MongoDB\\BSON\\Document MongoDB\\BSON\\Document::fromBSON(string $bson)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-document.frombson.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new document instance from a BSON string

## Description

```php
final static public MongoDB\BSON\Document MongoDB\BSON\Document::fromBSON(string $bson)
```

## Parameters

- **`$bson` (`string`)** — A string containing a document in BSON format.

## Return Values

Returns a new `MongoDB\BSON\Document` instance.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\UnexpectedValueException` if `$bson` is an invalid BSON string or contains more than a single document. 

## See Also

 `MongoDB\BSON\Document::fromPHP()` `MongoDB\BSON\Document::fromJSON()` [BSON Types]()
