---
id: "en-php-function-mongodb-driver-writeerror-getinfo"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteError::getInfo"
title: "Returns metadata document for the WriteError"
signature: "final public object|null MongoDB\\Driver\\WriteError::getInfo()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeerror.getinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns metadata document for the WriteError

## Description

```php
final public object|null MongoDB\Driver\WriteError::getInfo()
```

## Parameters

This function has no parameters.

## Return Values

Returns the metadata document for the WriteError, or `null` if no metadata is available.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
