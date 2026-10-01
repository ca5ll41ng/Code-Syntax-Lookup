---
id: "en-php-function-reflectionclass-isuninitializedlazyobject"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClass::isUninitializedLazyObject"
title: "Checks if an object is lazy and uninitialized"
signature: "public bool ReflectionClass::isUninitializedLazyObject(object $object)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclass.isuninitializedlazyobject.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if an object is lazy and uninitialized

## Description

```php
public bool ReflectionClass::isUninitializedLazyObject(object $object)
```

Checks if an object is lazy and uninitialized.

## Parameters

- **`$object`** — The object to check.

## Return Values

Returns `true` if `$object` is an uninitialized lazy object, `false` otherwise.

## Examples

**Basic usage**

```php


<?php
class Example
{
    public function __construct(public int $prop) {
    }
}

$reflector = new ReflectionClass(Example::class);

$object = $reflector->newLazyGhost(function ($object) {
    echo "Initializer called\n";
    $object->__construct(1);
});

var_dump($reflector->isUninitializedLazyObject($object));

var_dump($object->prop);

var_dump($reflector->isUninitializedLazyObject($object));
?>

   
```

The above example will output:

```text


bool(true)
Initializer called
int(1)
bool(false)

   
```

## See Also

 Lazy objects `ReflectionClass::newLazyGhost()` `ReflectionClass::markLazyObjectAsInitialized()` `ReflectionClass::initializeLazyObject()`
