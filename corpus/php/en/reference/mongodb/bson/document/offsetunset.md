---
id: "en-php-function-mongodb-bson-document-offsetunset"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Document::offsetUnset"
title: "Implementation of `ArrayAccess`"
signature: "final public void MongoDB\\BSON\\Document::offsetUnset(mixed $key)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-document.offsetunset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Implementation of `ArrayAccess`

## Description

```php
final public void MongoDB\BSON\Document::offsetUnset(mixed $key)
```

Unsets the value at the specified index.

## Parameters

- **`$key`** — The index being unset.

## Return Values

No value is returned.

## Errors/Exceptions

 Always throws a `MongoDB\Driver\Exception\LogicException`.
