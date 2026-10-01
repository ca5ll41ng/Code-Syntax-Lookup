---
id: "en-php-function-reflectionclassconstant-isdeprecated"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClassConstant::isDeprecated"
title: "Checks if deprecated"
signature: "public bool ReflectionClassConstant::isDeprecated()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclassconstant.isdeprecated.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if deprecated

## Description

```php
public bool ReflectionClassConstant::isDeprecated()
```

Checks whether the class constant is deprecated.

## Parameters

This function has no parameters.

## Return Values

`true` if it's deprecated, otherwise `false`

## Examples

**`ReflectionClassConstant::isDeprecated()` example**

```php


<?php
class Basket {
    #[\Deprecated(message: 'use Basket::APPLE instead')]
    public const APLE = 'apple';

    public const APPLE = 'apple';
}
$classConstant = new ReflectionClassConstant('Basket', 'APLE');
var_dump($classConstant->isDeprecated());
?>

   
```

The above example will output:

```text


bool(true)

   
```

## See Also

 `Deprecated` `ReflectionClassConstant::getDocComment()`
