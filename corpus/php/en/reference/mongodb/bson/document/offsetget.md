---
id: "en-php-function-mongodb-bson-document-offsetget"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Document::offsetGet"
title: "Returns the value of a key in the document"
signature: "final public mixed MongoDB\\BSON\\Document::offsetGet(mixed $key)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-document.offsetget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value of a key in the document

## Description

```php
final public mixed MongoDB\BSON\Document::offsetGet(mixed $key)
```

## Parameters

- **`$key`** — The key to retrieve from the document.

## Return Values

Returns the value associated with the given key. If the key is not present in the document, an exception is thrown.

> When encountering a value encoded as 64-bit integer in the BSON document, the return value of this method will be a `MongoDB\BSON\Int64` instance.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\RuntimeException` if the key is not present in the document. 

## See Also

`ArrayAccess::offsetGet()` `MongoDB\BSON\Document::get()`
