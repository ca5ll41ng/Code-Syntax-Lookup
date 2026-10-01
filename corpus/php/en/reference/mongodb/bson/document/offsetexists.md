---
id: "en-php-function-mongodb-bson-document-offsetexists"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Document::offsetExists"
title: "Returns whether a key is present in the document"
signature: "final public bool MongoDB\\BSON\\Document::offsetExists(mixed $key)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-document.offsetexists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether a key is present in the document

## Description

```php
final public bool MongoDB\BSON\Document::offsetExists(mixed $key)
```

## Parameters

- **`$key`** — The key to look for in the document.

## Return Values

Returns `true` if the key is present in the document and `false` otherwise.

## See Also

`ArrayAccess::offsetExists()` `MongoDB\BSON\Document::has()`
