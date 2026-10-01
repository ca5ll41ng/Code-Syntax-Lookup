---
id: "en-php-function-reflectionproperty-isvirtual"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::isVirtual"
title: "Determines if a property is virtual"
signature: "public bool ReflectionProperty::isVirtual()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.isvirtual.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines if a property is virtual

## Description

```php
public bool ReflectionProperty::isVirtual()
```

Determines if a property is virtual.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the property is virtual, `false` otherwise.

## Examples

**`ReflectionProperty::isVirtual()` example**

```php


<?php
class Example
{
    // None of the hooks reference the property,
    // so this is virtual.
    public string $name { get => "Name here"; }

    // This hook references the property by name,
    // so it is not virtual.
    public int $age {
        set {
            if ($value <= 0) {
               throw new \InvalidArgumentException();
            }
            $this->age = $value;
        }
    }

    // Non-hooked properties are always not-virtual.
    public string $job;
}

$rClass = new \ReflectionClass(Example::class);

var_dump($rClass->getProperty('name')->isVirtual());
var_dump($rClass->getProperty('age')->isVirtual());
var_dump($rClass->getProperty('job')->isVirtual());
?>

   
```

The above example will output:

```text


bool(true)
bool(false)
bool(false)

   
```

## See Also

 Virtual properties
