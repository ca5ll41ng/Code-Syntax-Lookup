---
id: "en-php-function-reflectionproperty-getrawvalue"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::getRawValue"
title: "Returns the value of a property, bypassing a get hook if defined"
signature: "public mixed ReflectionProperty::getRawValue(object $object)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.getrawvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value of a property, bypassing a get hook if defined

## Description

```php
public mixed ReflectionProperty::getRawValue(object $object)
```

> This function is currently not documented; only its argument list is available.

Returns the value of a property, bypassing a `get` hook if defined.

## Parameters

- **`$object`** — The object from which to retrieve a value.

## Return Values

The stored value of the property, bypassing a `get` hook if defined.

## Errors/Exceptions

If the property is virtual, an `Error` will be thrown, as there is no raw value to retrieve.

## Examples

**`ReflectionProperty::getRawValue()` example**

```php


<?php

class Example
{
    public string $tag {
        get => strtolower($this->tag);
    }
}

$example = new Example();
$example->tag = 'PHP';

$rClass = new \ReflectionClass(Example::class);
$rProp = $rClass->getProperty('tag');

// These would go through the get hook, so would produce "php"
echo $example->tag, PHP_EOL;
echo $rProp->getValue($example), PHP_EOL;

// But this would bypass the hook and produce "PHP"
echo $rProp->getRawValue($example);

?>

   
```

The above example will output:

```text


php
php
PHP

   
```

## See Also

 Asymmetric property visibility
