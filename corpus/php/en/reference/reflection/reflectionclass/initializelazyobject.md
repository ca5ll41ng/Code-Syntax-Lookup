---
id: "en-php-function-reflectionclass-initializelazyobject"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClass::initializeLazyObject"
title: "Forces initialization of a lazy object"
signature: "public object ReflectionClass::initializeLazyObject(object $object)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclass.initializelazyobject.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Forces initialization of a lazy object

## Description

```php
public object ReflectionClass::initializeLazyObject(object $object)
```

Forces initialization of the specified `$object`. This method has no effect if the object is not lazy or has already been initialized. Otherwise, initialization proceeds as described in the Initialization Sequence.

> In most cases, calling this method is unnecessary, as lazy objects initialize themselves automatically when their state is observed or modified.

## Parameters

- **`$object`** — The object to initialize.

## Return Values

If `$object` is a lazy proxy, returns its real instance. Otherwise, returns `$object` itself.

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

var_dump($object);

$reflector->initializeLazyObject($object);

var_dump($object);
?>

   
```

The above example will output:

```text


lazy ghost object(Example)#3 (0) {
  ["prop"]=>
  uninitialized(int)
}
Initializer called
object(Example)#3 (1) {
  ["prop"]=>
  int(1)
}

   
```

## See Also

 Lazy objects `ReflectionClass::newLazyGhost()` `ReflectionClass::markLazyObjectAsInitialized()` `ReflectionClass::isUninitializedLazyObject()`
