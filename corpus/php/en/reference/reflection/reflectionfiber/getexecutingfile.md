---
id: "en-php-function-reflectionfiber-getexecutingfile"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFiber::getExecutingFile"
title: "Get the file name of the current execution point"
signature: "public string|null ReflectionFiber::getExecutingFile()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfiber.getexecutingfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the file name of the current execution point

## Description

```php
public string|null ReflectionFiber::getExecutingFile()
```

Returns the full path and file name of the current execution point in the reflected `Fiber`. If the fiber has not been started or has terminated, an `Error` is thrown.

## Parameters

This function has no parameters.

## Return Values

The full path and file name of the reflected fiber. If the reflected fiber is used outside a user-defined function, `null` is returned.
