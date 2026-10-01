---
id: "en-php-function-mongodb-bson-document-has"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Document::has"
title: "Returns whether a key is present in the document"
signature: "final public bool MongoDB\\BSON\\Document::has(string $key)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-document.has.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether a key is present in the document

## Description

```php
final public bool MongoDB\BSON\Document::has(string $key)
```

## Parameters

- **`$key` (`string`)** — The key to look for in the document.

## Return Values

Returns `true` if the key is present in the document and `false` otherwise.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\BSON\Document::get()` [BSON Types]()
