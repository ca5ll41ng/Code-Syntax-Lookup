---
id: "en-php-function-reflectionproperty-isinitialized"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::isInitialized"
title: "Checks whether a property is initialized"
signature: "public bool ReflectionProperty::isInitialized(object|null $object = null)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.isinitialized.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks whether a property is initialized

## Description

```php
public bool ReflectionProperty::isInitialized(object|null $object = null)
```

Checks whether a property is initialized.

## Parameters

- **`$object`** — If the property is non-static an object must be provided to fetch the property from.

## Return Values

Returns `false` for typed properties prior to initialization, and for properties that have been explicitly `unset()`. For all other properties `true` will be returned.

## Errors/Exceptions

Throws a `ReflectionException` if the property is inaccessible. You can make a protected or private property accessible using `ReflectionProperty::setAccessible()`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$object` is nullable now. |

## Examples

**`ReflectionProperty::isInitialized()` example**

```php


<?php
class User
{
    public string $name;
}

$rp = new ReflectionProperty('User', 'name');
$user = new User;
var_dump($rp->isInitialized($user));
$user->name = 'Nikita';
var_dump($rp->isInitialized($user));
?>

   
```

The above example will output:

```text


bool(false)
bool(true)

   
```

## See Also

 `ReflectionProperty::hasType()`
