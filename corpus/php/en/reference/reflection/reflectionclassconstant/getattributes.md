---
id: "en-php-function-reflectionclassconstant-getattributes"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClassConstant::getAttributes"
title: "Gets Attributes"
signature: "public array ReflectionClassConstant::getAttributes(string|null $name = null, int $flags = 0)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclassconstant.getattributes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets Attributes

## Description

```php
public array ReflectionClassConstant::getAttributes(string|null $name = null, int $flags = 0)
```

Returns all attributes declared on this class constant as an array of `ReflectionAttribute`.

## Parameters

- **`$name`** — Filter the results to include only `ReflectionAttribute` instances for attributes matching this class name.
- **`$flags`** — Flags for determining how to filter the results, if `$name` is provided. — Default is `0` which will only return results for attributes that are of the class `$name`. — The only other option available, is to use `ReflectionAttribute::IS_INSTANCEOF`, which will instead use `instanceof` for filtering.

## Return Values

Array of attributes, as a `ReflectionAttribute` object.

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

class Basket {
    #[Fruit]
    #[Red]
    public const APPLE = 'apple';
}

$classConstant = new ReflectionClassConstant('Basket', 'APPLE');
$attributes = $classConstant->getAttributes();
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

**Filtering results by class name**

```php


<?php
#[Attribute]
class Fruit {
}

#[Attribute]
class Red {
}

class Basket {
    #[Fruit]
    #[Red]
    public const APPLE = 'apple';
}

$classConstant = new ReflectionClassConstant('Basket', 'APPLE');
$attributes = $classConstant->getAttributes('Fruit');
print_r(array_map(fn($attribute) => $attribute->getName(), $attributes));
?>

    
```

The above example will output:

```text


Array
(
    [0] => Fruit
)

    
```

**Filtering results by class name, with inheritance**

```php


<?php
interface Color {
}

#[Attribute]
class Fruit {
}

#[Attribute]
class Red implements Color {
}

class Basket {
    #[Fruit]
    #[Red]
    public const APPLE = 'apple';
}

$classConstant = new ReflectionClassConstant('Basket', 'APPLE');
$attributes = $classConstant->getAttributes('Color', ReflectionAttribute::IS_INSTANCEOF);
print_r(array_map(fn($attribute) => $attribute->getName(), $attributes));
?>

    
```

The above example will output:

```text


Array
(
    [0] => Red
)

    
```

## See Also

`ReflectionClass::getAttributes()` `ReflectionFunctionAbstract::getAttributes()` `ReflectionParameter::getAttributes()` `ReflectionProperty::getAttributes()`
