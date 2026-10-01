---
id: "en-php-function-reflectionfiber-getexecutingline"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFiber::getExecutingLine"
title: "Get the line number of the current execution point"
signature: "public int|null ReflectionFiber::getExecutingLine()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfiber.getexecutingline.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the line number of the current execution point

## Description

```php
public int|null ReflectionFiber::getExecutingLine()
```

Returns the line number of the current execution point in the reflected `Fiber`. If the reflected fiber is used outside a user-defined function, `null` is returned. If the fiber has not been started or has terminated, an `Error` is thrown.

## Parameters

This function has no parameters.

## Return Values

The line number of the current execution point in the fiber.
