---
id: "en-php-function-reflectionparameter-iscallable"
language: "php"
lang: "en"
category: "function"
name: "ReflectionParameter::isCallable"
title: "Returns whether parameter MUST be callable"
signature: "#[\\Deprecated(since: '8.0', message: \"use ReflectionParameter::getType() instead\")] public bool ReflectionParameter::isCallable()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionparameter.iscallable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether parameter MUST be callable

## Description

```php
#[\Deprecated(since: '8.0', message: "use ReflectionParameter::getType() instead")] public bool ReflectionParameter::isCallable()
```

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the parameter is `callable`, `false` if it is not or `null` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function has been deprecated in favor of `ReflectionParameter::getType()` instead. |

## Examples

**PHP 8.0.0 equivalent**

As of PHP 8.0.0, the following code will report if a type supports callables, including as part of a union.

```php


<?php
function declaresCallable(ReflectionParameter $reflectionParameter): bool
{
    $reflectionType = $reflectionParameter->getType();

    if (!$reflectionType) return false;

    $types = $reflectionType instanceof ReflectionUnionType
        ? $reflectionType->getTypes()
        : [$reflectionType];

   return in_array('callable', array_map(fn(ReflectionNamedType $t) => $t->getName(), $types));
}
?>

   
```
