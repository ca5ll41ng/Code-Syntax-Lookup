---
id: "en-php-function-reflectiontype-tostring"
language: "php"
lang: "en"
category: "function"
name: "ReflectionType::__toString"
title: "To string"
signature: "public string ReflectionType::__toString()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectiontype.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# To string

## Description

```php
public string ReflectionType::__toString()
```

Gets the parameter type name.

## Parameters

This function has no parameters.

## Return Values

Returns the type of the parameter.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `ReflectionType::__toString()` has been undeprecated. |
| 7.1.0 | `ReflectionType::__toString()` has been deprecated. |

## Examples

**`ReflectionType::__toString()` example**

```php


<?php
function someFunction(string $param) {}

$reflectionFunc = new ReflectionFunction('someFunction');
$reflectionParam = $reflectionFunc->getParameters()[0];

echo $reflectionParam->getType();

    
```

The above example will output something similar to:

```text


string

    
```

## See Also

`ReflectionNamedType::getName()` `ReflectionNamedType::isBuiltin()` `ReflectionType::allowsNull()` `ReflectionUnionType::getTypes()` `ReflectionParameter::getType()`
