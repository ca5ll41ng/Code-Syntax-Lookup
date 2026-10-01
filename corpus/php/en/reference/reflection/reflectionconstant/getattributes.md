---
id: "en-php-function-reflectionconstant-getattributes"
language: "php"
lang: "en"
category: "function"
name: "ReflectionConstant::getAttributes"
title: "Gets Attributes"
signature: "public array ReflectionConstant::getAttributes(string|null $name = null, int $flags = 0)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionconstant.getattributes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets Attributes

## Description

```php
public array ReflectionConstant::getAttributes(string|null $name = null, int $flags = 0)
```

Returns all attributes declared on this global constant as an array of `ReflectionAttribute`.

## Parameters

- **`$name`** — Filter the results to include only `ReflectionAttribute` instances for attributes matching this class name.
- **`$flags`** — Flags for determining how to filter the results, if `$name` is provided. — Default is `0` which will only return results for attributes that are of the class `$name`. — The only other option available, is to use `ReflectionAttribute::IS_INSTANCEOF`, which will instead use `instanceof` for filtering.

## Return Values

Array of attributes, as `ReflectionAttribute` objects.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | This method was introduced. |

## Examples

**Basic usage**

```php


<?php
#[Attribute]
class Fruit {
}

#[Attribute]
class Red {
}

#[Fruit]
#[Red]
const APPLE = 'apple';

$constant = new ReflectionConstant('APPLE');
$attributes = $constant->getAttributes();
print_r(array_map(fn($attribute) => $attribute->getName(), $attributes));
?>

    
```

The above example will output:

```text


Array
(
    [0] => Fruit
    [1] => Red
)

    
```

## See Also

 `ReflectionClass::getAttributes()` `ReflectionClassConstant::getAttributes()` `ReflectionFunctionAbstract::getAttributes()` `ReflectionProperty::getAttributes()`
