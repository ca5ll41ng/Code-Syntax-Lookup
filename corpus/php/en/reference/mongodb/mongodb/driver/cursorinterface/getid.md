---
id: "en-php-function-mongodb-driver-cursorinterface-getid"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\CursorInterface::getId"
title: "Returns the ID for this cursor"
signature: "abstract public MongoDB\\BSON\\Int64 MongoDB\\Driver\\CursorInterface::getId()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursorinterface.getid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the ID for this cursor

## Description

```php
abstract public MongoDB\BSON\Int64 MongoDB\Driver\CursorInterface::getId()
```

Returns the ID for this cursor, which uniquely identifies the cursor on the server.

## Parameters

This function has no parameters.

## Return Values

Returns the ID for this cursor.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.20.0 | Added `MongoDB\BSON\Int64` to the tentative return type for this method. `MongoDB\Driver\CursorId` will be removed from the return type in version 2.0. |

## See Also

 `MongoDB\Driver\Cursor::getId()` `MongoDB\Driver\CursorId` `MongoDB\BSON\Int64`
