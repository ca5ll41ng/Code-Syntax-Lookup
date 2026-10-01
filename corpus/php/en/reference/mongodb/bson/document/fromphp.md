---
id: "en-php-function-mongodb-bson-document-fromphp"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Document::fromPHP"
title: "Construct a new document instance from PHP data"
signature: "final static public MongoDB\\BSON\\Document MongoDB\\BSON\\Document::fromPHP(object|array $value)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-document.fromphp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new document instance from PHP data

## Description

```php
final static public MongoDB\BSON\Document MongoDB\BSON\Document::fromPHP(object|array $value)
```

## Parameters

- **`$value` (`object|array`)** — A PHP object or array containing the document. When passing an array with numeric keys, the numeric values are converted to strings and used as document keys.

## Return Values

Returns a new `MongoDB\BSON\Document` instance.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\BSON\Document::fromBSON()` `MongoDB\BSON\Document::fromJSON()` [BSON Types]()
