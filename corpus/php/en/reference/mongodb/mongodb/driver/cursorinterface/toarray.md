---
id: "en-php-function-mongodb-driver-cursorinterface-toarray"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\CursorInterface::toArray"
title: "Returns an array containing all results for this cursor"
signature: "abstract public array MongoDB\\Driver\\CursorInterface::toArray()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursorinterface.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array containing all results for this cursor

## Description

```php
abstract public array MongoDB\Driver\CursorInterface::toArray()
```

Iterates the cursor and returns its results in an array. `MongoDB\Driver\CursorInterface::setTypeMap()` may be used to control how documents are unserialized into PHP values.

## Parameters

This function has no parameters.

## Return Values

Returns an `array` containing all results for this cursor.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Cursor::toArray()` `MongoDB\Driver\CursorInterface::setTypeMap()`
