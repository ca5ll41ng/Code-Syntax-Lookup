---
id: "en-php-function-mongodb-driver-session-isdirty"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::isDirty"
title: "Returns whether the session has been marked as dirty"
signature: "final public bool MongoDB\\Driver\\Session::isDirty()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.isdirty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the session has been marked as dirty

## Description

```php
final public bool MongoDB\Driver\Session::isDirty()
```

Returns whether the session has been marked as dirty (i.e. it has been used with a command that encountered a network error).

## Parameters

This function has no parameters.

## Return Values

Returns whether the session has been marked as dirty.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
