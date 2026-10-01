---
id: "en-php-function-reflectionparameter-isarray"
language: "php"
lang: "en"
category: "function"
name: "ReflectionParameter::isArray"
title: "Checks if parameter expects an array"
signature: "#[\\Deprecated(since: '8.0', message: \"use ReflectionParameter::getType() instead\")] public bool ReflectionParameter::isArray()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionparameter.isarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if parameter expects an array

## Description

```php
#[\Deprecated(since: '8.0', message: "use ReflectionParameter::getType() instead")] public bool ReflectionParameter::isArray()
```

Checks if the parameter expects an array.

## Parameters

This function has no parameters.

## Return Values

`true` if an `array` is expected, `false` otherwise.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function has been deprecated in favor of `ReflectionParameter::getType()` instead. |

## Examples

**PHP 8.0.0 equivalent**

As of PHP 8.0.0, the following code will report if a type declares arrays, including as part of a union.

```php


<?php
function declaresArray(ReflectionParameter $reflectionParameter): bool
{
    $reflectionType = $reflectionParameter->getType();

    if (!$reflectionType) return false;

    $types = $reflectionType instanceof ReflectionUnionType
        ? $reflectionType->getTypes()
        : [$reflectionType];

   return in_array('array', array_map(fn(ReflectionNamedType $t) => $t->getName(), $types));
}
?>

    
```

## See Also

`ReflectionParameter::isOptional()`
