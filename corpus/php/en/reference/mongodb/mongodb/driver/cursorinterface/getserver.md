---
id: "en-php-function-mongodb-driver-cursorinterface-getserver"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\CursorInterface::getServer"
title: "Returns the server associated with this cursor"
signature: "abstract public MongoDB\\Driver\\Server MongoDB\\Driver\\CursorInterface::getServer()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursorinterface.getserver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the server associated with this cursor

## Description

```php
abstract public MongoDB\Driver\Server MongoDB\Driver\CursorInterface::getServer()
```

Returns the `MongoDB\Driver\Server` associated with this cursor. This is the server that executed the `MongoDB\Driver\Query` or `MongoDB\Driver\Command`.

## Parameters

This function has no parameters.

## Return Values

Returns the `MongoDB\Driver\Server` associated with this cursor.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Cursor::getServer()` `MongoDB\Driver\Server`
