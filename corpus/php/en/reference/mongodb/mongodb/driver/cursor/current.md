---
id: "en-php-function-mongodb-driver-cursor-current"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Cursor::current"
title: "Returns the current element"
signature: "public array|object|null MongoDB\\Driver\\Cursor::current()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursor.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current element

## Description

```php
public array|object|null MongoDB\Driver\Cursor::current()
```

## Parameters

This function has no parameters.

## Return Values

Returns the current result document as an array or object, depending on the cursor's type map. If iteration has not started or the current position is not valid, `null` will be returned.

## See Also

 `Iterator::current()`
