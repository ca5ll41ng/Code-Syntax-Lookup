---
id: "en-php-function-mongodb-driver-cursor-rewind"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Cursor::rewind"
title: "Rewind the cursor to the first result"
signature: "public void MongoDB\\Driver\\Cursor::rewind()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursor.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rewind the cursor to the first result

## Description

```php
public void MongoDB\Driver\Cursor::rewind()
```

If the cursor has advanced beyond its first position, it can no longer be rewound.

## Parameters

This function has no parameters.

## Return Values

`null`.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\LogicException` if this method is called after the cursor has advanced beyond its first position. 

## See Also

 `Iterator::rewind()`
