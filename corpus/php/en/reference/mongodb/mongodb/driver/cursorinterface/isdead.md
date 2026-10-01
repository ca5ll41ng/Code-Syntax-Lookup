---
id: "en-php-function-mongodb-driver-cursorinterface-isdead"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\CursorInterface::isDead"
title: "Checks if the cursor may have additional results"
signature: "abstract public bool MongoDB\\Driver\\CursorInterface::isDead()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursorinterface.isdead.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if the cursor may have additional results

## Description

```php
abstract public bool MongoDB\Driver\CursorInterface::isDead()
```

Checks whether the cursor may have additional results available to read. A cursor is initially "alive" but may become "dead" for any of the following reasons: Advancing a non-tailable cursor did not return a document The cursor encountered an error The cursor read its last batch to completion The cursor reached its configured limit This is primarily useful with tailable cursors.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if additional results are not available, and `false` otherwise.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Cursor::isDead()`
