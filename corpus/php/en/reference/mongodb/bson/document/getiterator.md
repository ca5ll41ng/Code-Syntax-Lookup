---
id: "en-php-function-mongodb-bson-document-getiterator"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Document::getIterator"
title: "Returns an iterator for the BSON document"
signature: "final public MongoDB\\BSON\\Iterator MongoDB\\BSON\\Document::getIterator()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-document.getiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an iterator for the BSON document

## Description

```php
final public MongoDB\BSON\Iterator MongoDB\BSON\Document::getIterator()
```

## Parameters

This function has no parameters.

## Return Values

Returns a `MongoDB\BSON\Iterator` instance that can be used to iterate over all keys in the document.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\UnexpectedValueException` if the BSON iterator could not be initialized. 

## See Also

 [BSON Types]()
