---
id: "en-php-function-reflectionfiber-getcallable"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFiber::getCallable"
title: "Gets the callable used to create the Fiber"
signature: "public callable ReflectionFiber::getCallable()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfiber.getcallable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the callable used to create the Fiber

## Description

```php
public callable ReflectionFiber::getCallable()
```

Returns the callable used to construct the `Fiber`. If the fiber has terminated, an `Error` is thrown.

## Parameters

This function has no parameters.

## Return Values

The callable used to create the `Fiber`.
