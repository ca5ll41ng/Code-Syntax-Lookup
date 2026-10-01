---
id: "en-php-function-reflectionclassconstant-getname"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClassConstant::getName"
title: "Get name of the constant"
signature: "public string ReflectionClassConstant::getName()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclassconstant.getname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get name of the constant

## Description

```php
public string ReflectionClassConstant::getName()
```

## Parameters

This function has no parameters.

## Return Values

Returns the constant's name.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | Throws an `Error` in case the name property has not been initialized. Previously, the method returned `false` on failure. |
