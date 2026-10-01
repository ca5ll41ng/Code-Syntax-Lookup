---
id: "en-php-function-mongodb-driver-cursorinterface-settypemap"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\CursorInterface::setTypeMap"
title: "Sets a type map to use for BSON unserialization"
signature: "abstract public void MongoDB\\Driver\\CursorInterface::setTypeMap(array $typemap)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursorinterface.settypemap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets a type map to use for BSON unserialization

## Description

```php
abstract public void MongoDB\Driver\CursorInterface::setTypeMap(array $typemap)
```

Sets the type map configuration to use when unserializing the BSON results into PHP values.

## Parameters

- **`$typeMap` (`array`)** — Type map configuration.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Cursor::setTypeMap()` `mongodb.persistence`
