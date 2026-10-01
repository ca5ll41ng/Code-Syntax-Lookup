---
id: "en-php-function-reflectionclassconstant-construct"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClassConstant::__construct"
title: "Constructs a ReflectionClassConstant"
signature: "public ReflectionClassConstant::__construct(object|string $class, string $constant)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclassconstant.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a ReflectionClassConstant

## Description

```php
public ReflectionClassConstant::__construct(object|string $class, string $constant)
```

Constructs a new `ReflectionClassConstant` object.

## Parameters

- **`$class`** — Either a `string` containing the name of the class to reflect, or an `object`.
- **`$constant`** — The name of the class constant.

## Errors/Exceptions

Throws an `Exception` in case the given class constant does not exist.

## See Also

Constructors
