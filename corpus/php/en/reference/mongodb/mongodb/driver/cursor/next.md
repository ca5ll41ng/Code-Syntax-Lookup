---
id: "en-php-function-mongodb-driver-cursor-next"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Cursor::next"
title: "Advances the cursor to the next result"
signature: "public void MongoDB\\Driver\\Cursor::next()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursor.next.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Advances the cursor to the next result

## Description

```php
public void MongoDB\Driver\Cursor::next()
```

## Parameters

This function has no parameters.

## Return Values

Moves the current position to the next element in the cursor.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. 

## See Also

 `Iterator::next()`
